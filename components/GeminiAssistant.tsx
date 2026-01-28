
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2, Bot } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: '¡Hola! Soy tu experto de Apple en iDistribute. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all z-40 transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col z-50 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Bot size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Apple Expert AI</h3>
                <span className="text-[10px] text-green-500 font-medium uppercase tracking-wider">En línea</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <Loader2 className="animate-spin text-gray-400" size={18} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre hardware..."
                className="w-full bg-gray-100 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1.5 text-blue-600 hover:text-blue-800 disabled:text-gray-300"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
