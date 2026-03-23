"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const CustomChatIcon = ({ size = 60, iconSize = 54 }) => (
    <div
        style={{ width: size, height: size, backgroundColor: '#79A88B' }}
        className="rounded-full flex items-center justify-center shadow-lg"
    >
        <svg width={iconSize} height={iconSize} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 25C34.5 25 22 35.5 22 48.5C22 56 26.5 62.5 33.5 67L31 75L40 71C43 71.8 46.5 72 50 72C65.5 72 78 61.5 78 48.5C78 35.5 65.5 25 50 25ZM65 58C60 62 50 63 45 61C44.5 60.8 44.5 60 45 59.8C48 58.5 60 55 65 57C65.5 57.2 65.5 57.8 65 58Z" fill="white" />
        </svg>
    </div>
);

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: '1',
            text: 'Assalam-o-Alaikum! 👋 Welcome to Scan n Print. How can we help you with your printing, branding, or SEO needs today?',
            sender: 'bot'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null); // Removed TypeScript annotation

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            setTimeout(scrollToBottom, 100);
        }
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMsg = { id: Date.now().toString(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, newUserMsg]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const lower = newUserMsg.text.toLowerCase().trim();
            let botResponse = "I'm not sure about that. You can ask about our 'Services', 'Pricing', 'Thesis Binding', or 'Location'. Alternatively, WhatsApp us at +92 334 4478886.";

            if (lower === 'hi' || lower === 'hello' || lower === 'hey' || lower === 'aoa' || lower === 'assalam o alaikum') {
                botResponse = "Walaikum Assalam! 👋 How can Scan n Print help you today? You can ask about our printing services, thesis binding, or web development.";
            }
            else if (lower.includes('service') || lower.includes('what do you do')) {
                botResponse = "We specialize in:\n• Digital & Offset Printing\n• Thesis Binding (Gold/Silver Foiling)\n• Laser Engraving & UV Printing\n• Web Design & SEO Services";
            }
            else if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
                botResponse = "Our rates are highly competitive! For example:\n• Business Cards: From PKR 2,300\n• Thesis Binding: From PKR 1,199\nWould you like a specific quote?";
            }
            else if (lower.includes('thesis') || lower.includes('binding')) {
                botResponse = "We offer professional Thesis Binding with Gold/Silver foiling. We can deliver within 24 hours in Lahore, with urgent 4-hour service available!";
            }
            else if (lower.includes('contact') || lower.includes('location') || lower.includes('address') || lower.includes('where')) {
                botResponse = "📍 Address: 12-UGF, Central Plaza, New Garden Town, Lahore.\n📞 WhatsApp: +92 334 4478886";
            }

            setMessages(prev => [...prev, { id: Date.now().toString(), text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 text-base">
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[320px] sm:w-[360px] max-h-[80vh] h-[500px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                    <div style={{ backgroundColor: '#79A88B' }} className="text-white px-5 py-4 flex justify-between items-center shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="font-bold text-[16px]">Scan n Print Support</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                            <X size={22} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] px-4 py-3 text-[14px] leading-relaxed whitespace-pre-line shadow-sm
                                    ${msg.sender === 'user'
                                        ? 'bg-[#79A88B] text-white rounded-2xl rounded-tr-none'
                                        : 'bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-100'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white px-4 py-3 rounded-2xl flex gap-1 shadow-sm border border-gray-100">
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 focus-within:bg-white focus-within:ring-1 focus-within:ring-[#79A88B] transition-all"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask about thesis, rates, or SEO..."
                                className="flex-1 bg-transparent outline-none text-[14px] py-1"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isTyping}
                                className="text-[#79A88B] disabled:text-gray-400 p-1"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="transition-transform duration-300 hover:scale-110 active:scale-95 outline-none"
            >
                {isOpen ? (
                    <div className="w-[60px] h-[60px] bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-xl text-[#79A88B]">
                        <X size={32} />
                    </div>
                ) : (
                    <CustomChatIcon />
                )}
            </button>
        </div>
    );
};

export default Chatbot;