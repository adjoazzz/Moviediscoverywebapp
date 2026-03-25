import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { moods, type Mood } from '../../data/moods';
export type ContentType = 'movies' | 'drama' | 'anime' | 'books';
export type DramaFilter = 'all' | 'kdrama' | 'cdrama' | 'jdrama';

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

// Color logic:
// Top half:    left=deep red → center=light coral/salmon → right=deep orange
// Bottom half: left=deep indigo-blue → center=light sky blue → right=deep green
// Both hue AND lightness shift smoothly — each circle is unique, no checkerboard
function getMoodColor(col: number, row: number): string {
  // 4 clear quadrants — no blending between them
  // Top-left: RED | Top-right: YELLOW
  // Bottom-left: GREEN | Bottom-right: BLUE

  const isTop  = row < ROWS / 2;
  const isLeft = col < COLS / 2;

  // Base hue per quadrant
  let hue: number;
  if (isTop && isLeft)   hue = 4;    // RED
  if (isTop && !isLeft)  hue = 46;   // YELLOW
  if (!isTop && isLeft)  hue = 130;  // GREEN
  if (!isTop && !isLeft) hue = 218;  // BLUE

  // Slight variation within each quadrant so circles aren't all identical
  const tx = col / (COLS - 1);
  const ty = row / (ROWS - 1);
  const localX = isLeft ? tx * 2 : (tx - 0.5) * 2;       // 0→1 within quadrant horizontally
  const localY = isTop  ? ty * 2 : (ty - 0.5) * 2;       // 0→1 within quadrant vertically
  hue! += localX * 8 + localY * 4;  // gentle shift within the quadrant only

  const saturation = 85;
  const lightness  = 50 + localX * 4 + localY * 4;

  return `hsl(${Math.round(hue!)}, ${saturation}%, ${Math.round(lightness)}%)`;
}

// Returns black or white depending on which has better contrast against the bg color
function getTextColor(col: number, row: number): string {
  const hsl = getMoodColor(col, row);
  // Extract lightness from hsl string
  const match = hsl.match(/hsl\([\d.]+,\s*[\d.]+%,\s*([\d.]+)%\)/);
  if (!match) return '#111';
  const l = parseFloat(match[1]);
  // If lightness > 55%, use dark text; otherwise white
  return l > 55 ? '#111' : 'white';
}

