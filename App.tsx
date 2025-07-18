import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import AIZone from './components/sections/AIZone';
import WhoAmI from './components/sections/WhoAmI';
import { SECTIONS } from './constants';
import { CodeIcon } from './components/icons/Icons';
import IntroAnimation from './components/IntroAnimation';
import ChatbotWindow from './components/ChatbotWindow';

type SectionType = typeof SECTIONS[number];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>(SECTIONS[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (isLoading) {
    return <IntroAnimation onAnimationComplete={() => setIsLoading(false)} />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'About': return <About />;
      case 'Projects': return <Projects />;
      case 'Journey': return <Journey />;
      case 'AI Zone': return <AIZone />;
      case 'Who Am I?': return <WhoAmI />;
      default: return <About />;
    }
  };

  return (
    <div className="bg-surface-container-low min-h-screen flex flex-col">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onChatClick={() => setIsChatOpen(true)}
      />
      <main key={activeSection} className="flex-grow animate-fade-in">
        {renderSection()}
      </main>
      <footer className="text-center p-8 text-sm text-on-surface-variant mt-16">
        <div className="flex items-center justify-center space-x-2">
            <CodeIcon className="w-5 h-5" />
            <p>Built with Material You principles</p>
        </div>
        <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
      <ChatbotWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}