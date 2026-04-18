import { PlayCircle } from 'lucide-react';
import { useStore } from '../store';

export function CharacterClips() {
  const { setActiveVideo } = useStore();

  const handleWatchClip = (clipId: string) => {
    const clips: Record<string, any> = {
      'clip1': { id: 'clip1', title: 'Naruto - Rasengan!', videoUrl: '2JAElThbKrI' },
      'clip2': { id: 'clip2', title: 'Naruto - Shadow Clone', videoUrl: 'UmiN-Xp9vAs' },
      'clip3': { id: 'clip3', title: 'Naruto - Sage Mode', videoUrl: 'VQGCKyvzIM4' },
    };
    
    const clip = clips[clipId] || clips['clip1'];
    setActiveVideo({
      ...clip,
      rating: 9.9,
      image: 'https://images.unsplash.com/photo-1614583225154-5fcdda07019e?q=80&w=600&auto=format&fit=crop'
    });
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-heading font-bold text-white">Character Clips</h2>
      <div className="bg-gradient-to-br from-[#131927] to-[#0B0F19] border border-white/5 rounded-xl p-5 md:p-6 relative overflow-hidden group shadow-lg min-h-[300px]">
         
         {/* Background gradient effect */}
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
           
           <div className="flex flex-col justify-center items-start gap-5">
             <div>
               <h3 className="text-2xl md:text-4xl font-black font-heading text-white tracking-tight drop-shadow-md">Naruto Uzumaki</h3>
               <p className="text-brand-orange/90 font-medium text-sm mt-1.5 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
                 AI-curated best scenes
               </p>
             </div>
             <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
               Experience the most legendary moments of the Knucklehead Ninja, optimized by our AI for maximum impact and clarity.
             </p>
             <button 
              onClick={() => handleWatchClip('clip1')}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 active:scale-95 text-sm tracking-wide"
             >
               Explore Clips
             </button>
           </div>

           <div className="grid grid-cols-2 gap-3 md:gap-4 min-h-[220px]">
             <div 
              onClick={() => handleWatchClip('clip1')}
              className="rounded-xl overflow-hidden relative group/clip cursor-pointer border border-white/10 shadow-md aspect-[3/4] md:aspect-auto"
             >
                <img src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=300&auto=format&fit=crop" alt="Clip 1" className="w-full h-full object-cover transform group-hover/clip:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-[#0B0F19]/40 group-hover/clip:bg-[#0B0F19]/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/clip:opacity-100 transition-opacity duration-300">
                  <div className="bg-brand-orange/90 rounded-full p-2 shadow-[0_0_15px_rgba(255,106,0,0.5)]">
                    <PlayCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-rows-2 gap-3 md:gap-4">
                <div 
                  onClick={() => handleWatchClip('clip2')}
                  className="rounded-xl overflow-hidden relative group/clip cursor-pointer border border-white/10 shadow-md aspect-video md:aspect-auto"
                >
                  <img src="https://images.unsplash.com/photo-1542382257-80dedb725088?q=80&w=300&auto=format&fit=crop" alt="Clip 2" className="w-full h-full object-cover transform group-hover/clip:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-[#0B0F19]/40 group-hover/clip:bg-[#0B0F19]/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/clip:opacity-100 transition-opacity duration-300">
                    <div className="bg-brand-orange/90 rounded-full p-1.5 shadow-[0_0_15px_rgba(255,106,0,0.5)]">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div 
                  onClick={() => handleWatchClip('clip3')}
                  className="rounded-xl overflow-hidden relative group/clip cursor-pointer border border-white/10 shadow-md aspect-video md:aspect-auto"
                >
                  <img src="https://images.unsplash.com/photo-1578632292335-df3f47463852?q=80&w=300&auto=format&fit=crop" alt="Clip 3" className="w-full h-full object-cover transform group-hover/clip:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-[#0B0F19]/40 group-hover/clip:bg-[#0B0F19]/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/clip:opacity-100 transition-opacity duration-300">
                    <div className="bg-brand-orange/90 rounded-full p-1.5 shadow-[0_0_15px_rgba(255,106,0,0.5)]">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

         </div>
      </div>
    </section>
  );
}
