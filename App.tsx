import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatView } from './components/ChatView';
import { PromptInput } from './components/PromptInput';
import { SettingsModal } from './components/SettingsModal';
import { useTheme } from './hooks/useTheme';
import { MessageType, Role, OutputFormat } from './types';
import { generateText, generateImage } from './services/geminiService';

const initialMessages: MessageType[] = [
  {
    id: 'init1',
    role: Role.AI,
    format: OutputFormat.TEXT,
    content: "Welcome to **BLUE AI**. I'm a multimodal conversational agent. You can ask me for text or to generate an image. How can I help you today?",
  }
];

function App() {
  const { theme, setTheme } = useTheme();
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [prompt, setPrompt] = useState('');
  const [outputFormat, setOutputFormat] = useState<OutputFormat>(OutputFormat.TEXT);
  const [isLoading, setIsLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const handleSubmit = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    const userMessage: MessageType = {
      id: Date.now().toString(),
      role: Role.USER,
      content: prompt,
      format: outputFormat, // The format of user message is tied to what they expect as output
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    const currentPrompt = prompt;
    setPrompt('');
    
    let aiResponseContent: string;
    if (outputFormat === OutputFormat.TEXT) {
      aiResponseContent = await generateText(currentPrompt);
    } else {
      aiResponseContent = await generateImage(currentPrompt);
    }

    const aiMessage: MessageType = {
      id: (Date.now() + 1).toString(),
      role: Role.AI,
      content: aiResponseContent,
      format: outputFormat,
      prompt: outputFormat === OutputFormat.IMAGE ? currentPrompt : undefined,
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  }, [prompt, isLoading, outputFormat]);

  const handleUpdateMessage = useCallback((id: string, newContent: string) => {
    setMessages(prev => prev.map(msg => msg.id === id ? { ...msg, content: newContent } : msg));
  }, []);

  const handleRegenerateImage = useCallback(async (id: string, newPrompt: string) => {
    // To provide instant feedback, we can update the prompt first
    setMessages(prev => prev.map(msg => msg.id === id ? { ...msg, prompt: newPrompt } : msg));
    setIsLoading(true);

    const newImageContent = await generateImage(newPrompt);
    setMessages(prev => prev.map(msg => msg.id === id ? { ...msg, content: newImageContent, prompt: newPrompt } : msg));
    setIsLoading(false);
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-200 dark:bg-black flex items-center justify-center p-0 md:p-4 font-sans">
       <div className="w-full h-full max-w-7xl mx-auto bg-mac-bg-light dark:bg-mac-bg-dark md:rounded-2xl shadow-2xl flex overflow-hidden border-black/10 dark:border-white/10">
        <Sidebar onSettingsClick={() => setIsSettingsOpen(true)} />
        <main className="flex-1 flex flex-col bg-mac-bg-light dark:bg-mac-bg-dark">
          <ChatView 
            messages={messages} 
            isLoading={isLoading} 
            onUpdateMessage={handleUpdateMessage} 
            onRegenerateImage={handleRegenerateImage}
          />
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            outputFormat={outputFormat}
            setOutputFormat={setOutputFormat}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </main>
      </div>
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default App;
