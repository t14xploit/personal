import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TypingTestPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/projects" className="text-[#00f0ff] hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-light text-[#00f0ff] mb-4">⌨️ Typing Speed Test</h1>
          <p className="text-gray-300">Test your typing speed and accuracy with random quotes</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">Event Handling</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">Timing Logic</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">Game Mechanics</Badge>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-8 text-center">
          <div className="text-6xl mb-6">⌨️</div>
          <h2 className="text-xl font-light text-[#00f0ff] mb-4">Typing Speed Test Game</h2>
          <p className="text-gray-300 mb-6">
            This feature will allow users to test their typing speed and accuracy. Users will type random quotes
            and see their WPM (words per minute), accuracy percentage, and real-time feedback.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Skills demonstrated:</strong></p>
            <p>• React event handling and input management</p>
            <p>• Timing logic and real-time calculations</p>
            <p>• Game mechanics and user feedback systems</p>
          </div>
        </div>
      </div>
    </div>
  );
}