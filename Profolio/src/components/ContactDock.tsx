// src/components/ContactDock.tsx
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Github, Mail } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ContactDock = () => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 shadow-2xl">
        <button 
          onClick={() => openWhatsApp("Direct Query")}
          className="flex items-center gap-2 text-white bg-green-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-green-500 transition-colors"
        >
          <MessageCircle size={18} />
          <span>Consult</span>
        </button>
        
        <div className="w-[1px] h-6 bg-slate-700 mx-2" />

        <a href="https://linkedin.com/in/your-profile" target="_blank" className="text-slate-400 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/your-username" target="_blank" className="text-slate-400 hover:text-white transition-colors">
          <Github size={20} />
        </a>
      </div>
    </motion.div>
  );
};