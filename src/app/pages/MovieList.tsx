import { useParams, useNavigate, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { moods } from '../../data/moods';
import { useEffect, useState } from 'react';
import { fetchMovieDetails, fetchTrailerKey, fetchTVDetails, fetchTVTrailerKey, fetchBookDetails, IMG_BASE, type TMDBMovie, type BookDetails } from '../../services/tmdb';
type ContentType = 'movies' | 'drama' | 'anime' | 'books';
import { getMoodColorFromPosition } from '../../utils/moodColor';

interface EnrichedMovie {
  title: string;
  director: string;
  year: number;
  tmdb: TMDBMovie | null;
}

export default function MovieList() {
  const { moodId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const contentType: ContentType = (location.state as any)?.contentType ?? 'movies';
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<EnrichedMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<EnrichedMovie | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [trailerLoading, setTrailerLoading] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const mood = moods.find(m => m.id === moodId);

  useEffect(() => {
    if (!selectedMovie?.tmdb?.id) {
      setTrailerKey(null);
      setShowTrailer(false);
      return;
    }
    setTrailerKey(null);
    setShowTrailer(false);
    setTrailerLoading(true);
    const fetchFn = (contentType === 'drama' || contentType === 'anime')
      ? fetchTVTrailerKey
      : fetchTrailerKey;
    fetchFn(selectedMovie.tmdb.id).then(key => {
      setTrailerKey(key);
      setTrailerLoading(false);
    });
  }, [selectedMovie]);

  useEffect(() => {
    if (!mood) return;

    async function loadMovies() {
      setIsLoading(true);
      const enriched = await Promise.all(
        mood!.movies.map(async (movie: any) => {
          let tmdb = null;
          if (contentType === 'movies') {
            tmdb = await fetchMovieDetails(movie.title, movie.year);
          } else if (contentType === 'drama' || contentType === 'anime') {
            tmdb = await fetchTVDetails(movie.title, movie.year);
          } else if (contentType === 'books') {
            tmdb = await fetchBookDetails(movie.title, movie.author);
          }
          return { ...movie, tmdb };
        })
      );
      setMovies(enriched);
      setIsLoading(false);
    }

    loadMovies();
  }, [moodId]);

  if (!mood) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/60 text-lg mb-6">Mood not found</p>
          <button onClick={() => navigate('/')} className="text-white/80 hover:text-white transition-colors">
            Return home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/60"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm tracking-wide">Back to moods</span>
            </button>
            <h1 className="text-lg md:text-xl tracking-tight">
              mood<span className="text-white/40">/</span>film
            </h1>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-12 md:pt-40 md:pb-20 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-8"
            style={{ backgroundColor: getMoodColorFromPosition(mood.position.x, mood.position.y) }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tight font-light"
          >
            {mood.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl tracking-wide"
          >
            {mood.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ marginTop: 12, display: 'flex', gap: 8 }}
          >
            {(['movies', 'drama', 'anime', 'books'] as ContentType[]).map(type => (
              <span
                key={type}
                style={{
                  padding: '4px 12px',
                  borderRadius: 20,
                  fontSize: 12,
                  background: contentType === type ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                  color: contentType === type ? 'white' : 'rgba(255,255,255,0.3)',
                  textTransform: 'capitalize',
                }}
              >
                {type === 'movies' ? '🎬' : type === 'drama' ? '📺' : type === 'anime' ? '🎌' : '📚'} {type}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Loading state */}
      {isLoading && (
        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="bg-white/5 rounded-xl aspect-[2/3] mb-3" />
                  <div className="bg-white/5 rounded h-4 mb-2 w-3/4" />
                  <div className="bg-white/5 rounded h-3 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Movies Grid */}
      {!isLoading && (
        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {movies.map((movie, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMovie(movie)}
                >
                  {/* Poster */}
                  <div
                    className="relative rounded-xl overflow-hidden mb-3"
                    style={{ aspectRatio: '2/3' }}
                  >
                    {movie.tmdb?.poster_path ? (
                      <img
                        src={`${IMG_BASE}${movie.tmdb.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      // Fallback if no poster
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: getMoodColorFromPosition(mood.position.x, mood.position.y) + '33' }}
                      >
                        <span className="text-white/30 text-xs text-center px-3">{movie.title}</span>
                      </div>
                    )}

                    {/* Year badge */}
                    <div
                      className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full font-medium"
                      style={{ backgroundColor: getMoodColorFromPosition(mood.position.x, mood.position.y), color: '#111' }}
                    >
                      {movie.year}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-medium tracking-tight leading-snug group-hover:text-white/80 transition-colors line-clamp-2">
                      {movie.title}
                    </h3>
                    <p className="text-white/40 text-xs md:text-sm tracking-wide">
                      {(movie as any).author || (movie as any).director || (movie as any).studio}
                    </p>
                    <p className="text-white/30 text-xs leading-relaxed line-clamp-2">
                      {movie.tmdb?.overview || 'No description available.'}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="px-6 md:px-12 pb-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-white/10 pt-12">
            <button
              onClick={() => navigate('/')}
              className="text-white/40 hover:text-white text-sm md:text-base tracking-wide transition-colors"
            >
              ← Explore more moods
            </button>
          </div>
        </div>
      </motion.section>
    {/* Movie Modal */}
      {selectedMovie && (
        <div
          onClick={() => setSelectedMovie(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'rgba(18,18,18,0.98)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              overflow: 'hidden',
              maxWidth: 480,
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Poster */}
            {selectedMovie.tmdb?.poster_path && (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 24px 0' }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${selectedMovie.tmdb.poster_path}`}
                  alt={selectedMovie.title}
                  style={{ width: '55%', borderRadius: 12, display: 'block' }}
                />
              </div>
            )}

            {/* Content */}
            <div style={{ padding: '20px 24px 28px' }}>
              {/* Close button */}
              <button
                onClick={() => setSelectedMovie(null)}
                style={{
                  float: 'right', background: 'rgba(255,255,255,0.08)',
                  border: 'none', borderRadius: '50%', width: 32, height: 32,
                  cursor: 'pointer', color: 'white', fontSize: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >×</button>

              {/* Title & meta */}
              <h2 style={{ color: 'white', fontSize: 22, fontWeight: 600, marginBottom: 6, paddingRight: 40, lineHeight: 1.3 }}>
                {selectedMovie.title}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 16 }}>
                {(selectedMovie as any).author || (selectedMovie as any).director || (selectedMovie as any).studio} · {selectedMovie.year}
              </p>

              {/* Description */}
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.7 }}>
                {selectedMovie.tmdb?.overview || 'No description available.'}
              </p>

              {/* Rating + Trailer button row */}
              <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                {selectedMovie.tmdb?.vote_average && selectedMovie.tmdb.vote_average > 0 && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center',
                    gap: 6, background: 'rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: '6px 12px',
                  }}>
                    <span style={{ color: '#fbbf24', fontSize: 13 }}>★</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
                      {selectedMovie.tmdb.vote_average.toFixed(1)} / 10
                    </span>
                  </div>
                )}

                {trailerLoading && (
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>Loading trailer...</div>
                )}

                {!trailerLoading && trailerKey && !showTrailer && (
                  <button
                    onClick={() => setShowTrailer(true)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 20, padding: '6px 14px',
                      color: 'white', fontSize: 13, cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontSize: 11 }}>▶</span> Watch Trailer
                  </button>
                )}
              </div>

              {/* Trailer embed */}
              {showTrailer && trailerKey && (
                <div style={{ marginTop: 20, borderRadius: 12, overflow: 'hidden', aspectRatio: '16/9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                    title="Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none', display: 'block' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}