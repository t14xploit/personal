// components/CredentialsFile.tsx
import * as React from "react";
import Timeline from "../Timeline";
import styles from "@/components/TerminalContent.module.css";
import Image from "next/image";

export default function CredentialsFile() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 max-w-5xl mx-auto px-4 py-12">
      {/* ================= EDUCATION / TIMELINE ================= */}
      <div className="md:w-1/2 w-full">
        <h2
          className="text-2xl mb-6 font-mono tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          [EDUCATION]
        </h2>
        <Timeline />
      </div>

      {/* ================= CERTIFICATIONS ================= */}
      <div className="md:w-1/2 w-full">
        <h2
          className="text-2xl mb-6 font-mono tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          [CERTIFICATIONS]
        </h2>

        <div
          data-augmented-ui="tr-2-round-x l-clip-y border"
          className={styles.skillContainer}
        >
          <ul className="space-y-7 text-sm font-light">
            {[
              "IBM Cybersecurity Analyst",
              "Google IT Support Specialization",
              "Cisco Computer Networking",
              "IBM Data Science Professional",
              "SAS Advanced Programmer",
              "IBM Full Stack Developer",
              "Cisco Computer Hardware",
              "Google Project Management",
            ].map((item, index) => (
              <li key={index} className="relative pl-6">
                {/* Diagonal underline */}
                <Image
                  src="/underline.svg"
                  alt="underline"
                  width={220}
                  height={30}
                  className="absolute left-0 top-1 z-0 opacity-80"
                />

                {/* Text */}
                <span
                  className="relative z-10 pb-1"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
