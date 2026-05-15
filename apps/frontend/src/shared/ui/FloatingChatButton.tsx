'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatClick = () => {
    // می‌تونی به صفحه تماس هدایت کنی یا یک modal باز کنی
    window.location.href = '/fa/contact'; // یا هر locale دیگه
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleChatClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="چت آنلاین"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* نقطه قرمز نوتیفیکیشن */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        
        {/* تولتیپ */}
        <span className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          چت آنلاین با ما
        </span>
      </button>
    </div>
  );
}

