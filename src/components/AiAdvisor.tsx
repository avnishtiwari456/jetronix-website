import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { MessageSquare, Send, Cpu, ShieldAlert, Sparkles, AlertCircle, Trash2 } from "lucide-react";
import { ChatMessage } from "../types";

export default function AiAdvisor() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am your Jetronix Smart Print-Spec Advisor. I can help you pick the right Continuous Inkjet (CIJ) printer, select ink bases (MEK, Water-based, Food-grade), configure nozzle sizing, and solve difficult packaging line requirements.\n\nAsk me anything, or choose a common industrial scenario below!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sampleQuestions = [
    "We print on dark PVC cables. Which white ink printer and nozzle is best?",
    "We run a wet dairy bottling line with cold condensation. What configuration do you suggest?",
    "Compare the Si220 RFID cartridge system vs the S200PLUS rugged IP55 cabinet.",
    "Which solvent formula matches fast-dry high speed PET packaging?"
  ];

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setApiError(null);
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Send chat log to the server-side Gemini API proxy
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: messages.map((m) => ({ sender: m.sender, text: m.text }))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to communicate with AI Advisor.");
      }

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      console.error("Advisor proxy error:", error);
      setApiError(error.message || "An unexpected error occurred. Please verify your GEMINI_API_KEY.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    // Avoid native blocking window.confirm for absolute sandboxed iframe compliance
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Conversation cleared. Ask me any technical questions about Jetronix CIJ printers, solvent recovery formulas, or nozzle sizing!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setApiError(null);
  };

  return (
    <section id="advisor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full inline-flex items-center gap-1.5 font-mono">
            <Cpu className="w-4 h-4 text-blue-600" /> AI ASSISTANT
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
            Smart Print-Spec AI Advisor
          </h2>
          <p className="text-slate-600 mt-3 text-base font-light leading-relaxed">
            Our server-side Gemini intelligence operates as an expert industrial Continuous Inkjet (CIJ) consultant. Ask questions about chemical dry rates, line matching, or regulatory coding compliance.
          </p>
        </div>

        {/* Chat Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="chat-container">
          
          {/* Left: Quick Prompts List */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between" id="chat-sidebar">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-display font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" /> Common Plant Scenarios
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                Click any of these pre-configured plant scenarios to immediately generate an automated technical specification comparison:
              </p>
              
              <div className="space-y-2.5 pt-2" id="sample-question-chips">
                {sampleQuestions.map((q, i) => (
                  <button
                    key={i}
                    id={`prompt-chip-${i}`}
                    onClick={() => handleSend(q)}
                    disabled={isLoading}
                    className="w-full text-left bg-white hover:bg-blue-50 hover:border-blue-300 disabled:opacity-50 border border-slate-200 p-3 rounded-xl text-xs font-bold text-slate-700 hover:text-blue-700 transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Support notification SLA badge */}
            <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5 animate-bounce" />
              <div className="text-xs text-blue-900 leading-relaxed font-sans">
                <span className="font-bold">Need immediate engineering validation?</span>
                <span className="block mt-1 font-light text-slate-600">
                  Our Indian JV support nodes in <strong>Indore</strong> (Runicha) and <strong>Jaipur</strong> (Best Code) are staffed by physical fluidic calibration engineers. Scroll down to request a commercial quote.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Active Chat Bubble Box */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-850 rounded-3xl overflow-hidden flex flex-col h-[520px] shadow-2xl relative" id="chat-bubble-panel">
            {/* Ambient background grids */}
            <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

            {/* Chat Banner Header */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex justify-between items-center relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  JETRONIX AI SPECIFICATION ENGINE
                </span>
              </div>
              <button
                onClick={handleClearHistory}
                title="Clear Conversation"
                className="text-slate-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer font-mono text-[10px] font-bold flex items-center gap-1"
                id="btn-clear-chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>

            {/* Chat Bubble Area scroll container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 relative z-10" id="chat-bubbles-scrollable font-sans">
                {messages.map((m) => {
                  const isUser = m.sender === "user";
                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-xl rounded-2xl p-4 text-xs leading-relaxed shadow-md ${
                        isUser
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-slate-800 text-slate-100 border border-slate-700/60 rounded-bl-none whitespace-pre-wrap"
                      }`}>
                      <div className="font-light">{m.text}</div>
                        <div className={`text-[9px] mt-2 text-right ${isUser ? "text-blue-200" : "text-slate-400"} font-mono`}>
                          {m.timestamp}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Pulsing loading state dots */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                    id="chat-loading-indicator"
                  >
                    <div className="bg-slate-800 border border-slate-700/60 rounded-2xl rounded-bl-none p-4 flex gap-1.5 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}

                {/* Error Banner inside Bubble area */}
                {apiError && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex gap-3 text-xs text-red-400"
                    id="chat-error-card"
                  >
                    <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <span className="font-bold">AI Connection Failed:</span>
                      <p className="mt-1 text-slate-300 font-light leading-relaxed">
                        {apiError}
                      </p>
                      <div className="mt-2.5 bg-red-500/20 border border-red-500/30 rounded px-2.5 py-1 text-[10px] font-mono text-white inline-block">
                        Tip: Open "Settings &gt; Secrets" in AI Studio to configure your GEMINI_API_KEY.
                      </div>
                    </div>
                  </motion.div>
                )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Submission Bar */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 relative z-10" id="chat-input-bar">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  placeholder="Type your printing speeds, substrates, or compliance questions..."
                  className="flex-1 bg-slate-900 border border-slate-850 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:opacity-50"
                  id="chat-input-field"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 text-white p-3 rounded-xl transition-all cursor-pointer flex items-center justify-center shrink-0"
                  id="chat-submit-btn"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
