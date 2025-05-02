"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function IdentityHeader() {
  return (
    <section
      className="about-section inline-block w-auto p-6 font-mono text-[#00f0ff] text-sm sm:text-base shadow-lg"
      data-augmented-ui="bl-clip tl-2-clip-x br-2-clip-x both"
    >
      <header className="mb-4 space-y-2 leading-snug font-light">
        <p>
          <span className="text-[#00f0ff] text-lg font-medium">[ALIAS]</span>{" "}
          <span className="text-sm">T14Xploit</span>
        </p>
        <p>
          <span className="text-[#00f0ff] text-lg font-medium">[ROLE]</span>{" "}
          <span className="text-sm">
            Full-Stack Developer 
          </span>
        </p>
        <p>
          <span className="text-[#00f0ff] text-lg font-medium">[LOCATION]</span>{" "}
          <span className="text-sm">Earth (mostly) — Sweden currently.</span>
        </p>
      </header>

      {/* Typewriter effect with react-simple-typewriter */}
      <p className="border-l-4 border-cyan-500 pl-4 italic text-cyan-300 text-xs opacity-90">
        <Typewriter
          words={[" “  The quieter you become,  the more you can hear.  ”"]}
          loop={1} // You can change the loop count or set it to `Infinity` for infinite looping
          cursor
          cursorStyle="|"
          typeSpeed={70} // Speed of typing
          delaySpeed={1500} // Delay before starting the next word (optional)
        />
      </p>
    </section>
  );
}
