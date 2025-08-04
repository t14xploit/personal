"use client";
import { useEffect, useState } from 'react';

interface TimeZone {
  city: string;
  timezone: string;
  country: string;
}

const worldClocks: TimeZone[] = [
  { city: "New York", timezone: "America/New_York", country: "USA" },
  { city: "London", timezone: "Europe/London", country: "UK" },
  { city: "Tokyo", timezone: "Asia/Tokyo", country: "Japan" },
  { city: "Sydney", timezone: "Australia/Sydney", country: "Australia" },
];

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime(): string {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function formatDate(): string {
    return time.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function getTimeForTimezone(timezone: string): string {
    const timeInZone = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(time);
    return timeInZone;
  }

  function padZero(number: number): string {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Main Local Clock */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/30 p-6 md:p-8 text-center">
        <div className="space-y-3">
          <div className="text-4xl md:text-6xl font-light text-gray-800 tracking-wide">
            {formatTime()}
          </div>

          <div className="text-sm md:text-base text-gray-500">
            {formatDate()}
          </div>

          <div className="text-xs text-gray-400">
            Local Time
          </div>
        </div>
      </div>

      {/* World Clocks Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {worldClocks.map((worldClock, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200/20 p-4 text-center"
          >
            <div className="text-xs text-gray-400 mb-1">
              {worldClock.country}
            </div>

            <h3 className="text-sm font-light text-gray-700 mb-2">
              {worldClock.city}
            </h3>

            <div className="text-lg md:text-xl font-light text-gray-800">
              {getTimeForTimezone(worldClock.timezone)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}