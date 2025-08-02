import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PasswordGeneratorPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/projects" className="text-[#00f0ff] hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-light text-[#00f0ff] mb-4">🔐 Password Generator</h1>
          <p className="text-gray-300">Secure password generator with customizable options</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">React Logic</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">Clipboard API</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">Form Controls</Badge>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-8 text-center">
          <div className="text-6xl mb-6">🔐</div>
          <h2 className="text-xl font-light text-[#00f0ff] mb-4">Secure Password Generator</h2>
          <p className="text-gray-300 mb-6">
            This feature will generate secure passwords with customizable length, character sets, and complexity options. 
            Users can copy passwords to clipboard and see real-time strength indicators.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Skills demonstrated:</strong></p>
            <p>• React state management and form controls</p>
            <p>• Clipboard API for seamless copy functionality</p>
            <p>• Security best practices and password strength validation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
