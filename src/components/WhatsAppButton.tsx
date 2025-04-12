
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
  };
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919560313130?text=Hi!%20I%27m%20interested%20in%20Easy%20Math%20coaching.%20Please%20provide%20more%20information.', '_blank');
  };
  
  // Auto-open chat bubble after 5 seconds if no interaction
  React.useEffect(() => {
    if (!hasInteracted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="mb-4 p-4 bg-white rounded-lg shadow-lg animate-scale-in max-w-xs">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800">Need help?</h3>
            <button 
              onClick={toggleOpen}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Chat with us on WhatsApp for quick inquiries about our courses or to book a personalized demo class.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full py-2 px-4 bg-[#25D366] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#22c15e] transition-all hover:-translate-y-1 duration-300"
          >
            <MessageCircle size={18} />
            <span>Start Chat</span>
            <Send size={16} className="ml-1" />
          </button>
        </div>
      )}
      
      <button
        onClick={toggleOpen}
        className="bg-[#25D366] h-14 w-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative overflow-hidden group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
        <MessageCircle className="text-white" size={28} />
        {!isOpen && !hasInteracted && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
