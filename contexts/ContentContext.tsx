import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { PortfolioContent } from '../types';
import { INITIAL_CONTENT } from '../constants';

const CONTENT_STORAGE_KEY = 'portfolioContent';

interface ContentContextType {
  content: PortfolioContent;
  setContent: (content: PortfolioContent) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContentState] = useState<PortfolioContent>(() => {
    try {
      const storedContent = localStorage.getItem(CONTENT_STORAGE_KEY);
      return storedContent ? JSON.parse(storedContent) : INITIAL_CONTENT;
    } catch (error) {
      console.error("Failed to parse content from localStorage", error);
      return INITIAL_CONTENT;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
    } catch (error) {
      console.error("Failed to save content to localStorage", error);
    }
  }, [content]);
  
  const setContent = (newContent: PortfolioContent) => {
      setContentState(newContent);
  };

  const resetContent = () => {
    localStorage.removeItem(CONTENT_STORAGE_KEY);
    setContentState(INITIAL_CONTENT);
    window.location.reload();
  };

  return (
    <ContentContext.Provider value={{ content, setContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
