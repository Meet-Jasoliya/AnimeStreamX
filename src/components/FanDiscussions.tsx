import { MessageSquare, Heart } from 'lucide-react';

const threads = [
  { id: 1, title: 'Theory about the latest episode...', comments: 12 },
  { id: 2, title: 'Top 10 Anime Fights of All Time', comments: 30 },
  { id: 3, title: 'Isekai Anime Recommendations', comments: 24 },
];

export function FanDiscussions() {
  return (
    <section className="space-y-4 col-span-1 lg:col-span-2">
      <h2 className="text-xl font-heading font-bold text-white">Fan Discussions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Discussion Threads List */}
        <div className="flex flex-col gap-3">
          {threads.map((thread) => (
            <div key={thread.id} className="bg-[#131927] border border-white/5 hover:border-brand-orange/40 hover:bg-white/5 rounded-xl p-4 transition-all cursor-pointer flex items-center justify-between group shadow-md min-h-[70px]">
              <div className="flex items-center gap-3.5 flex-1 pr-4 min-w-0">
                <MessageSquare className="w-5 h-5 text-gray-500 group-hover:text-brand-orange transition-colors shrink-0" />
                <span className="text-gray-200 group-hover:text-white transition-colors font-medium text-sm md:text-base leading-snug line-clamp-2 break-words">{thread.title}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg text-xs font-bold text-brand-orange border border-white/5 shadow-inner shrink-0 self-center">
                <Heart className="w-3.5 h-3.5 fill-current" />
                {thread.comments}
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Fan Art */}
        <div className="rounded-xl overflow-hidden relative border border-white/10 min-h-[220px] md:min-h-0 group shadow-lg aspect-auto">
          <img src="https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=800&auto=format&fit=crop" alt="Fan Art" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent" />
          
          <div className="absolute bottom-0 w-full p-4 flex flex-col gap-1">
             <div className="flex items-center gap-2">
               <span className="text-[10px] font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/30 uppercase tracking-widest">Masterpiece</span>
             </div>
             <p className="text-lg font-black text-white tracking-tight drop-shadow-lg font-heading">The Silent Guardian</p>
             <div className="flex items-center gap-2">
                <img src="https://picsum.photos/seed/artist/40/40" className="w-5 h-5 rounded-full border border-white/20" referrerPolicy="no-referrer" />
                <p className="text-xs text-gray-300 font-medium font-sans">by @ArtisticSoul</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
