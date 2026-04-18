import { MessageCircle, ThumbsUp, MoreHorizontal, Send } from 'lucide-react';
import React, { useState } from 'react';
import { useStore } from '../store';

export function Comments() {
  const { comments, addComment } = useStore();
  const [newCommentText, setNewCommentText] = useState('');
  const [activeTab, setActiveTab] = useState('Comments');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCommentText.trim()) {
      addComment(newCommentText);
      setNewCommentText('');
    }
  };

  return (
    <section className="bg-[#131927] border border-white/5 rounded-2xl overflow-hidden mt-4 shadow-xl">
      {/* Tabs */}
      <div className="flex border-b border-white/5 bg-black/20 overflow-x-auto hide-scrollbar">
        {['Comments', 'Episode Recap', 'Related'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 font-medium transition-all whitespace-nowrap flex items-center gap-2.5 ${
              activeTab === tab 
              ? 'border-b-2 border-brand-orange text-white bg-brand-orange/5' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab === 'Comments' && <MessageCircle className={`w-4 h-4 ${activeTab === tab ? 'fill-brand-orange/20 text-brand-orange' : ''}`} />}
            {tab}
            {tab === 'Comments' && <span className="text-[10px] bg-white/10 px-1.5 rounded-full">{comments.length}</span>}
          </button>
        ))}
      </div>

      <div className="p-4 md:p-6 space-y-6">
        {activeTab === 'Comments' ? (
          <>
            {/* Comment List */}
            <div className="space-y-5">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3 md:gap-4 group animate-in slide-in-from-left-2 duration-300">
                  <img src={comment.avatar} alt={comment.user} className="w-10 h-10 border border-white/10 rounded-full object-cover shrink-0" referrerPolicy="no-referrer" />
                  
                  <div className="flex-1 bg-black/30 rounded-xl p-3.5 border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-white text-sm tracking-wide">{comment.user}</span>
                      <span className="text-xs text-gray-500 font-medium">{comment.time}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{comment.text}</p>
                    
                    <div className="flex items-center gap-5 mt-3.5">
                      <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-orange transition-colors">
                        <ThumbsUp className="w-3.5 h-3.5" /> Like
                      </button>
                      <button className="text-xs font-semibold text-gray-500 hover:text-white transition-colors">Reply</button>
                    </div>
                  </div>
                  
                  <button className="text-gray-600 hover:text-white self-start p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Comment Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-3 md:gap-4 mt-6 pt-6 border-t border-white/5">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=avatar" alt="Current User" className="w-10 h-10 border border-brand-orange/50 rounded-full shrink-0 shadow-[0_0_10px_rgba(255,106,0,0.2)] object-cover" referrerPolicy="no-referrer" />
              <div className="flex-1 relative group md:max-w-2xl">
                <input 
                  type="text" 
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Add a comment..." 
                  className="w-full bg-black/40 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors focus:bg-black/60 shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={!newCommentText.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-brand-orange rounded-full hover:bg-brand-orange-hover transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-brand-orange/20 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="w-4 h-4 text-white -mt-0.5 -ml-0.5" />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
             <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                <span className="text-2xl opacity-20">📂</span>
             </div>
             <div>
               <h3 className="text-white font-bold">{activeTab} Section</h3>
               <p className="text-sm text-gray-500">Coming soon in the next update!</p>
             </div>
          </div>
        )}
      </div>
    </section>
  );
}
