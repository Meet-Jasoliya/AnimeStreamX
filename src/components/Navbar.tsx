import { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../store';

export function Navbar() {
  const { watchlist, language, setLanguage } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-0 w-full z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </motion.button>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/20">
              <span className="text-white font-heading font-bold text-lg leading-none pt-0.5">A</span>
            </div>
            <span className="text-xl font-heading font-bold tracking-tight text-white hidden sm:block">AnimeStreamX</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#home" className="font-heading text-white border-b-2 border-brand-orange pb-1">Home</a>
            <a href="#trending" className="font-heading hover:text-white transition-colors">Trending</a>
            <a href="#community" className="font-heading hover:text-white transition-colors">Community</a>
            <a href="#" className="font-heading hover:text-white transition-colors relative">
               My List
               {watchlist.length > 0 && (
                 <motion.span 
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   className="absolute -top-1.5 -right-3 bg-brand-orange text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-[0_0_8px_rgba(255,106,0,0.5)]"
                 >
                   {watchlist.length}
                 </motion.span>
               )}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <AnimatePresence>
            {isSearchOpen ? (
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="hidden sm:flex items-center bg-white/10 rounded-full px-3 py-1.5 overflow-hidden"
              >
                <Search className="w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search anime..." 
                  className="bg-transparent border-none outline-none text-sm text-white px-2 w-full placeholder-gray-400"
                  onBlur={() => setIsSearchOpen(false)}
                />
              </motion.div>
            ) : (
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-white transition-colors p-2 hidden sm:block"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

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
          <motion.button 
            whileHover={{ rotate: 15 }}
            className="text-gray-300 hover:text-white transition-colors p-2"
          >
            <Bell className="w-5 h-5" />
          </motion.button>
          <div className="flex items-center gap-2 cursor-pointer group bg-white/5 sm:bg-transparent rounded-full sm:rounded-none pl-1 pr-3 sm:px-0 py-1 sm:py-0">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ajay" alt="Avatar" className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/50 transition-colors bg-white" referrerPolicy="no-referrer" />
            <span className="text-sm font-medium text-gray-200 group-hover:text-white hidden sm:block">Raj</span>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
          </div>
        </div>
      </div>

    </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            className="fixed inset-0 z-50 bg-[#0B0F19] md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg leading-none pt-0.5">A</span>
                </div>
                <span className="text-xl font-heading font-bold tracking-tight text-white">AnimeStreamX</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col p-4 gap-4 flex-1 overflow-y-auto">
              <div className="flex items-center bg-white/5 rounded-lg px-3 py-2">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input type="text" placeholder="Search anime..." className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-gray-400" />
              </div>

              <div className="flex flex-col gap-2 mt-4 text-lg font-heading text-gray-300">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 rounded-lg bg-white/5 text-white border-l-4 border-brand-orange">Home</a>
                <a href="#trending" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">Trending</a>
                <a href="#community" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">Community</a>
                <a href="#" className="py-3 px-4 rounded-lg hover:bg-white/5 transition-colors flex justify-between items-center">
                  My List
                  {watchlist.length > 0 && (
                    <span className="bg-brand-orange text-white text-xs px-2 py-1 rounded-full">{watchlist.length}</span>
                  )}
                </a>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-3 px-2">Language Preference</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Dubbed', 'Subbed', 'Hindi', 'Gujarati'].map(lang => (
                    <button 
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`py-2 px-3 rounded-lg text-sm text-center font-medium transition-colors ${language === lang ? 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30' : 'bg-white/5 text-gray-300 border border-transparent'}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
