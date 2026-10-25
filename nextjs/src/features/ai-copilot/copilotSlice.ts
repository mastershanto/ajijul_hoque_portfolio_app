import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage } from '../../core/domain/entities';

interface CopilotState {
  messages: ChatMessage[];
  isStreaming: boolean;
}

const initialMessages: ChatMessage[] = [
  {
    id: 'welcome-msg',
    sender: 'agent',
    text: "Hello! I am Ajijul's AI Assistant, trained on his mobile development background, Flutter expertise, Clean Architecture practices, and his 1 year 7 months of production engineering at Softvence IT Limited. Feel free to ask about his mobile projects, state management techniques, or professional timeline!",
    timestamp: 'SYSTEM ONLINE',
    citations: [
      'Flutter Mobile Development',
      'Softvence IT Limited',
      'Clean Mobile Architecture',
    ],
  },
];

const initialState: CopilotState = {
  messages: initialMessages,
  isStreaming: false,
};

export const copilotSlice = createSlice({
  name: 'copilot',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      (state.messages as unknown as ChatMessage[]).push(action.payload);
    },
    updateMessageText: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      const msg = state.messages.find((m) => m.id === action.payload.id);
      if (msg) {
        (msg as { text: string }).text = action.payload.text;
      }
    },
    replaceMessage: (state, action: PayloadAction<ChatMessage>) => {
      const index = state.messages.findIndex((m) => m.id === action.payload.id);
      if (index !== -1) {
        (state.messages as unknown as ChatMessage[])[index] = action.payload;
      }
    },
    setStreaming: (state, action: PayloadAction<boolean>) => {
      state.isStreaming = action.payload;
    },
    resetChat: () => initialState,
  },
});

export const {
  addMessage,
  updateMessageText,
  replaceMessage,
  setStreaming,
  resetChat,
} = copilotSlice.actions;

export const copilotReducer = copilotSlice.reducer;
