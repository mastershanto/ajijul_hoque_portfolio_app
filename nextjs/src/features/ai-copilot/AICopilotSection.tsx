'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, Terminal, User, RefreshCw, CheckCircle2, BookOpen } from 'lucide-react';
import { SectionHeader } from '../../shared/components/SectionHeader';
import { GlassCard } from '../../shared/components/GlassCard';
import { ChatMessage } from '../../core/domain/entities';
import { container } from '../../infrastructure/container';
import styles from './AICopilotSection.module.css';

export const AICopilotSection: React.FC = () => {
  const [messages, setMessages] = useState<readonly ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'agent',
      text: "Hello! I am Ajijul's AI Twin, an agentic reasoning interface architected to demonstrate his LangGraph and Clean Architecture principles. Ask me about his multi-agent orchestration patterns, cross-platform Flutter systems, or how this frontend interfaces seamlessly with ASP.NET Core, Go, and Rust.",
      timestamp: 'Now',
      citations: ['Autonomous Multi-Agent Architecture', 'LangGraph Reflection Loops'],
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const samplePrompts = [
    'How do you engineer self-correcting LangGraph agent loops?',
    'Explain your 25-Year Clean Architecture standard',
    'How does this frontend connect to ASP.NET Core & Rust Axum?',
    'What is your Flutter cross-platform architecture?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  const handleSend = async (textToSend?: string) => {
    const prompt = (textToSend || inputPrompt).trim();
    if (!prompt || isStreaming) return;

    setInputPrompt('');

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsStreaming(true);

    const agentGateway = container.getAgentGateway();

    // Placeholder message for live streaming accumulation
    const agentMsgId = `agent-${Date.now()}`;
    const initialAgentMessage: ChatMessage = {
      id: agentMsgId,
      sender: 'agent',
      text: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, initialAgentMessage]);

    if (agentGateway.streamMessage) {
      let accumulatedText = '';
      await agentGateway.streamMessage(prompt, messages, (chunk) => {
        accumulatedText += chunk;
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === agentMsgId ? { ...msg, text: accumulatedText } : msg
          )
        );
      });
    } else {
      const res = await agentGateway.sendMessage(prompt, messages);
      if (res.success) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === agentMsgId ? res.data : msg
          )
        );
      }
    }

    setIsStreaming(false);
  };

  return (
    <section id="ai-copilot" className={`section-wrapper ${styles.copilotSection}`}>
      <div className="container">
        <SectionHeader
          number="05"
          title="Autonomous AI Copilot (Interactive Agent Terminal)"
          subtitle="Test-drive a live AI reasoning agent architected with LangGraph self-critique workflows and SSE token streaming."
        />

        <div className={styles.terminalContainer}>
          {/* Terminal Top Window Bar */}
          <div className={styles.windowBar}>
            <div className={styles.windowControls}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>

            <div className={styles.windowTitle}>
              <Terminal size={14} className={styles.termIcon} />
              <span>ajijul-agent-swarm://v1.4/langgraph-runtime</span>
            </div>

            <div className={styles.engineBadge}>
              <span className={styles.pulseDot} />
              <span>LangGraph Active</span>
            </div>
          </div>

          {/* Conversation Stream Area */}
          <div className={styles.chatViewport}>
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`${styles.messageRow} ${isUser ? styles.userRow : styles.agentRow}`}
                >
                  <div className={styles.avatar}>
                    {isUser ? <User size={16} /> : <Bot size={16} />}
                  </div>

                  <div className={styles.bubble}>
                    <div className={styles.bubbleHeader}>
                      <span className={styles.senderName}>
                        {isUser ? 'You' : "Ajijul's AI Twin"}
                      </span>
                      <span className={styles.timestamp}>{msg.timestamp}</span>
                    </div>

                    <div className={styles.bubbleText}>
                      {msg.text || (
                        <span className={styles.typingIndicator}>
                          <span>●</span>
                          <span>●</span>
                          <span>●</span>
                        </span>
                      )}
                    </div>

                    {msg.citations && msg.citations.length > 0 && (
                      <div className={styles.citationsBox}>
                        <BookOpen size={12} className={styles.citationIcon} />
                        <span className={styles.citationLabel}>Verified Citations:</span>
                        {msg.citations.map((c, i) => (
                          <span key={i} className={styles.citationBadge}>
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Queries */}
          <div className={styles.suggestionsRow}>
            <span className={styles.suggestionsLabel}>Suggested Queries:</span>
            <div className={styles.pillsScroll}>
              {samplePrompts.map((prompt, i) => (
                <button
                  key={i}
                  className={styles.promptPill}
                  onClick={() => handleSend(prompt)}
                  disabled={isStreaming}
                >
                  <Sparkles size={12} className={styles.pillSparkle} />
                  <span>{prompt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Input Form */}
          <form
            className={styles.inputBar}
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Ask the AI Twin about LangGraph swarms, Flutter architecture, or system design..."
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              disabled={isStreaming}
              className={styles.inputField}
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isStreaming}
              className={styles.sendBtn}
              aria-label="Send message to AI agent"
            >
              {isStreaming ? (
                <RefreshCw size={18} className={styles.spinIcon} />
              ) : (
                <Send size={18} />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
