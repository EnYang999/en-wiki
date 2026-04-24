"use client";
import React, { useState, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="glass-panel rounded-[2rem] p-4 flex items-center justify-between gap-4">
      {/* Hidden audio element - plug your own .mp3 URL here! */}
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3" 
        onEnded={() => setIsPlaying(false)}
      />

      <div className="flex gap-3 items-center flex-1 overflow-hidden">
        <div className={`bg-teal-100 p-2 rounded-full text-teal-500 ${isPlaying ? 'spin-slow' : ''}`}>
          <Music size={18} />
        </div>
        <div className="flex flex-col truncate">
          <span className="text-sm font-bold text-gray-800 truncate">Lofi Study Beat</span>
          <span className="text-[10px] text-gray-400">Now Playing</span>
        </div>
      </div>

      <button 
        onClick={togglePlay}
        className="w-10 h-10 bg-teal-400 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-500 transition-colors shrink-0"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-1" />}
      </button>
    </div>
  );
}