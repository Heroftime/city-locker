import { useState, useEffect } from 'react';
import { LuggageItem } from '@/types/luggage';

const STORAGE_KEY = 'luggage-items';

export const useLuggage = () => {
  const [items, setItems] = useState<LuggageItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load items from localStorage on mount
  useEffect(() => {
    try {
      const storedItems = localStorage.getItem(STORAGE_KEY);
      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);
        // Validate the parsed data structure
        if (Array.isArray(parsedItems) && parsedItems.every(isValidLuggageItem)) {
          setItems(parsedItems);
        } else {
          throw new Error('Invalid data format in localStorage');
        }
      }
    } catch (err) {
      setError('Failed to load luggage items');
      console.error('Error loading items:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch (err) {
        setError('Failed to save luggage items');
        console.error('Error saving items:', err);
      }
    }
  }, [items, isLoading]);

  const addItem = (name: string, destination: string) => {
    if (!name.trim() || !destination.trim()) {
      setError('Item name and destination are required');
      return;
    }

    const newItem: LuggageItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      destination: destination.trim(),
      createdAt: new Date().toISOString(),
    };
    setItems((prev) => [...prev, newItem]);
    setError(null);
  };

  const deleteItem = (id: string) => {
    if (!id) {
      setError('Invalid item ID');
      return;
    }
    setItems((prev) => prev.filter((item) => item.id !== id));
    setError(null);
  };

  return {
    items,
    isLoading,
    error,
    addItem,
    deleteItem,
  };
};

// Type guard to validate luggage item structure
const isValidLuggageItem = (item: any): item is LuggageItem => {
  return (
    typeof item === 'object' &&
    item !== null &&
    typeof item.id === 'string' &&
    typeof item.name === 'string' &&
    typeof item.destination === 'string' &&
    typeof item.createdAt === 'string'
  );
}; 