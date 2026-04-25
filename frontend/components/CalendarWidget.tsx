"use client";
import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, getDay } from 'date-fns';

export default function CalendarWidget() {
  const currentDate = new Date();
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get the day of the week the month starts on (0 = Sunday, 1 = Monday, etc.)
  // Adjusting so Monday is the first column
  const startDay = getDay(monthStart) === 0 ? 6 : getDay(monthStart) - 1;

  return (
    <div className="glass-panel rounded-[2rem] p-6 w-full">

      <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-6 shadow-sm">
        <p className="text-xs font-semibold text-gray-400 mb-4">{format(currentDate, 'yyyy/MM/dd')} {format(currentDate, 'EEEE')}</p>
        <div className="grid grid-cols-7 gap-y-3 text-center text-xs">
          <div className="text-gray-400">Mon</div><div className="text-gray-400">Tue</div><div className="text-gray-400">Wed</div><div className="text-gray-400">Thu</div><div className="text-gray-400">Fri</div><div className="text-gray-400">Sat</div><div className="text-gray-400">Sun</div>
          {/* Dummy Dates for visual alignment */}
          <div className="text-gray-300">23</div><div className="text-gray-300">24</div><div className="text-gray-300">25</div><div className="text-gray-300">26</div><div className="text-gray-300">27</div><div className="text-gray-300">28</div><div className="text-gray-300">1</div>
          {daysInMonth.map((day, i) => {
            const isCurrentDay = isToday(day);
            return (
              <div
                key={i}
                className={`flex items-center justify-center w-6 h-6 mx-auto rounded-full ${isCurrentDay ? 'bg-teal-400 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
                  }`}
              >
                {format(day, 'd')}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}