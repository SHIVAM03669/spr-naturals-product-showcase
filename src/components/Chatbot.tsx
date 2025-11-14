"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Bot, User, Loader2, Bot as RobotIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  className?: string;
}

export default function Chatbot({ className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! How can I help you with SPR Naturals products?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage.trim() }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "Sorry, I couldn't process your message. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please contact us directly at hello@sprnaturals.com or WhatsApp +917447755042.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hi! How can I help you with SPR Naturals products?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className={cn("fixed bottom-24 right-6 z-50", className)}>
      {/* Chat Widget */}
      {!isOpen && (
        <div className="relative">
          {/* Wave animation ring */}
          <div className="absolute inset-0 rounded-full border-2 border-nature-green/30 chatbot-wave"></div>
          <div className="absolute inset-0 rounded-full border border-nature-green/20 animate-pulse"></div>
          
          <Button
            onClick={() => setIsOpen(true)}
            className="relative w-14 h-14 rounded-full bg-nature-green hover:bg-leaf-green text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-10"
            aria-label="Open chat"
          >
            <RobotIcon className="w-6 h-6" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card 
          className="w-96 h-[500px] bg-white border-sage-green/20 shadow-xl flex flex-col"
          onWheel={(e) => {
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-sage-green/20 bg-nature-green/5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-nature-green rounded-full flex items-center justify-center">
                <RobotIcon className="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">SPR Naturals</h3>
                <p className="text-xs text-muted-foreground">Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>

          {/* Messages */}
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0"
            onWheel={(e) => {
              e.stopPropagation();
              const container = messagesContainerRef.current;
              if (container) {
                const { scrollTop, scrollHeight, clientHeight } = container;
                const isScrollingUp = e.deltaY < 0;
                const isScrollingDown = e.deltaY > 0;
                
                // If scrolling up and at top, or scrolling down and at bottom, prevent default
                if ((isScrollingUp && scrollTop === 0) || 
                    (isScrollingDown && scrollTop + clientHeight >= scrollHeight)) {
                  e.preventDefault();
                }
              }
            }}
            onTouchMove={(e) => {
              e.stopPropagation();
            }}
          >
            {/* Clear chat button */}
            {messages.length > 1 && (
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearChat}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear Chat
                </Button>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2",
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.sender === 'bot' && (
                  <div className="w-6 h-6 bg-nature-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <RobotIcon className="w-3 h-3 text-nature-green" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                    message.sender === 'user'
                      ? 'bg-nature-green text-white'
                      : 'bg-sage-green/10 text-foreground'
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-6 h-6 bg-nature-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-3 h-3 text-nature-green" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 bg-nature-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <RobotIcon className="w-3 h-3 text-nature-green" />
                </div>
                <div className="bg-sage-green/10 rounded-lg px-3 py-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span className="text-muted-foreground">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-sage-green/20">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 text-sm h-9"
              />
              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                size="sm"
                className="bg-nature-green hover:bg-leaf-green text-white h-9 px-3"
              >
                <Send className="w-3 h-3" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              WhatsApp: +917447755042
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
