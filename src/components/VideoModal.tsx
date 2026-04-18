import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../store';

export function VideoModal() {
  const { activeVideo, setActiveVideo } = useStore();

  if (!activeVideo) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B0F19]/95 backdrop-blur-xl"
        onClick={() => setActiveVideo(null)}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          onClick={e => e.stopPropagation()}
        >
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <iframe 
            src={`https://www.youtube.com/embed/${activeVideo.videoUrl || 'dQw4w9WgXcQ'}?autoplay=1`} 
            title={activeVideo.title}
            className="w-full h-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
          
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
            <h2 className="text-2xl font-heading font-black text-white">{activeVideo.title}</h2>
            <p className="text-gray-300 text-sm mt-1">Now Playing • Ep 1 • Sub/Dub</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
