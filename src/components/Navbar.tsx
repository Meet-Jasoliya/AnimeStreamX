import { Search, Bell, ChevronDown } from 'lucide-react';
import { useStore } from '../store';

export function Navbar() {
  const { watchlist, language, setLanguage } = useStore();

  return (
    <nav className="absolute md:fixed top-0 w-full z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/20">
              <span className="text-white font-heading font-bold text-lg leading-none pt-0.5">A</span>
            </div>
            <span className="text-xl font-heading font-bold tracking-tight text-white hidden sm:block">AnimeStreamX</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#" className="font-heading text-white border-b-2 border-brand-orange pb-1">Home</a>
            <a href="#" className="font-heading hover:text-white transition-colors">Trending</a>
            <a href="#" className="font-heading hover:text-white transition-colors">Community</a>
            <a href="#" className="font-heading hover:text-white transition-colors relative">
               My List
               {watchlist.length > 0 && (
                 <span className="absolute -top-1.5 -right-3 bg-brand-orange text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-[0_0_8px_rgba(255,106,0,0.5)]">
                   {watchlist.length}
                 </span>
               )}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative group">
            <button className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-colors px-3 py-1.5 rounded-full text-sm font-medium border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(255,106,0,0.8)]"></span>
              {language}
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-32 bg-[#131927] border border-white/10 rounded-xl overflow-hidden shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all translate-y-2 group-hover:translate-y-0">
               {['Dubbed', 'Subbed', 'Hindi', 'Gujarati'].map(lang => (
                 <button 
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-white/5 transition-colors ${language === lang ? 'text-brand-orange' : 'text-gray-300'}`}
                 >
                   {lang}
                 </button>
               ))}
            </div>
          </div>
          <button className="text-gray-300 hover:text-white transition-colors p-2">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer group bg-white/5 sm:bg-transparent rounded-full sm:rounded-none pl-1 pr-3 sm:px-0 py-1 sm:py-0">
            <img src="https://picsum.photos/seed/avatar5/100/100" alt="Avatar" className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/50 transition-colors" referrerPolicy="no-referrer" />
            <span className="text-sm font-medium text-gray-200 group-hover:text-white hidden sm:block">Raj</span>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
          </div>
        </div>
      </div>
    </nav>
  );
}
