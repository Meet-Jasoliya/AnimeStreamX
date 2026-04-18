import { Play } from 'lucide-react';
import { useStore } from '../store';

export function ContinueWatching() {
  const { setActiveVideo } = useStore();

  const handleResume = () => {
    setActiveVideo({
      id: 'naruto-resume',
      title: 'Naruto',
      rating: 9.5,
      image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
      videoUrl: 'UmiN-Xp9vAs',
      progress: 65
    });
  };

  return (
    <section className="h-full flex flex-col space-y-4">
      <h2 className="text-lg md:text-xl font-heading font-bold text-white h-7 flex items-center">Continue Watching</h2>
      <div 
        onClick={handleResume}
        className="flex-1 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-brand-orange/50 transition-all shadow-lg shadow-black/50 bg-[#131927] min-h-[200px]"
      >
        <img src="https://cdn.myanimelist.net/images/anime/13/17405.jpg" alt="Naruto Equivalent" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent transition-colors group-hover:via-[#0B0F19]/20" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 bg-brand-orange/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(255,106,0,0.6)] transform scale-90 group-hover:scale-100 transition-all">
            <Play className="w-6 h-6 text-white fill-current" />
          </div>
        </div>

        <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/90 to-transparent">
          <div className="w-full h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden">
            <div className="h-full bg-brand-orange w-[65%] rounded-full shadow-[0_0_10px_rgba(255,106,0,0.8)] relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full translate-x-1" />
            </div>
          </div>
          <h3 className="font-bold text-white text-lg font-heading tracking-wide">Naruto</h3>
          <p className="text-sm text-gray-300 font-medium mt-0.5">Ep 134 - The End of Tears</p>
        </div>
      </div>
    </section>
  );
}
