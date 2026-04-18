import { Star, ChevronRight, PlayCircle } from 'lucide-react';
import { useStore } from '../store';

const trending = [
  { id: 4, title: 'My Hero Academia', rating: 11, image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop', videoUrl: '3SSt9YpQ6oM' },
  { id: 5, title: 'Tokyo Revengers', rating: 5, image: 'https://images.unsplash.com/photo-1554244933-d876deb6b2fa?q=80&w=600&auto=format&fit=crop', videoUrl: 'O7W2X6vVl_Q' },
  { id: 6, title: 'Death Note', rating: 8, image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=600&auto=format&fit=crop', videoUrl: 'NlJZ-YgAt-c' },
];

export function TrendingSeries() {
  const { setActiveVideo } = useStore();

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-heading font-bold text-white">Trending Series</h2>
        <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center">
          View All <ChevronRight className="w-4 h-4 ml-0.5" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {trending.map((series) => (
          <div 
            key={series.id} 
            onClick={() => setActiveVideo(series)}
            className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#131927] border border-white/5 hover:border-white/20 transition-all shadow-lg"
          >
            <div className="aspect-video relative overflow-hidden bg-black/40">
              <img src={series.image} alt={series.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131927] via-[#131927]/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                 <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/40">
                    <PlayCircle className="w-6 h-6 text-white" />
                 </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 w-full p-4 flex justify-between items-end">
              <h3 className="font-semibold text-white tracking-wide text-shadow-sm">{series.title}</h3>
              <div className="flex items-center gap-1.5 text-brand-orange text-sm font-bold bg-black/50 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-md">
                <Star className="w-3.5 h-3.5 fill-current" />
                {series.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
