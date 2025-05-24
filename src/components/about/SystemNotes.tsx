// components/SystemNotes.tsx
export default function SystemNotes() {
    return (
      <div>
        <hr />
<h2 className="font-light mt-6">{`> USER TRACE: Detailed Background Initialized`}</h2>
<div className="mt-10 px-3 py-6  border border-[#00f0ff33] rounded-lg text-[#9eeaf9] font-light text-sm">
        <h2 className="text-[#00f0ff] text-lg font-mono mb-3">[SYSTEM NOTES]</h2>
        <ul className="space-y-2">
          <li>🧠 Debugs with precision.</li>
          <li>☕ Caffeinates like it’s a deployment pipeline.</li>
          <li>🎯 Lives at the intersection of clean UI and secure backends.</li>
        </ul>
        <div className="mt-4 text-green-400 font-mono text-xs">
          STATUS: <span className="animate-pulse">ONLINE</span>
        </div>
      </div>
      </div>
    );
  }
  