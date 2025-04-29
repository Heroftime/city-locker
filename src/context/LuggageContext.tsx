import React, { createContext, useContext, ReactNode } from 'react';
import { useLuggage } from '@/hooks/useLuggage';
import { LuggageItem } from '@/types/luggage';

interface LuggageContextType {
  items: LuggageItem[];
  isLoading: boolean;
  error: string | null;
  addItem: (name: string, destination: string) => void;
  deleteItem: (id: string) => void;
}

const LuggageContext = createContext<LuggageContextType | undefined>(undefined);

export const LuggageProvider = ({ children }: { children: ReactNode }) => {
  const luggageState = useLuggage();

  return (
    <LuggageContext.Provider value={luggageState}>
      {children}
    </LuggageContext.Provider>
  );
};

export const useLuggageContext = () => {
  const context = useContext(LuggageContext);
  if (context === undefined) {
    throw new Error('useLuggageContext must be used within a LuggageProvider');
  }
  return context;
}; 