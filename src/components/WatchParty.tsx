import { Users, CheckCircle2 } from 'lucide-react';
import { useStore } from '../store';

export function WatchParty() {
  const { joinedParty, setJoinedParty } = useStore();

  return (
    <section className="h-full flex flex-col space-y-4">
      <h2 className="text-xl font-heading font-bold text-white mb-0 h-7 flex items-center">Watch Party</h2>
      <div className={`flex-1 rounded-xl bg-gradient-to-br border p-5 relative overflow-hidden group shadow-[0_0_30px_rgba(255,106,0,0.05)] flex flex-col min-h-[220px] transition-all duration-500 ${joinedParty ? 'from-green-900/20 to-[#0B0F19] border-green-500/30' : 'from-[#1a1f35] to-[#0f1423] border-brand-orange/30'}`}>
        {/* Background image & overlay */}
        <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-700">
          <img src="https://cdn.myanimelist.net/images/anime/5/17407.jpg" alt="Background" className="w-full h-full object-cover grayscale mix-blend-overlay" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]/40" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="pt-2">
            <h3 className="text-lg md:text-xl font-bold font-heading text-white leading-tight mb-1.5 drop-shadow-md">Naruto Shippuden</h3>
            <div className="inline-block">
              <span className={`text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 px-2 py-0.5 rounded border ${joinedParty ? 'text-green-400 bg-green-500/10 border-green-500/20' : 'text-brand-orange bg-brand-orange/10 border-brand-orange/20 animate-pulse'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${joinedParty ? 'bg-green-500 shadow-[0_0_5px_rgba(34,197,94,1)]' : 'bg-brand-orange shadow-[0_0_5px_rgba(255,106,0,1)]'}`}></span>
                {joinedParty ? 'You are in!' : 'Live Now!'}
              </span>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col gap-3">
            <div className={`flex items-center gap-2 bg-black/60 w-fit px-3.5 py-1.5 rounded-full border backdrop-blur-md transition-colors ${joinedParty ? 'border-green-500/30' : 'border-white/10'}`}>
              <span className={`w-2 h-2 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.8)] ${joinedParty ? 'bg-green-400' : 'bg-green-500'}`} />
              <Users className="w-4 h-4 text-gray-300" />
              <span className="text-xs font-semibold text-gray-200">{joinedParty ? '35' : '34'} Watching</span>
            </div>
            <button 
              onClick={() => setJoinedParty(!joinedParty)}
              className={`w-full py-3 rounded-lg font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 ${
                joinedParty 
                ? 'bg-green-600 hover:bg-green-500 text-white shadow-green-900/40' 
                : 'bg-brand-orange hover:bg-brand-orange-hover text-white shadow-brand-orange/25'
              }`}
            >
              {joinedParty && <CheckCircle2 className="w-5 h-5" />}
              {joinedParty ? 'Joined' : 'Join Party'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
