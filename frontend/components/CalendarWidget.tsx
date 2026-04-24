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
      <p className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
        {format(currentDate, 'yyyy/MM/dd')} {format(currentDate, 'EEEE')}
      </p>
      <div className="grid grid-cols-7 gap-y-3 text-center text-xs font-medium">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="text-gray-400">{day}</div>
        ))}
        
        {/* Empty slots for days before the 1st of the month */}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} className="text-transparent">0</div>
        ))}

        {/* Actual days of the month */}
        {daysInMonth.map((day, i) => {
          const isCurrentDay = isToday(day);
          return (
            <div 
              key={i} 
              className={`flex items-center justify-center w-6 h-6 mx-auto rounded-full ${
                isCurrentDay ? 'bg-teal-400 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
              }`}
            >
              {format(day, 'd')}
            </div>
          );
        })}
      </div>
    </div>
  );
}