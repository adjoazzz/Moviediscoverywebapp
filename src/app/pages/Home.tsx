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
  const containerRef = useRef<HTMLDivElement>(null);

  // Adjust scale based on viewport size
  useEffect(() => {
    const handleResize = () => {
      // Scale to fit the grid nicely in viewport
      const isMobile = window.innerWidth < 768;
      setScale(isMobile ? 0.45 : 0.85);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag if clicking on the background, not on a mood circle
    if ((e.target as HTMLElement).closest('.mood-circle')) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('.mood-circle')) return;
    
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMoodClick = (moodId: string) => {
    navigate(`/mood/${moodId}`);
  };

  // Handle pinch zoom on mobile
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
      {/* Header */}
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

      {/* Instructions */}
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

      {/* Draggable Canvas */}
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
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
          {moods.map((mood, index) => (
            <motion.button
              key={mood.id}
              className="mood-circle absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-2xl"
              style={{
                left: `${mood.position.x}px`,
                top: `${mood.position.y}px`,
                width: `${mood.size}px`,
                height: `${mood.size}px`,
                backgroundColor: mood.color,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleMoodClick(mood.id)}
            >
              <span className="text-white text-sm md:text-base lg:text-lg font-light tracking-wide pointer-events-none select-none">
                {mood.name}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Vignette effect */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/80" />
    </div>
  );
}