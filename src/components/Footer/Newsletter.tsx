import React, { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold">Stay Updated</h4>
      <p className="text-gray-400">Get the latest updates on web development and design trends.</p>
      
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 
            border border-gray-700 focus:outline-none focus:border-rose-500 pr-12"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 
            hover:text-rose-500 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : status === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </form>

      {status === 'success' && (
        <p className="text-green-400 text-sm animate-fade-in">
          Thanks for subscribing! 🎉
        </p>
      )}
    </div>
  );
}