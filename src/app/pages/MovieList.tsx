import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { moods } from '../data/moods';
import { useEffect, useState } from 'react';
import { fetchMovieDetails, IMG_BASE, type TMDBMovie } from '../../services/tmdb';

interface EnrichedMovie {
  title: string;
  director: string;
  year: number;
  description: string;
  tmdb: TMDBMovie | null;
}

export default function MovieList() {
  const { moodId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<EnrichedMovie[]>([]);

  const mood = moods.find(m => m.id === moodId);

  useEffect(() => {
    if (!mood) return;

    async function loadMovies() {
      setIsLoading(true);
      const enriched = await Promise.all(
        mood!.movies.map(async (movie) => {
          const tmdb = await fetchMovieDetails(movie.title, movie.year);
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
            style={{ backgroundColor: mood.color }}
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
            A curated collection of films that embody this feeling
          </motion.p>
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
                        style={{ backgroundColor: mood.color + '33' }}
                      >
                        <span className="text-white/30 text-xs text-center px-3">{movie.title}</span>
                      </div>
                    )}

                    {/* Year badge */}
                    <div
                      className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full font-medium"
                      style={{ backgroundColor: mood.color, color: '#111' }}
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
                      {movie.director}
                    </p>
                    <p className="text-white/30 text-xs leading-relaxed line-clamp-2">
                      {movie.description}
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
    </div>
  );
}