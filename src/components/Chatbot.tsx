import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const KNOWLEDGE_BASE = `
You are an AI assistant for Irfan Haider's professional portfolio...
(keep the rest of your knowledge base here)
`;

interface Message {
  role: 'user' | 'bot';
  text: string;
  isError?: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm Irfan's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = async (retryText?: string) => {
    const userMessage = retryText || input.trim();
    if (!userMessage || isLoading) return;

    if (!retryText) {
      setInput('');
      setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    } else {
      setMessages(prev => prev.filter(msg => !msg.isError));
    }

    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `Context: ${KNOWLEDGE_BASE}\n\nUser Question: ${userMessage}` }] }
        ],
        config: { temperature: 0.7, topP: 0.95, topK: 40 }
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again or contact Irfan directly.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "Oops! I encountered a connection issue. Would you like to try again?",
        isError: true 
      }]);
    } finally { setIsLoading(false); }
  };

  const handleRetry = () => {
    if (isLoading) return;
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
    if (lastUserMsg) handleSend(lastUserMsg.text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] max-w-[calc(100vw-2rem)] h-[500px] bg-dark-section border border-dark-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-dark-card border-b border-dark-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#4fd1c5]/20 rounded-lg flex items-center justify-center text-[#4fd1c5]">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Irfan's Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-text-primary transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-dark-border">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                      msg.role === 'user' 
                        ? 'bg-dark-card text-white' 
                        : msg.isError 
                          ? 'bg-red-500/10 text-red-400'
                          : 'bg-dark-card text-[#4fd1c5]'
                    }`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <motion.div
                      whileHover={{ y: -2, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className={`p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-dark-card text-white rounded-tr-none' 
                          : msg.isError 
                            ? 'bg-red-500/10 text-red-400 border border-red-500/20 rounded-tl-none'
                            : 'bg-dark-card text-text-primary border border-dark-border rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                      {msg.isError && (
                        <button
                          onClick={handleRetry}
                          className="mt-2 flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors uppercase tracking-wider"
                        >
                          <Loader2 size={12} className={isLoading ? 'animate-spin' : ''} />
                          Retry
                        </button>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-dark-card text-[#4fd1c5] flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="bg-dark-card p-3 rounded-2xl rounded-tl-none border border-dark-border">
                      <Loader2 size={16} className="animate-spin text-[#4fd1c5]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-dark-border bg-dark-card">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="w-full bg-dark-section border border-dark-border rounded-xl px-4 py-3 pr-12 text-sm text-text-primary focus:outline-none focus:border-[#4fd1c5] transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#4fd1c5] text-dark-section rounded-lg flex items-center justify-center hover:bg-[#38b2ac] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-dark-card border border-dark-border text-white rotate-90' : 'bg-[#4fd1c5] text-dark-section'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}