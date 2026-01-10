// components/SystemNotes.tsx
export default function SystemNotes() {
    return (
      <div>
        <hr />
<h2 className="font-light mt-6">{`> USER TRACE: Detailed Background Initialized`}</h2>
<div className="mt-10 px-3 py-6  border border-[#00ff1e33] rounded-lg font-light text-sm">
         <h2 className="text-[var(--accent)] text-lg font-mono mb-3">[SYSTEM NOTES]</h2>

        <ul className="space-y-1 pl-4 list-inside text-[var(--foreground-muted)]">
          <li>🧠 Analyzes logs precisely.</li>
          <li>☕ Converts caffeine → code.</li>
          <li>🔒 Security-first, always.</li>
          <li>🎯 Optimizes UI & backend.</li>
        </ul>

        <div className="mt-3 text-[var(--green-accent)] font-mono text-xs">
          STATUS: <span className="animate-pulse">ONLINE</span>
        </div>
      </div>
      </div>
    );
  }
  