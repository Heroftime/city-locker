'use client';

import React from 'react';
import { LuggageForm } from '@/components/LuggageForm';
import { LuggageList } from '@/components/LuggageList';
import { LuggageProvider } from '@/context/LuggageContext';

export default function Home() {
  return (
    <LuggageProvider>
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Luggage Tracker
          </h1>
          <div className="space-y-8">
            <LuggageForm />
            <LuggageList />
          </div>
        </div>
      </main>
    </LuggageProvider>
  );
}
