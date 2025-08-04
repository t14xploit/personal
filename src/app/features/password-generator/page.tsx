import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import PasswordGenerator from "@/components/features/password-generator";

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

        {/* Password Generator Component */}
        <div className="mb-8">
          <PasswordGenerator />
        </div>

        {/* Skills Info */}
        <div className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-6">
          <h3 className="text-lg font-light text-[#00f0ff] mb-4">Skills Demonstrated</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <h4 className="text-[#00f0ff] mb-2">React Logic</h4>
              <p>State management, form handling, and conditional rendering for dynamic user interactions.</p>
            </div>
            <div>
              <h4 className="text-[#00f0ff] mb-2">Clipboard API</h4>
              <p>Modern browser API integration for seamless copy-to-clipboard functionality.</p>
            </div>
            <div>
              <h4 className="text-[#00f0ff] mb-2">Form Controls</h4>
              <p>Custom toggles, sliders, and validation with real-time password strength analysis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
