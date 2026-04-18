import { createContext, useContext, useState, ReactNode } from 'react';

export type Anime = {
  id: string | number;
  title: string;
  rating: number;
  image: string;
  videoUrl?: string;
  category?: string;
};

export type Comment = {
  id: number;
  user: string;
  avatar: string;
  text: string;
  time: string;
};

interface StoreContextType {
  watchlist: (string | number)[];
  toggleWatchlist: (id: string | number) => void;
  comments: Comment[];
  addComment: (text: string) => void;
  joinedParty: boolean;
  setJoinedParty: (joined: boolean) => void;
  activeVideo: Anime | null;
  setActiveVideo: (anime: Anime | null) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<(string | number)[]>([]);
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, user: 'Ajay', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user', text: "That episode was intense! Can't wait for the next one.", time: '2m ago' },
    { id: 2, user: 'Priya', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user', text: "Amazing twist! What do you think will happen next?", time: '15m ago' },
  ]);
  const [joinedParty, setJoinedParty] = useState(false);
  const [activeVideo, setActiveVideo] = useState<Anime | null>(null);
  const [language, setLanguage] = useState('Gujarati');

  const toggleWatchlist = (id: string | number) => {
    setWatchlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addComment = (text: string) => {
    const newComment: Comment = {
      id: Date.now(),
      user: 'Raj',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar',
      text,
      time: 'Just now'
    };
    setComments(prev => [...prev, newComment]);
  };

  return (
    <StoreContext.Provider value={{
      watchlist,
      toggleWatchlist,
      comments,
      addComment,
      joinedParty,
      setJoinedParty,
      activeVideo,
      setActiveVideo,
      language,
      setLanguage
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
