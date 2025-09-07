"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RotateCcw } from "lucide-react";
import Link from "next/link";

const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "To be or not to be, that is the question.",
  "In the beginning was the Word, and the Word was with God.",
  "It was the best of times, it was the worst of times.",
  "All that glitters is not gold.",
  "The only thing we have to fear is fear itself.",
];

export default function TypingTestPage() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    resetTest();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0 && !isFinished) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isFinished) {
      finishTest();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, isFinished]);

  const calculateStats = () => {
    if (userInput.length === 0) return;

    // Calculate WPM
    const timeElapsed = (60 - timeLeft) / 60;
    const wordsTyped = userInput.trim().split(' ').length;
    const currentWpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
    setWpm(currentWpm);

    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === currentQuote[i]) {
        correctChars++;
      }
    }
    const currentAccuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100;
    setAccuracy(currentAccuracy);
  };

  const resetTest = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
    setUserInput("");
    setIsActive(false);
    setTimeLeft(60);
    setWpm(0);
    setAccuracy(100);
    setIsFinished(false);
    inputRef.current?.focus();
  };

  const finishTest = () => {
    setIsActive(false);
    setIsFinished(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isFinished) return;

    const value = e.target.value;

    // Start test on first character
    if (value.length === 1 && !isActive) {
      setIsActive(true);
    }

    // Prevent typing beyond quote length
    if (value.length <= currentQuote.length) {
      setUserInput(value);
      calculateStats();
    }

    // Auto-finish if quote is completed
    if (value === currentQuote) {
      finishTest();
    }
  };


  const getCharacterClass = (index: number) => {
    if (index < userInput.length) {
      return userInput[index] === currentQuote[index] ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50';
    } else if (index === userInput.length) {
      return 'bg-blue-200 animate-pulse';
    }
    return 'text-gray-600';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen py-6 sm:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/projects" className="text-[#00f0ff] hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-2xl sm:text-3xl font-light text-[#00f0ff] mb-4">⌨️ Typing Speed Test</h1>
          <p className="text-gray-300 text-sm sm:text-base">Test your typing speed and accuracy with random quotes</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">Event Handling</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">Timing Logic</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">Game Mechanics</Badge>
          </div>
        </div>

        {/* Typing Test Component */}
        <div className="mb-6 sm:mb-8">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200/30 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-light text-gray-800 mb-2">Typing Speed Test</h2>
              <p className="text-gray-500 text-xs sm:text-sm">Type the text below as quickly and accurately as possible</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="bg-gray-50/80 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Time</div>
                <div className="text-sm sm:text-lg md:text-xl font-mono text-gray-800">{formatTime(timeLeft)}</div>
              </div>

              <div className="bg-gray-50/80 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">WPM</div>
                <div className="text-sm sm:text-lg md:text-xl font-mono text-gray-800">{wpm}</div>
              </div>

              <div className="bg-gray-50/80 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Accuracy</div>
                <div className="text-sm sm:text-lg md:text-xl font-mono text-gray-800">{accuracy}%</div>
              </div>
            </div>

            {/* Quote Display */}
            <div className="bg-gray-50/50 rounded-lg p-3 sm:p-4 md:p-6 mb-3 sm:mb-4">
              <div className="text-sm sm:text-base md:text-lg leading-relaxed font-mono text-gray-700">
                {currentQuote.split('').map((char, index) => (
                  <span key={index} className={`${getCharacterClass(index)} transition-colors duration-100`}>
                    {char}
                  </span>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="mb-3 sm:mb-4">
              <textarea
                ref={inputRef}
                value={userInput}
                onChange={handleInputChange}
                disabled={isFinished}
                placeholder={isFinished ? "Test completed!" : "Start typing..."}
                className="w-full h-20 sm:h-24 md:h-32 p-3 md:p-4 border border-gray-200 rounded-lg font-mono text-sm sm:text-base md:text-lg resize-none focus:border-gray-400 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <Button
                onClick={resetTest}
                className="bg-gray-800 hover:bg-gray-700 text-white font-light px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                New Test
              </Button>

              {isFinished && (
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  <span>Test Complete!</span>
                </div>
              )}
            </div>

            {/* Results Summary */}
            {isFinished && (
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50/80 rounded-lg border border-gray-200/50">
                <h3 className="text-sm sm:text-base font-light text-gray-800 mb-3 text-center">Results</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-mono text-gray-800">{wpm}</div>
                    <div className="text-xs text-gray-500">WPM</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-mono text-gray-800">{accuracy}%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Skills Info */}
        <div className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-light text-[#00f0ff] mb-4">Skills Demonstrated</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-300">
            <div>
              <h4 className="text-[#00f0ff] mb-2">Event Handling</h4>
              <p>Real-time input processing, keyboard events, and dynamic character-by-character validation.</p>
            </div>
            <div>
              <h4 className="text-[#00f0ff] mb-2">Timing Logic</h4>
              <p>Countdown timers, WPM calculations, and performance metrics with live updates.</p>
            </div>
            <div>
              <h4 className="text-[#00f0ff] mb-2">Game Mechanics</h4>
              <p>Score tracking, accuracy measurement, and interactive feedback systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}