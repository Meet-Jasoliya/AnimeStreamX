import { Star, ChevronRight, PlayCircle, Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useStore } from '../store';

const recommendations = [
  { id: 1, title: 'Demon Slayer', rating: 9, image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg', videoUrl: 'VQGCKyvzIM4' },
  { id: 2, title: 'Jujutsu Kaisen', rating: 9, image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', videoUrl: 'Pk8L_970DTo' },
  { id: 3, title: 'One Punch Man', rating: 8, image: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg', videoUrl: '2JAElThbKrI' },
];

export function AIRecommendations() {
  const { setActiveVideo } = useStore();
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);

  const handleAskAI = async () => {
    setAiLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "You are an expert anime recommendation engine for AnimeStreamX. Based on the user's current mood 'Excited and looking for high-octane action and stunning animation', suggest one anime title and a 1-sentence catchy reason why they should watch it right now. Keep it brief and cool.",
      });
      setAiSuggestion(response.text || "Try Solo Leveling for its unmatched intensity and peak production!");
    } catch (error) {
      console.error(error);
      setAiSuggestion("How about 'chainsaw Man' for some dark and thrilling action?");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <h2 className="text-lg md:text-xl font-heading font-bold text-white">AI Recommendations for You</h2>
          <span className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs md:text-sm font-semibold flex items-center gap-1.5 border border-brand-orange/30 shadow-[0_0_15px_rgba(255,106,0,0.15)]">
            <PlayCircle className="w-3.5 h-3.5" />
            Action Mode
          </span>
          <button 
            onClick={handleAskAI}
            disabled={aiLoading}
            className="group flex items-center gap-2 bg-white/5 hover:bg-brand-orange/20 border border-white/10 hover:border-brand-orange/50 px-3 py-1 rounded-full text-xs font-bold transition-all"
          >
            {aiLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5 text-brand-orange group-hover:scale-125 transition-transform" />}
            Ask Ani-AI
          </button>
        </div>
        <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center">
          See More <ChevronRight className="w-4 h-4 ml-0.5" />
        </button>
      </div>

      {aiSuggestion && (
        <div className="bg-brand-orange/5 border border-brand-orange/20 p-4 rounded-xl animate-in fade-in slide-in-from-top-2 duration-500">
           <p className="text-sm font-medium text-gray-200">
             <span className="text-brand-orange font-bold mr-2">Ani-AI suggests:</span>
             {aiSuggestion}
           </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {recommendations.map((rec) => (
          <div 
            key={rec.id} 
            onClick={() => setActiveVideo(rec)}
            className="group relative rounded-xl overflow-hidden cursor-pointer bg-white/5 border border-white/5 hover:border-white/20 transition-all shadow-xl"
          >
            <div className="aspect-video relative overflow-hidden bg-black/40">
              <img src={rec.image} alt={rec.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                 <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/50 transform scale-75 group-hover:scale-100 transition-transform">
                    <PlayCircle className="w-8 h-8 text-white" />
                 </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 w-full p-4 flex justify-between items-end">
              <h3 className="font-semibold text-white text-shadow-sm font-heading tracking-wide">{rec.title}</h3>
              <div className="flex items-center gap-1.5 text-brand-orange text-sm font-bold bg-[#0B0F19]/80 px-2 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                <Star className="w-3.5 h-3.5 fill-current" />
                {rec.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
