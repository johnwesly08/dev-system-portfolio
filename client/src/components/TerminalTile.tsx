'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function TerminalTile() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Dev-System OS v1.0.0' },
    { type: 'system', content: 'Type "help" to see available commands.' },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response = '';

    if (cmd === 'help') {
      response = 'Available commands: about, projects, contact, clear, ls';
    } else if (cmd === 'about') {
      response = 'John Wesly P D: Software Engineer specializing in scalable systems & AI. SIH 2024 Runner-up.';
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'projects') {
      response = 'Fetching flagship projects... Redirecting to gallery.';
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'contact') {
      response = 'Contact channels: LinkedIn, GitHub, Email.';
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'ls') {
      response = 'documents/ resume.pdf | projects/ portfolio.json | certifications/ google.cert';
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd !== '') {
      response = `Command not found: ${cmd}. Type "help" for assistance.`;
    }

    if (cmd !== '') {
      setHistory([...history, { type: 'user', content: input }, { type: 'system', content: response }]);
    }
    setInput('');
  };

  return (
    <div className="bento-card h-full flex flex-col font-mono text-sm p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-gray-500">guest@portfolio:~</span>
      </div>
      <div ref={scrollRef} className="flex-grow overflow-y-auto space-y-2 mb-4 custom-scrollbar">
        {history.map((line, i) => (
          <div key={i} className={` ${line.type === 'user' ? 'text-accent' : 'text-slate-primary'}`}>
            {line.type === 'user' ? `❯ ${line.content}` : line.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="flex gap-2 items-center">
        <span className="text-accent">❯</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent outline-none flex-grow text-slate-primary"
          autoFocus
        />
      </form>
    </div>
  );
}
