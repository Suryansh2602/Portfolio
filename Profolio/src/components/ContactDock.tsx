// src/components/ContactDock.tsx
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ContactDock = () => {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-28 h-28"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        
        {/* ROTATING TEXT OVERLAY */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              {/* Invisible path that defines a perfect circle for the text to follow */}
              <path
                id="textPathCircle"
                d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              />
            </defs>
            <text className="text-[9.5px] font-black uppercase tracking-[0.18em] fill-slate-800 dark:fill-slate-200 transition-colors duration-500">
              <textPath href="#textPathCircle" startOffset="0%">
                • CONSULT NOW • CHAT WITH US 
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* INNER CIRCULAR BUTTON */}
        <div className="relative z-10">
          <motion.button 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => openWhatsApp("Direct Query")}
            className="flex items-center justify-center w-14 h-14 text-white bg-green-600 dark:bg-green-500 rounded-full hover:bg-green-500 dark:hover:bg-green-400 transition-colors shadow-[0_4px_20px_rgba(34,197,94,0.3)] border border-green-500/20"
          >
            <MessageCircle size={22} className="fill-current" />
          </motion.button>

          {/* Pulse Notification Dot */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 border-2 border-slate-50 dark:border-slate-950 transition-colors duration-500"></span>
          </span>
        </div>

      </div>
    </motion.div>
  );
};