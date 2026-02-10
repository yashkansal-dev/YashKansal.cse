import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Landing = ({ onEnter }: { onEnter: () => void }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start exit (fade out)
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2800);

    // Enter main site after exit completes
    const enterTimer = setTimeout(() => {
      onEnter();
    }, 3500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(enterTimer);
    };
  }, [onEnter]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="
            fixed inset-0 z-50
            min-h-screen
            bg-gray-900
            flex items-center justify-center
            overflow-hidden
          "
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 text-gray-300 text-xl md:text-2xl tracking-wide">
            {/* Dot */}
            <motion.span
              className="w-3 h-3 rounded-full bg-gray-300"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Text */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Developer, Coder, Problem Solver.
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Landing;
