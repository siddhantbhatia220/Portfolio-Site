import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-foreground/70 flex items-center gap-2 justify-center md:justify-start">
              Designed & Built with{' '}
              <Heart className="text-primary w-4 h-4 animate-glow-pulse" fill="currentColor" />{' '}
              by Siddhant Sharma
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Powered by React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-muted-foreground mb-2">© 2024 All rights reserved</p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
            >
              <ArrowUp size={16} />
              Back to Top
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-50" />
    </footer>
  );
};