function getGridPos(mood: typeof moods[0], cellSize: number) {
  const col = colMap[String(mood.position.x)] ?? 0;
  const row = rowMap[String(mood.position.y)] ?? 0;
  const stagger = (row % 2 === 1) ? cellSize * 0.5 : 0;
  return {
    x: (col - (COLS - 1) / 2) * cellSize + stagger,
    y: (row - (ROWS - 1) / 2) * cellSize,
    col,
    row,
  };
}

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const [cellSize, setCellSize] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const compute = () => {
      // On mobile: show ~4 circles across so they're big and tappable
      // On desktop: show full grid width
      const isMobile = window.innerWidth < 768;
      const cs = isMobile
        ? Math.floor(window.innerWidth / 4)   // 4 circles visible across on mobile
        : Math.floor(window.innerWidth / COLS); // full grid on desktop
      setCellSize(cs);
      const ox = cs * 0.5;
      const oy = cs * 0.5;
      setPosition({ x: ox, y: oy });
      posRef.current = { x: ox, y: oy };
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  // 92% fill — very tight with tiny black gap
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const circleSize = cellSize * 0.96;
  const activeSize = circleSize * (isMobile ? 1.7 : 1.35);

  function clamp(x: number, y: number) {
    // Extra padding so corner/edge circles are fully visible with black space around them
    const padding = cellSize * 1.5;
    const maxX = (COLS * cellSize) / 2 - window.innerWidth / 2 + padding;
    const maxY = (ROWS * cellSize) / 2 - window.innerHeight / 2 + padding;
    return {
      x: Math.min(maxX, Math.max(-maxX, x)),
      y: Math.min(maxY, Math.max(-maxY, y)),
    };
  }

  const mouseMoveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mouseMoving = useRef(false);
  const audioCtx = useRef<AudioContext | null>(null);
  const lastHapticId = useRef<string | null>(null);

  function triggerFeedback(moodId: string) {
    if (moodId === lastHapticId.current) return;
    lastHapticId.current = moodId;

    // Haptics — works on Android, silent fail on iOS
    if (navigator.vibrate) {
      navigator.vibrate(8); // very short, subtle pulse
    }

    // Sound — soft subtle 'pop' tone
    try {
      if (!audioCtx.current) {
        audioCtx.current = new AudioContext();
      }
      const ctx = audioCtx.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch (_) {}
  }

  // Mouse-follow — only active while mouse is actually moving
  useEffect(() => {
    if (cellSize === 0) return;
    const speed = 5;

    function tick() {
      if (mouseMoving.current && !isDragging.current) {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const nx = (mouseRef.current.x - cx) / cx;
        const ny = (mouseRef.current.y - cy) / cy;
        const ex = Math.sign(nx) * Math.pow(Math.abs(nx), 1.8);
        const ey = Math.sign(ny) * Math.pow(Math.abs(ny), 1.8);
        const newX = posRef.current.x - ex * speed;
        const newY = posRef.current.y - ey * speed;
        const clamped = clamp(newX, newY);
        posRef.current = clamped;
        setPosition({ ...clamped });
      }
      animFrameRef.current = requestAnimationFrame(tick);
    }

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [cellSize]);

  function onMouseMove(e: React.MouseEvent) {
    mouseRef.current = { x: e.clientX, y: e.clientY };

    if (isDragging.current) {
      // Click-drag panning
      didDrag.current = true;
      const clamped = clamp(e.clientX - dragStart.current.x, e.clientY - dragStart.current.y);
      posRef.current = clamped;
      setPosition(clamped);
      return;
    }

    // Mouse-follow: mark as moving, clear after 80ms of stillness
    mouseMoving.current = true;
    if (mouseMoveTimer.current) clearTimeout(mouseMoveTimer.current);
    mouseMoveTimer.current = setTimeout(() => {
      mouseMoving.current = false;
    }, 80);
  }

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    didDrag.current = false;
    mouseMoving.current = false;
    dragStart.current = { x: e.clientX - posRef.current.x, y: e.clientY - posRef.current.y };
  }

  function onMouseUp() { isDragging.current = false; }

  // Finds which circle (if any) is under the given screen coordinates
  function getCircleUnderTouch(clientX: number, clientY: number): string | null {
    // Convert screen coords to grid coords
    const gridX = clientX - window.innerWidth / 2 - posRef.current.x;
    const gridY = clientY - window.innerHeight / 2 - posRef.current.y;

    let closest: string | null = null;
    let closestDist = Infinity;

    moods.forEach((mood) => {
      const { x, y } = getGridPos(mood, cellSize);
      const dx = gridX - x;
      const dy = gridY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Check if within circle radius
      if (dist < (cellSize * 0.48) && dist < closestDist) {
        closestDist = dist;
        closest = mood.id;
      }
    });

    return closest;
  }

  function onTouchStart(e: React.TouchEvent) {
    isDragging.current = true;
    didDrag.current = false;
    const t = e.touches[0];
    dragStart.current = { x: t.clientX - posRef.current.x, y: t.clientY - posRef.current.y };
    // Immediately morph circle under finger
    const hit = getCircleUnderTouch(t.clientX, t.clientY);
    if (hit) { setActiveId(hit); triggerFeedback(hit); }
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!isDragging.current) return;
    didDrag.current = true;
    const t = e.touches[0];
    const clamped = clamp(t.clientX - dragStart.current.x, t.clientY - dragStart.current.y);
    posRef.current = clamped;
    setPosition(clamped);
    // As finger moves, morph whatever circle it's over
    const hit = getCircleUnderTouch(t.clientX, t.clientY);
    setActiveId(hit);
    if (hit) triggerFeedback(hit);
  }

  function onTouchEnd() {
    isDragging.current = false;
    // If it was a tap (not a drag), navigate to active mood
    if (!didDrag.current && activeId) {
      navigate(`/mood/${activeId}`);
    }
    // Don't reset activeId — keep last circle active until finger moves to a new one
  }

  function handleCircleInteract(moodId: string) {
    if (didDrag.current) return;
    // Desktop click: tap once to activate, tap again to navigate
    if (activeId === moodId) {
      navigate(`/mood/${moodId}`);
    } else {
      setActiveId(moodId);
    }
  }

  const activeMood = moods.find(m => m.id === activeId) ?? null;
  const activeMoodPos = activeMood ? getGridPos(activeMood, cellSize) : null;
  const activeMoodColor = activeMoodPos
    ? getMoodColor(activeMoodPos.col, activeMoodPos.row)
    : 'white';

  const query = searchQuery.trim().toLowerCase();
  const moodResults = query
    ? moods.filter((m: Mood) => m.name.toLowerCase().includes(query))
    : [];

  type ContentResult = { movie: { title: string; director: string; year: number }; mood: Mood; type: string };

  const movieResults: ContentResult[] = [];
  const bookResults: ContentResult[] = [];
  const animeResults: ContentResult[] = [];
  const dramaResults: ContentResult[] = [];

  if (query.length >= 2) {
    for (const mood of moods) {
      for (const movie of mood.movies) {
        if (movie.title.toLowerCase().includes(query)) movieResults.push({ movie, mood, type: 'film' });
      }
      if (movieResults.length >= 5) break;
    }
    for (const mood of books) {
      for (const movie of mood.movies) {
        if (movie.title.toLowerCase().includes(query)) bookResults.push({ movie, mood, type: 'book' });
      }
      if (bookResults.length >= 5) break;
    }
    for (const mood of animes) {
      for (const movie of mood.movies) {
        if (movie.title.toLowerCase().includes(query)) animeResults.push({ movie, mood, type: 'anime' });
      }
      if (animeResults.length >= 5) break;
    }
    for (const mood of dramas) {
      for (const movie of mood.movies) {
        if (movie.title.toLowerCase().includes(query)) dramaResults.push({ movie, mood, type: 'drama' });
      }
      if (dramaResults.length >= 5) break;
    }
  }

  const hasResults = moodResults.length > 0 || movieResults.length > 0 || bookResults.length > 0 || animeResults.length > 0 || dramaResults.length > 0;

  if (cellSize === 0) return <div className="w-screen h-screen bg-black" />;

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
        <h1 className="text-white text-2xl tracking-tight font-light">
          mood<span className="text-white/30">/</span>film
        </h1>

        {/* Search area */}
        <div className="flex items-center gap-3 relative">
          {/* Expandable search input */}
          <div
            style={{
              width: searchOpen ? 220 : 0,
              opacity: searchOpen ? 1 : 0,
              overflow: 'hidden',
              transition: 'width 0.3s ease, opacity 0.3s ease',
            }}
          >
            <input
              ref={searchRef}
              type="text"
              placeholder="Search a mood..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => e.key === 'Escape' && (setSearchOpen(false), setSearchQuery(''))}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 20,
                padding: '6px 14px',
                color: 'white',
                fontSize: 13,
                outline: 'none',
                width: '100%',
              }}
            />
          </div>

          {/* Search icon button */}
          <button
            onClick={() => {
              setSearchOpen(prev => {
                if (prev) { setSearchQuery(''); return false; }
                setTimeout(() => searchRef.current?.focus(), 50);
                return true;
              });
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {searchOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            )}
          </button>

          {/* Dropdown results */}
          {searchQuery && hasResults && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 8,
              background: 'rgba(20,20,20,0.97)',
              backdropFilter: 'blur(16px)',
              borderRadius: 14,
              overflow: 'hidden',
              minWidth: 260,
              maxWidth: 320,
              maxHeight: 400,
              overflowY: 'auto',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.08)',
              zIndex: 200,
            }}>
              {/* Mood results */}
              {moodResults.length > 0 && (
                <>
                  <div style={{ padding: '8px 14px 4px', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Moods
                  </div>
                  {moodResults.slice(0, 4).map((mood: Mood) => {
                    const { col, row } = getGridPos(mood, cellSize);
                    const color = getMoodColor(col, row);
                    return (
                      <button
                        key={mood.id}
                        onClick={() => { navigate(`/mood/${mood.id}`); setSearchQuery(''); setSearchOpen(false); }}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '9px 14px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                      >
                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color, flexShrink: 0 }}/>
                        <span style={{ color: 'white', fontSize: 14 }}>{mood.name}</span>
                      </button>
                    );
                  })}
                </>
              )}

              {/* Movie results */}
              {[
                { results: movieResults, label: '🎬 Films', show: movieResults.length > 0 },
                { results: bookResults, label: '📚 Books', show: bookResults.length > 0 },
                { results: animeResults, label: '🎌 Anime', show: animeResults.length > 0 },
                { results: dramaResults, label: '📺 Drama', show: dramaResults.length > 0 },
              ].map(({ results, label, show }) => show && (
                <React.Fragment key={label}>
                  <div style={{ padding: '8px 14px 4px', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {label}
                  </div>
                  {results.slice(0, 5).map(({ movie, mood }: { movie: { title: string; director: string; year: number }; mood: Mood }, i: number) => {
                    const { col, row } = getGridPos(mood, cellSize);
                    const color = getMoodColor(col, row);
                    return (
                      <button
                        key={i}
                        onClick={() => { navigate(`/mood/${mood.id}`); setSearchQuery(''); setSearchOpen(false); }}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '9px 14px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.04)', textAlign: 'left' }}
                      >
                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color, flexShrink: 0 }}/>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ color: 'white', fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{movie.title}</div>
                          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>
                            {movie.year} · <span style={{ color: color }}>{mood.name}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          )}

          {searchQuery && !hasResults && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 8,
              background: 'rgba(20,20,20,0.97)',
              backdropFilter: 'blur(16px)',
              borderRadius: 14,
              padding: '12px 16px',
              color: 'rgba(255,255,255,0.4)',
              fontSize: 13,
              zIndex: 200,
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              No results found
            </div>
          )}
        </div>
      </header>

      {/* Draggable canvas — drag works everywhere */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ cursor: isDragging.current ? 'grabbing' : 'grab', touchAction: 'none' }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          {moods.map((mood: Mood, index: number) => {
            const { x, y, col, row } = getGridPos(mood, cellSize);
            const color = getMoodColor(col, row);
            const shape = morphShapes[index % morphShapes.length];
            const textColor = getTextColor(col, row);
            const isActive = activeId === mood.id;
            const size = isActive ? activeSize : circleSize;

            // Circles ripple away from active one — gentle nudge, not a shove
            let pushX = 0;
            let pushY = 0;
            if (activeMoodPos && !isActive) {
              const dx = x - activeMoodPos.x;
              const dy = y - activeMoodPos.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist > 0) {
                const maxPush = cellSize * 0.35; // gentle — just enough to show space
                const falloff = cellSize * 3.5;
                const strength = maxPush / (1 + (dist / falloff) * (dist / falloff));
                pushX = (dx / dist) * strength;
                pushY = (dy / dist) * strength;
              }
            }

            return (
              <div
                key={mood.id}
                style={{
                  position: 'absolute',
                  left: x + pushX,
                  top: y + pushY,
                  width: activeSize,
                  height: activeSize,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: isActive ? 20 : 1,
                  transition: 'left 0.4s cubic-bezier(0.34,1.4,0.64,1), top 0.4s cubic-bezier(0.34,1.4,0.64,1)',
                }}
              >
                <div
                  onMouseEnter={() => { if (!isDragging.current) { setActiveId(mood.id); triggerFeedback(mood.id); } }}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => handleCircleInteract(mood.id)}
                  style={{
                    width: size,
                    height: size,
                    backgroundColor: color,
                    borderRadius: isActive ? shape.hover : '50%',
                    rotate: isActive ? shape.rotate : '0deg',
                    transition: [
                      'width 0.4s cubic-bezier(0.34,1.4,0.64,1)',
                      'height 0.4s cubic-bezier(0.34,1.4,0.64,1)',
                      'border-radius 0.4s cubic-bezier(0.34,1.4,0.64,1)',
                      'rotate 0.4s cubic-bezier(0.34,1.4,0.64,1)',
                    ].join(', '),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      color: '#111',
                      fontWeight: isActive ? '700' : '500',
                      fontSize: isActive ? circleSize * 0.16 : circleSize * 0.13,
                      textAlign: 'center',
                      padding: '0 6px',
                      lineHeight: 1.2,
                      userSelect: 'none',
                      pointerEvents: 'none',
                      rotate: isActive ? `-${shape.rotate}` : '0deg',
                      transition: 'font-size 0.4s ease, rotate 0.4s ease',
                      display: 'inline-block',
                    }}
                  >
                    {mood.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom info bar — hidden */}
      <div
        className="hidden"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 16px 28px',
          transform: activeMood ? 'translateY(0)' : 'translateY(120%)',
          transition: 'transform 0.4s cubic-bezier(0.34,1.2,0.64,1)',
          pointerEvents: activeMood ? 'auto' : 'none',
        }}
      >
        <div
          style={{
            background: 'rgba(25,25,25,0.96)',
            backdropFilter: 'blur(16px)',
            borderRadius: 24,
            padding: '18px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              color: activeMoodColor,
              fontWeight: '700',
              fontSize: 18,
              margin: '0 0 4px 0',
              transition: 'color 0.3s ease',
            }}>
              {activeMood?.name}
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 14,
              margin: 0,
              lineHeight: 1.4,
            }}>
              {'Tap again to explore films'}
            </p>
          </div>
          <button
            onClick={() => activeMood && navigate(`/mood/${activeMood.id}`)}
            style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              background: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}