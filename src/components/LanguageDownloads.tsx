import { Download, ChevronRight } from 'lucide-react';
import { useStore } from '../store';

export function LanguageDownloads() {
  const { language, setLanguage } = useStore();

  return (
    <section className="space-y-4 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading font-bold text-white">Language & Downloads</h2>
        <div className="flex gap-1.5 text-gray-400">
           <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse shadow-[0_0_5px_rgba(255,106,0,0.8)]" />
           <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
      </div>
      
      <div className="flex-1 bg-[#131927] border border-white/5 rounded-xl p-5 flex flex-col gap-5 shadow-lg">
        
        {/* Language Selection */}
        <div className="flex items-center gap-4 bg-black/30 p-3.5 rounded-xl border border-white/5 shadow-inner">
           <div className="w-10 h-7 rounded border border-white/10 overflow-hidden shrink-0 shadow-sm shadow-brand-orange/10 relative">
              <div className="w-full h-1/3 bg-[#FF9933]"></div>
              <div className="w-full h-1/3 bg-white flex items-center justify-center">
                 <div className="w-2.5 h-2.5 border border-[#000080] rounded-full flex items-center justify-center">
                   <div className="w-0.5 h-0.5 bg-[#000080] rounded-full"></div>
                 </div>
              </div>
              <div className="w-full h-1/3 bg-[#138808]"></div>
           </div>
           
           <div className="flex-1">
             <div className="flex gap-2 flex-wrap">
               {['Hindi', 'Tamil', 'Gujarati'].map(lang => (
                 <button 
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-sm font-bold border px-2.5 py-0.5 rounded-md transition-all ${
                    language === lang 
                    ? 'border-brand-orange/50 text-brand-orange bg-brand-orange/10 shadow-[0_0_10px_rgba(255,106,0,0.1)]' 
                    : 'border-white/10 text-gray-300 hover:border-white/30 bg-white/5'
                  }`}
                 >
                   {lang === 'Hindi' ? 'हि' : lang === 'Tamil' ? 'த' : 'ગુ'}
                 </button>
               ))}
             </div>
           </div>
        </div>

        {/* Offline Downloads CTA */}
        <button className="w-full bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 border border-white/10 text-white p-4 rounded-xl flex items-center justify-between transition-all group shadow-md active:scale-[0.98]">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-black/40 rounded-lg text-gray-300 group-hover:text-brand-orange transition-colors border border-white/5 group-hover:border-brand-orange/30 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,106,0,0.15)]">
              <Download className="w-5 h-5" />
            </div>
            <div className="text-left">
               <p className="text-sm font-bold text-white tracking-wide">Offline Downloads</p>
               <p className="text-xs text-gray-400 font-medium mt-0.5">Watch later without internet</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-1" />
        </button>

      </div>
    </section>
  );
}
