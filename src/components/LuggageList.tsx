import React, { useState } from 'react';
import { useLuggageContext } from '@/context/LuggageContext';
import { LoadingSpinner } from './LoadingSpinner';
import { FaTrash } from 'react-icons/fa';

export const LuggageList = () => {
  const { items, isLoading, deleteItem } = useLuggageContext();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    deleteItem(id);
    setDeletingId(null);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No luggage items added yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
        >
          <div>
            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-500">Destination: {item.destination}</p>
          </div>
          <button
            onClick={() => handleDelete(item.id)}
            disabled={deletingId === item.id}
            className="p-2 text-red-600 hover:text-red-800 disabled:opacity-50"
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
}; 