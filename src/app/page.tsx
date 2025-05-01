import TerminalContent from '@/components/TerminalContent';

export default function Home() {
  return (
    <div className="max-w-3xl min-h-[500px] items-center mx-auto mt-10 rounded-md shadow-lg border border-[#00f0ff]/20 bg-[#020b12] text-[#00f0ff] font-mono relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center px-4 py-2 bg-[#031421] border-b border-[#00f0ff]/10">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-auto text-xs opacity-60">T14Xploit Terminal</span>
      </div>

      {/* Typing Terminal */}
      <TerminalContent />
    </div>
  );
}
