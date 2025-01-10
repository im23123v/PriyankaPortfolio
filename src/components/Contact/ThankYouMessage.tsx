import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ThankYouMessageProps {
  name: string;
  onClose: () => void;
}

export default function ThankYouMessage({ name, onClose }: ThankYouMessageProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4 animate-fade-in">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-rose-600" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800">Thank You, {name}!</h3>
      <p className="text-gray-600">
        Your message has been received. I'll get back to you as soon as possible.
      </p>
      <button
        onClick={onClose}
        className="mt-6 text-rose-600 hover:text-rose-700 font-medium"
      >
        Send another message
      </button>
    </div>
  );
}