import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { moods } from '../data/moods';

export default function Home() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [cellSize, setCellSize] = useState(200);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const s = isMobile ? 0.45 : 0.85;
      setScale(s);

      // 8 columns, we want them to fill the viewport width with some padding
      // viewport width in "canvas units" = window.innerWidth / scale
      const canvasWidth = window.innerWidth / s;
      const computed = Math.floor(canvasWidth / 8); // divide by 8 columns
      setCellSize(computed);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute dynamic positions from grid indices instead of hardcoded coords
  // Columns: 8 per row, mapped from x values: -700,-500,-300,-100,100,300,500,700
  // We replace those with computed column indices 0–7
  const colMap: Record<number, number> = { '-700': 0, '-500': 1, '-300': 2, '-100': 3, 100: 4, 300: 5, 500: 6, 700: 7 };
  const rowMap: Record<number, number> = { '-1100': 0, '-900': 1, '-700': 2, '-500': 3, '-300': 4, '-100': 5, 100: 6, 300: 7, 500: 8, 700: 9, 900: 10, 1100: 11 };

  const COLS = 8;
  const ROWS = 12;
  const circleSize = cellSize * 0.88; // circle takes 88% of the cell, leaving ~12% gap

  const getPos = (mood: typeof moods[0]) => {
    const col = colMap[mood.position.x] ?? 0;
    const row = rowMap[mood.position.y] ?? 0;
    // Center the grid: offset so grid is centered at origin
    const x = (col - (COLS - 1) / 2) * cellSize;
    const y = (row - (ROWS - 1) / 2) * cellSize;
    return { x, y };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.mood-circle')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
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
    setPosition({ x: touch.clientX - dragStart.x, y: touch.clientY - dragStart.y });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleMoodClick = (moodId: string) => navigate(`/mood/${moodId}`);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = e.deltaY * -0.01;
        setScale(prev => Math.min(Math.max(0.3, prev + delta), 2));
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

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
            return (
              <motion.button
                key={mood.id}
                className="mood-circle absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer shadow-2xl"
                style={{
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  width: `${circleSize}px`,
                  height: `${circleSize}px`,
                  backgroundColor: mood.color,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.02,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMoodClick(mood.id)}
              >
                <span
                  className="text-white font-light tracking-wide pointer-events-none select-none text-center px-1 leading-tight"
                  style={{ fontSize: `${circleSize * 0.12}px` }}
                >
                  {mood.name}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/80" />
    </div>
  );
}