'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingChatButton() {
  const handleChatClick = () => {
    window.location.href = '/fa/contact';
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleChatClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="چت آنلاین"
      >
        <MessageCircle className="w-6 h-6" />
        
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>

        <span className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          چت آنلاین با ما
        </span>
      </button>
    </div>
  );
}

