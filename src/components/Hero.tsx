import { Play, Plus, Check } from 'lucide-react';
import { useStore } from '../store';

export function Hero() {
  const { watchlist, toggleWatchlist, setActiveVideo } = useStore();

  const handleWatchNow = () => {
    setActiveVideo({
      id: 'aot',
      title: 'Attack on Titan',
      rating: 9.8,
      image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
      videoUrl: 'MGRm4IzK1SQ' // Real AOT trailer
    });
  };

  const isInWatchlist = watchlist.includes('aot');

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] min-h-[60vh] md:min-h-[500px] max-h-[800px] mt-0 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" 
          alt="Attack on Titan Concept" 
          className="w-full h-full object-cover object-center" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent" />
      </div>
      
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center mt-12 md:mt-0">
        <div className="max-w-2xl space-y-4 md:space-y-6">
          <p className="text-gray-300 font-medium tracking-wide uppercase text-sm md:text-base">Now Streaming:</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading text-white drop-shadow-xl tracking-tight leading-tight">
            Attack on Titan
          </h1>
          
          <div className="flex items-center gap-2 w-full max-w-[280px] pt-2">
             <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
               <div className="h-full bg-brand-orange w-1/3 rounded-full shadow-[0_0_10px_rgba(255,106,0,0.8)]"></div>
             </div>
             <div className="flex-1 h-1.5 bg-white/20 rounded-full"></div>
             <div className="flex-1 h-1.5 bg-white/20 rounded-full"></div>
             <div className="flex-1 h-1.5 bg-white/20 rounded-full"></div>
             <div className="flex-1 h-1.5 bg-white/20 rounded-full"></div>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-6">
            <button 
              onClick={handleWatchNow}
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 md:px-8 py-3 rounded-md font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/30 w-full sm:w-auto"
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Now
            </button>
            <button 
              onClick={() => toggleWatchlist('aot')}
              className={`flex items-center justify-center gap-2 px-6 md:px-8 py-3 rounded-md font-semibold transition-all backdrop-blur-sm border w-full sm:w-auto ${
                isInWatchlist 
                ? 'bg-green-500/20 text-green-400 border-green-500/50' 
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40'
              }`}
            >
              {isInWatchlist ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {isInWatchlist ? 'In List' : 'Add to List'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
