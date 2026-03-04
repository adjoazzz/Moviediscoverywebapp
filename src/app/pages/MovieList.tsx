import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { moods } from '../data/moods';
import { useEffect, useState } from 'react';

export default function MovieList() {
  const { moodId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const mood = moods.find(m => m.id === moodId);

  useEffect(() => {
    // Simulate loading for smooth transition
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!mood) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/60 text-lg mb-6">Mood not found</p>
          <button
            onClick={() => navigate('/')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Return home
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-24 h-24 rounded-full"
          style={{ backgroundColor: mood.color }}
        />
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
        className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-8 md:mb-12"
            style={{ backgroundColor: mood.color }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight font-light"
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

      {/* Movies Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {mood.movies.map((movie, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="border-t border-white/10 pt-6 md:pt-8 space-y-4">
                  {/* Movie Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl md:text-3xl mb-2 tracking-tight group-hover:text-white/80 transition-colors">
                        {movie.title}
                      </h3>
                      <p className="text-white/50 text-sm md:text-base tracking-wide">
                        {movie.director}
                      </p>
                    </div>
                    <div
                      className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xs md:text-sm opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: mood.color }}
                    >
                      {movie.year}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-base md:text-lg leading-relaxed tracking-wide">
                    {movie.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
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
