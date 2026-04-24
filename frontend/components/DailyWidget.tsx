"use client";
import React, { useState, useEffect } from 'react';

export default function DailyWidget() {
  const [quote, setQuote] = useState({ content: "Loading daily inspiration...", author: "" });

  useEffect(() => {
    // Fetch a random quote
    fetch('https://api.quotable.io/random?maxLength=60')
      .then(res => res.json())
      .then(data => setQuote(data))
      .catch(() => setQuote({ content: "Keep moving forward.", author: "Ivy" }));
  }, []);

  return (
    <div className="glass-panel rounded-[2rem] overflow-hidden flex flex-col h-full">
      {/* Daily Picture (using Picsum for random aesthetic photos) */}
      <div className="h-24 w-full bg-gray-200 relative">
        <img 
          src={`https://picsum.photos/seed/${new Date().getDate()}/400/200`} 
          alt="Daily aesthetic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md">
          Daily Pic
        </div>
      </div>
      
      {/* Daily Quote */}
      <div className="p-4 flex-grow flex flex-col justify-center">
        <p className="text-sm font-medium text-gray-700 italic">"{quote.content}"</p>
        <p className="text-xs text-gray-400 mt-2 text-right">- {quote.author}</p>
      </div>
    </div>
  );
}