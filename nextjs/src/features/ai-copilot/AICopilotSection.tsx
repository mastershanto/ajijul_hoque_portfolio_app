'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Bot, Send, Sparkles, Terminal, User, RefreshCw, BookOpen } from 'lucide-react';
import { SectionHeader } from '../../shared/components/SectionHeader';
import { ChatMessage } from '../../core/domain/entities';
import { container } from '../../infrastructure/container';
import { useAppDispatch, useAppSelector } from '../../shared/store/hooks';
import {
  addMessage,
  updateMessageText,
  replaceMessage,
  setStreaming,
} from './copilotSlice';
import styles from './AICopilotSection.module.css';

export const AICopilotSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { messages, isStreaming } = useAppSelector((state) => state.copilot);
  const [inputPrompt, setInputPrompt] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const samplePrompts = [
    'Tell me about your experience at Softvence IT Limited',
    'What Flutter state management libraries do you specialize in?',
    'How do you structure Clean Architecture in mobile apps?',
    'What is your experience with REST APIs and Firebase in mobile?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  const handleSend = useCallback(
    async (textToSend?: string) => {
      const prompt = (textToSend || inputPrompt).trim();
      if (!prompt || isStreaming) return;

      setInputPrompt('');

      const now = Date.now();
      const timeStr = new Date(now).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const userMessage: ChatMessage = {
        id: `user-${now}`,
        sender: 'user',
        text: prompt,
        timestamp: timeStr,
      };

      dispatch(addMessage(userMessage));
      dispatch(setStreaming(true));

      const agentGateway = container.getAgentGateway();

      // Placeholder message for live streaming accumulation
      const agentMsgId = `agent-${now + 1}`;
      const initialAgentMessage: ChatMessage = {
        id: agentMsgId,
        sender: 'agent',
        text: '',
        timestamp: timeStr,
      };

      dispatch(addMessage(initialAgentMessage));

      if (agentGateway.streamMessage) {
        let accumulatedText = '';
        await agentGateway.streamMessage(prompt, messages, (chunk) => {
          accumulatedText += chunk;
          dispatch(updateMessageText({ id: agentMsgId, text: accumulatedText }));
        });
      } else {
        const res = await agentGateway.sendMessage(prompt, messages);
        if (res.success) {
          dispatch(replaceMessage(res.data));
        }
      }

      dispatch(setStreaming(false));
    },
    [dispatch, inputPrompt, isStreaming, messages]
  );

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
