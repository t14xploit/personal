import '@/styles/augmented-ui.css';

export default function OriginProtocol() {
    return (
      <section
      className="protocol-section inline-block w-auto px-6 py-8 bg-[#010c14]"
      data-augmented-ui="
           tl-clip tr-2-clip-y t-clip-x r-clip br-2-clip-x bl-2-clip-x "
      >
        <h2 className="text-[#00f0ff] text-lg font-mono mb-4">[ORIGIN PROTOCOL DECRYPTED]</h2>
        <p className="text-[#9eeaf9] text-sm leading-relaxed font-light max-w-3xl">
          I didn&apos;t start with code — I started with languages. Human ones.
          Then I discovered programming and realized it&apos;s just another language… but with fewer bugs in grammar.{" "}
          <br />
          <br />
          After earning a Computer Science degree and absorbing more certifications than a firewall can handle, I locked onto full-stack development like a zero-day on an unpatched server.
          <br />
          <br />
          These days, I specialize in clean UI, security-focused systems, and rapid prototyping using Next.js, React, and PostgreSQL. If it&apos;s TypeScript-powered and terminal-themed, I&apos;m already deep in the shell.
        </p>
      </section>
    );
  }
  