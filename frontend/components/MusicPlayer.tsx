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
      <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-4 shadow-sm flex items-center justify-between mt-auto gap-4">
        <audio
          ref={audioRef}
          src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3"
          onEnded={() => setIsPlaying(false)}
        />
        <div className="flex gap-2 items-center flex-1">
          <div className="bg-teal-100 p-2 rounded-full text-teal-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path></svg>
          </div>
          <span className="text-sm font-medium text-gray-700 truncate">Lofi Study Beat</span>
        </div>
        <button onClick={togglePlay} className="w-8 h-8 bg-teal-400 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-500 transition">
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-1" />}
        </button>
      </div>
    </div>


  );
}