import React from 'react';
import { 
  BookOpen, Grid, Info, Share2, Award, 
  Mail, Play, Heart, Clock, Calendar as CalIcon, Edit3
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f7ee] to-[#f4fcf6] p-4 md:p-12 font-sans text-gray-700 flex justify-center items-center">
      
      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl w-full">
        
        {/* LEFT COLUMN */}
        <div className="md:col-span-3 flex flex-col gap-6">
          {/* Profile & Navigation Label */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-6 shadow-sm flex-grow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                {/* Replace with your actual avatar */}
                <img src="/api/placeholder/40/40" alt="En" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-bold text-gray-800">En <span className="text-xs font-normal text-teal-600 bg-teal-50 px-2 py-1 rounded-full ml-1">(Developing)</span></h2>
              </div>
            </div>
            
            <p className="text-xs font-semibold text-gray-400 mb-4 tracking-wider">GENERAL</p>
            <nav className="space-y-3">
              <NavItem icon={<BookOpen size={18} />} label="Recent Articles" active />
              <NavItem icon={<Grid size={18} />} label="My Projects" />
              <NavItem icon={<Info size={18} />} label="About the Site" />
              <NavItem icon={<Share2 size={18} />} label="Recommendations" />
              <NavItem icon={<Award size={18} />} label="Excellent Blogs" />
            </nav>
          </div>

          {/* Latest Article */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-6 shadow-sm">
            <p className="text-xs text-gray-400 mb-3">Latest Article</p>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                <img src="/api/placeholder/32/32" alt="Avatar" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">Bulletin Board</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">Development in progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {/* Top Illustration Card */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] h-40 flex justify-center items-center shadow-sm">
             {/* Replace with your cute cat clover illustration */}
             <img src="/api/placeholder/100/100" alt="Cat with Clover" className="h-24" />
          </div>

          {/* Greeting & Socials */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-sm flex-grow">
            <div className="w-16 h-16 bg-blue-50 rounded-full mb-4 flex items-center justify-center text-2xl">
              🐱
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Good Afternoon</h1>
            <p className="text-lg text-teal-600 font-medium mb-6">I'm En, Welcome to My Blog!</p>
            
            <div className="flex gap-3">
              {/* <SocialButton icon={<Github size={16} />} label="Github" dark /> */}
              <SocialButton icon={<span className="font-bold text-xs">Bilibili</span>} label="bilibili" color="text-pink-500 bg-pink-50" />
              <SocialButton icon={<Mail size={16} />} color="text-teal-500 bg-teal-50" />
            </div>
          </div>

          {/* Random Recommendation */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-6 shadow-sm flex gap-4 items-center">
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-xs text-center p-1 shrink-0">
              CMU 15-445
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Random Recommendation</p>
              <h3 className="text-sm font-bold text-gray-800">CMU 15-445</h3>
              <p className="text-xs text-gray-500 mt-1">Views: 18,367 Marks: 320</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Top Row: Write & Clock */}
          <div className="flex gap-4">
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-4 shadow-sm flex-1 flex flex-col justify-center items-center opacity-0 hidden md:flex">
                {/* Empty spacer to match alignment if needed, or adjust grid */}
            </div>
            <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-full px-5 py-2 flex items-center gap-2 text-sm font-medium transition shadow-md">
              <Edit3 size={16} /> Write Article
            </button>
            <div className="bg-gray-100/80 backdrop-blur-xl border border-white rounded-[1.5rem] px-6 py-4 shadow-inner flex items-center justify-center">
              <span className="text-3xl font-mono text-gray-600 tracking-wider">14:39</span>
            </div>
          </div>

          {/* Calendar Widget */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-6 shadow-sm">
            <p className="text-xs font-semibold text-gray-400 mb-4">2026/3/7 Saturday</p>
            <div className="grid grid-cols-7 gap-y-3 text-center text-xs">
              <div className="text-gray-400">Mon</div><div className="text-gray-400">Tue</div><div className="text-gray-400">Wed</div><div className="text-gray-400">Thu</div><div className="text-gray-400">Fri</div><div className="text-gray-400">Sat</div><div className="text-gray-400">Sun</div>
              {/* Dummy Dates for visual alignment */}
              <div className="text-gray-300">23</div><div className="text-gray-300">24</div><div className="text-gray-300">25</div><div className="text-gray-300">26</div><div className="text-gray-300">27</div><div className="text-gray-300">28</div><div className="text-gray-300">1</div>
              <div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
              <div className="bg-teal-400 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto">7</div>
              <div>8</div>
              <div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div>
              <div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div>
            </div>
          </div>

          {/* Music Player */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-4 shadow-sm flex items-center justify-between mt-auto gap-4">
             <div className="flex gap-2 items-center flex-1">
               <div className="bg-teal-100 p-2 rounded-full text-teal-500">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path></svg>
               </div>
               <span className="text-sm font-medium text-gray-700 truncate">Close To You</span>
             </div>
             <button className="w-8 h-8 bg-teal-400 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-500 transition">
               <Play size={14} className="ml-1" />
             </button>
          </div>
          
          <div className="flex items-center gap-2 px-2 text-pink-400 text-sm font-medium">
             <Heart size={16} fill="currentColor" /> 11424
          </div>

        </div>
      </div>
    </div>
  );
}

// --- Helper Components for clean code ---

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all ${active ? 'bg-white shadow-sm text-teal-600 font-medium' : 'text-gray-600 hover:bg-white/50'}`}>
      <span className={active ? 'text-teal-500' : 'text-gray-400'}>{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );
}

function SocialButton({ icon, label, dark = false, color = "" }: { icon: React.ReactNode, label?: string, dark?: boolean, color?: string }) {
  const baseStyle = "flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition shadow-sm hover:-translate-y-0.5";
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