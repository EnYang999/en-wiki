import React from 'react';
import {
  BookOpen, Grid, Info, Share2, Award,
  Mail, Play, Heart, Clock, Calendar as CalIcon, Edit3
} from 'lucide-react';
import MusicPlayer from '../frontend/components/MusicPlayer';
import DailyWidget from '../frontend/components/DailyWidget';
import CalendarWidget from '../frontend/components/CalendarWidget';

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden bg-gradient-to-br from-[#e8f7ee] to-[#f4fcf6] font-sans text-gray-700">
      <div className="viewport-fit">
        {/* Main Bento Grid */}
        <div className="viewport-fit__canvas grid grid-cols-12 gap-4">

          {/* LEFT COLUMN */}
          <div className="col-span-3 min-h-0 flex flex-col gap-4">
            {/* Profile & Navigation Label */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] p-4 shadow-sm flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-gray-200 rounded-full overflow-hidden">
                  {/* Replace with your actual avatar */}
                  <img src="/api/placeholder/40/40" alt="En" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800">En <span className="text-xs font-normal text-teal-600 bg-teal-50 px-2 py-1 rounded-full ml-1">(Developing)</span></h2>
                </div>
              </div>

              <p className="text-[11px] font-semibold text-gray-400 mb-3 tracking-wider">GENERAL</p>
              <nav className="space-y-2">
                <NavItem icon={<BookOpen size={16} />} label="Recent Articles" active />
                <NavItem icon={<Grid size={16} />} label="My Projects" />
                <NavItem icon={<Info size={16} />} label="About the Site" />
                <NavItem icon={<Share2 size={16} />} label="Recommendations" />
                <NavItem icon={<Award size={16} />} label="Excellent Blogs" />
              </nav>
            </div>

            {/* Latest Article */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] p-4 shadow-sm">
              <p className="text-[11px] text-gray-400 mb-2">Latest Article</p>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                  <img src="/api/placeholder/32/32" alt="Avatar" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-800">Bulletin Board</h3>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">Development in progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="col-span-5 min-h-0 flex flex-col gap-4">
            {/* Top Illustration Card */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] h-28 flex justify-center items-center shadow-sm">
              {/* Replace with your cute cat clover illustration */}
              <img src="/api/placeholder/100/100" alt="Cat with Clover" className="h-16" />
            </div>

            {/* Greeting & Socials */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] p-5 flex flex-col items-center justify-center text-center shadow-sm flex-grow">
              <div className="w-12 h-12 bg-blue-50 rounded-full mb-3 flex items-center justify-center text-xl">
                🐱
              </div>
              <h1 className="text-xl font-bold text-gray-800 mb-1">Good Afternoon</h1>
              <p className="text-base text-teal-600 font-medium mb-4">I'm En, Welcome to My Blog!</p>

              <div className="flex gap-3">
                {/* <SocialButton icon={<Github size={16} />} label="Github" dark /> */}
                <SocialButton icon={<span className="font-bold text-xs">Bilibili</span>} label="bilibili" color="text-pink-500 bg-pink-50" />
                <SocialButton icon={<Mail size={16} />} color="text-teal-500 bg-teal-50" />
              </div>
            </div>

            {/* Random Recommendation */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] p-4 shadow-sm flex gap-3 items-center">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white text-[10px] text-center p-1 shrink-0">
                CMU 15-445
              </div>
              <div>
                <p className="text-[11px] text-gray-400 mb-1">Random Recommendation</p>
                <h3 className="text-xs font-bold text-gray-800">CMU 15-445</h3>
                <p className="text-[11px] text-gray-500 mt-1">Views: 18,367 Marks: 320</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-4 min-h-0 flex flex-col gap-4">
            {/* Top Row: Write & Clock */}
            <div className="flex gap-3">
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-3 shadow-sm flex-1 flex flex-col justify-center items-center opacity-0">
                {/* Empty spacer to match alignment if needed, or adjust grid */}
              </div>
              <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-full px-4 py-1.5 flex items-center gap-1.5 text-xs font-medium transition shadow-md">
                <Edit3 size={14} /> Write Article
              </button>
              <div className="bg-gray-100/80 backdrop-blur-xl border border-white rounded-[1.25rem] px-4 py-3 shadow-inner flex items-center justify-center">
                <span className="text-2xl font-mono text-gray-600 tracking-wider">14:39</span>
              </div>
            </div>

            {/* Calendar Widget */}
            <CalendarWidget />
            {/* Music Player */}

            <MusicPlayer />

            <div className="flex flex-col gap-4">
              {/* Other elements */}
              <DailyWidget />

            </div>
            <div className="flex items-center gap-2 px-1 text-pink-400 text-xs font-medium">
              <Heart size={14} fill="currentColor" /> 11424
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components for clean code ---

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${active ? 'bg-white shadow-sm text-teal-600 font-medium' : 'text-gray-600 hover:bg-white/50'}`}>
      <span className={active ? 'text-teal-500' : 'text-gray-400'}>{icon}</span>
      <span className="text-xs">{label}</span>
    </a>
  );
}

function SocialButton({ icon, label, dark = false, color = "" }: { icon: React.ReactNode, label?: string, dark?: boolean, color?: string }) {
  const baseStyle = "flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition shadow-sm hover:-translate-y-0.5";
  const themeStyle = dark
    ? "bg-gray-900 text-white hover:bg-gray-800"
    : (color ? color : "bg-white text-gray-700 hover:bg-gray-50");

  return (
    <button className={`${baseStyle} ${themeStyle}`}>
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
}