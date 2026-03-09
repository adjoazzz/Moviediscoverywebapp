import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { moods } from '../data/moods';

const morphShapes = [
  { hover: "50% 20% 50% 20% / 20% 50% 20% 50%", rotate: "15deg" },
  { hover: "50% 50% 50% 50% / 60% 60% 40% 40%", rotate: "0deg" },
  { hover: "50% 50% 0% 0% / 100% 100% 0% 0%",   rotate: "0deg" },
  { hover: "50% 50% 50% 50% / 8% 8% 92% 92%",   rotate: "0deg" },
  { hover: "30% 70% 70% 30% / 70% 30% 30% 70%", rotate: "0deg" },
  { hover: "60% 40% 30% 70% / 40% 50% 60% 50%", rotate: "-6deg" },
  { hover: "50% 50% 8% 8% / 50% 50% 8% 8%",     rotate: "0deg" },
  { hover: "50% 0% 50% 0%",                       rotate: "0deg" },
  { hover: "40% 10% 40% 10% / 10% 40% 10% 40%", rotate: "22deg" },
];

export default function Home() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1.5);
  const [cellSize, setCellSize] = useState(200);
  const [hoveredId, setHoveredId] = useState<string | null>('adventurous');
  const containerRef = useRef<HTMLDivElement>(null);

  const COLS = 10;
  const ROWS = 10;

  const colMap: Record<string, number> = {
    '-900': 0, '-700': 1, '-500': 2, '-300': 3, '-100': 4,
    '0': 4,
    '100': 5, '200': 5, '300': 6, '400': 6,
    '500': 7, '600': 7, '700': 8, '800': 8, '900': 9
  };

  const rowMap: Record<string, number> = {
    '-900': 0, '-700': 1, '-500': 2, '-300': 3, '-100': 4,
    '0': 4,
    '100': 5, '300': 6, '500': 7, '700': 8, '900': 9
  };

  useEffect(() => {
    const handleResize = () => {
      const computed = Math.floor(window.innerWidth / COLS);
      setCellSize(computed);
      const offsetX = 0.5 * computed * 1.5;
      const offsetY = 0.5 * computed * 1.5;
      setPosition({ x: offsetX, y: offsetY });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const circleSize = cellSize * 0.72;

  const getMoodColor = (mood: typeof moods[0]) => {
    const col = colMap[String(mood.position.x)] ?? 0;
    const row = rowMap[String(mood.position.y)] ?? 0;

    const tx = col / (COLS - 1); // 0=left, 1=right
    const ty = row / (ROWS - 1); // 0=top, 1=bottom

    // Four corner hues:
    // Top-left: Red (0), Top-right: Orange (30)
    // Bottom-left: Blue (220), Bottom-right: Green (140)
    const hueTopLeft = 0;
    const hueTopRight = 30;
    const hueBottomLeft = 220;
    const hueBottomRight = 140;

    // Bilinear interpolation across the grid
    const hueTop = hueTopLeft + (hueTopRight - hueTopLeft) * tx;
    const hueBottom = hueBottomLeft + (hueBottomRight - hueBottomLeft) * tx;
    const hue = hueTop + (hueBottom - hueTop) * ty;

    // Slight lightness variation per row for shade depth
    const lightness = 48 + (row % 3) * 4;

    return `hsl(${hue}, 85%, ${lightness}%)`;
  };

  const getPos = (mood: typeof moods[0]) => {
    const col = colMap[String(mood.position.x)] ?? 0;
    const row = rowMap[String(mood.position.y)] ?? 0;
    const x = (col - (COLS - 1) / 2) * cellSize;
    const y = (row - (ROWS - 1) / 2) * cellSize;
    return { x, y };
  };

  const getShape = (index: number) => morphShapes[index % morphShapes.length];

  const getClampedPosition = (x: number, y: number, currentScale: number) => {
    const gridWidth = COLS * cellSize * currentScale;
    const gridHeight = ROWS * cellSize * currentScale;
    const maxX = Math.max(0, gridWidth / 2 - window.innerWidth / 2);
    const maxY = Math.max(0, gridHeight / 2 - window.innerHeight / 2);
    return {
      x: Math.min(maxX, Math.max(-maxX, x)),
      y: Math.min(maxY, Math.max(-maxY, y)),
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.mood-circle')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const raw = { x: e.clientX - dragStart.x, y: e.clientY - dragStart.y };
    setPosition(getClampedPosition(raw.x, raw.y, scale));
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('.mood-circle')) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const raw = { x: touch.clientX - dragStart.x, y: touch.clientY - dragStart.y };
    setPosition(getClampedPosition(raw.x, raw.y, scale));
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleMoodClick = (moodId: string) => navigate(`/mood/${moodId}`);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = e.deltaY * -0.01;
        const minScale = Math.max(
          window.innerWidth / (COLS * cellSize),
          window.innerHeight / (ROWS * cellSize)
        );
        setScale(prev => {
          const next = Math.min(Math.max(minScale, prev + delta), 4);
          setPosition(pos => getClampedPosition(pos.x, pos.y, next));
          return next;
        });
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [cellSize]);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl md:text-3xl tracking-tight">
            mood<span className="text-white/40">/</span>film
          </h1>
          <p className="hidden md:block text-white/50 text-sm tracking-wide">
            Explore by feeling
          </p>
        </div>
      </header>

      <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/40 text-xs md:text-sm text-center tracking-wide px-4"
        >
          Drag to explore • Tap a mood to discover films • Pinch to zoom
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="absolute inset-0"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <motion.div
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            x: position.x,
            y: position.y,
            scale: scale,
          }}
        >
          {moods.map((mood, index) => {
            const pos = getPos(mood);
            const color = getMoodColor(mood);
            const shape = getShape(index);
            const isHovered = hoveredId === mood.id;

            return (
              <div
                key={mood.id}
                className="mood-circle absolute"
                style={{
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  width: `${circleSize * 1.9}px`,
                  height: `${circleSize * 1.9}px`,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: isHovered ? 10 : 1,
                }}
              >
                <motion.button
                  className="flex items-center justify-center cursor-pointer"
                  style={{
                    backgroundColor: color,
                    borderRadius: isHovered ? shape.hover : '50%',
                    rotate: isHovered ? shape.rotate : '0deg',
                    boxShadow: 'none',
                    transition: [
                      'border-radius 0.45s cubic-bezier(0.34,1.4,0.64,1)',
                      'rotate 0.45s cubic-bezier(0.34,1.4,0.64,1)',
                      'width 0.35s cubic-bezier(0.34,1.4,0.64,1)',
                      'height 0.35s cubic-bezier(0.34,1.4,0.64,1)',
                    ].join(', '),
                    width: isHovered ? `${circleSize * 1.8}px` : `${circleSize}px`,
                    height: isHovered ? `${circleSize * 1.8}px` : `${circleSize}px`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.015,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 120,
                  }}
                  onMouseEnter={() => setHoveredId(mood.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onTouchStart={() => setHoveredId(mood.id)}
                  onClick={() => handleMoodClick(mood.id)}
                >
                  <span
                    className="text-black font-semibold tracking-wide pointer-events-none select-none text-center px-2 leading-tight"
                    style={{
                      fontSize: isHovered ? `${circleSize * 0.18}px` : `${circleSize * 0.13}px`,
                      display: 'inline-block',
                      rotate: isHovered ? `-${shape.rotate}` : '0deg',
                      transition: 'rotate 0.45s cubic-bezier(0.34,1.4,0.64,1), font-size 0.35s ease',
                    }}
                  >
                    {mood.name}
                  </span>
                </motion.button>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Subtle vignette on sides only */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 8%, transparent 92%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </div>
  );
}