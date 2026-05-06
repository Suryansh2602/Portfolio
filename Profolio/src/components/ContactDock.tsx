// src/components/ContactDock.tsx
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ContactDock = () => {
  return (
    <motion.div 
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-1/2 z-50"
    >
      <div className="flex items-center gap-4 bg-slate-900/90 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        
        {/* WhatsApp Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openWhatsApp("Direct Query")}
          className="flex items-center gap-2 text-white bg-green-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20"
        >
          <MessageCircle size={18} />
          <span>Consult</span>
        </motion.button>
        
        {/* Divider */}
        <div className="w-1px h-6 bg-slate-700/50" />

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <motion.a 
            whileHover={{ y: -3, color: "#fff" }}
            href="https://linkedin.com/in/suryansh-pushpkar" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            className="text-slate-400 transition-colors"
          >
            <ExternalLink size={20} />
          </motion.a>
          
          <motion.a 
            whileHover={{ y: -3, color: "#fff" }}
            href="https://github.com/Suryansh2602" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="text-slate-400 transition-colors"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
