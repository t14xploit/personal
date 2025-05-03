import * as React from 'react';
import Timeline from '../Timeline';
import styles from "@/components/TerminalContent.module.css";
import Image from 'next/image'; // Import Image component from next/image

export default function CredentialsFile() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 max-w-5xl mx-auto px-4 py-12">
      {/* Timeline (Education) */}
      <div className="md:w-1/2 w-full">
        <Timeline />
      </div>

      {/* Certifications */}
      <div>
      <h2 className="text-2xl mb-6 font-light">Certifications</h2>

      <div
        data-augmented-ui="tr-2-round-x l-clip-y border "
        className={styles.skillContainer}
        >
        <div className='font-light'>
          <ul className="space-y-8 text-[#9eeaf9] text-sm">
            {[
              'IBM Full Stack Developer',
              'IBM Cybersecurity Analyst',
              'Google IT Support Specialization',
              'SAS Advanced Programmer',
              'Computer Hardware Basics – Cisco',
            ].map((item, index) => (
              <li key={index} className="relative pl-6">
                {/* Diagonal Line with Dot (using the SVG) */}
                <Image
                  src="/underline.svg" // Path to your SVG in the public folder
                  alt="diagonal line with dot"
                  width={220} // Adjust width to fit your design
                  height={30} // Adjust height to fit your design
                  className="absolute left-0 top-1 z-0"
                  />

                {/* Text with underline */}
                <div className="relative z-10 border-[#00f0ff] pb-1">{item}</div>
              </li>
            ))}
          </ul>
        </div>
            </div>
      </div>
    </div>
  );
}
