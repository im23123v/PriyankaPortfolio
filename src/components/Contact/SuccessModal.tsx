import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  name: string;
  onClose: () => void;
}

export default function SuccessModal({ name, onClose }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in">
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800">
            Thank you, {name}!
          </h3>
          
          <div className="space-y-2 text-gray-600">
            <p>Your message has been sent successfully.</p>
            <p>I'll get back to you as soon as possible.</p>
          </div>
          
          <button
            onClick={onClose}
            className="mt-6 bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}