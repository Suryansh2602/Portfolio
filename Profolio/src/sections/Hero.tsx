// src/sections/Hero.tsx
import { motion } from 'framer-motion';
import { openWhatsApp } from '../utils/whatsapp';

export const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-white overflow-hidden relative">
      {/* Animated Background Element */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h2 className="text-blue-600 font-mono mb-2">Hi, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
          Software Developer.
        </h1>
        <p className="max-w-xl mx-auto text-slate-600 text-lg mb-8">
          I build robust backend architectures and engaging full-stack experiences. 
          Currently focused on Microservices and Scalable Systems.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openWhatsApp("Development")}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold shadow-lg hover:bg-blue-700 transition-colors"
        >
          Book Consultancy
        </motion.button>
      </motion.div>
    </section>
  );
};