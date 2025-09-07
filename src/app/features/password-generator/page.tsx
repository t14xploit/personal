import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import PasswordGenerator from "@/components/features/password-generator";
import { CookieSettingsButton } from "../cookie-consent/_components/cookie-settings-button";

export default function PasswordGeneratorPage() {
  return (
    <div className="min-h-screen py-6 sm:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/projects" className="text-[#00f0ff] hover:underline mb-4 inline-block text-sm sm:text-base">
            ← Back to Projects
          </Link>
          <h1 className="text-2xl sm:text-3xl font-light text-[#00f0ff] mb-4">🔐 Password Generator</h1>
          <p className="text-gray-300 text-sm sm:text-base">Secure password generator with customizable options</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">React Logic</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">Clipboard API</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">Form Controls</Badge>
          </div>
        </div>

        {/* Password Generator Component */}
        <div className="mb-6 sm:mb-8">
          <PasswordGenerator />
        </div>

        {/* Skills Info */}
        <div className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-4 sm:p-6 mb-6">
          <h3 className="text-base sm:text-lg font-light text-[#00f0ff] mb-4">Skills Demonstrated</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-300">
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

        {/* Footer with Cookie Settings */}
        <div className="flex justify-center">
          <CookieSettingsButton />
        </div>
      </div>
    </div>
  );
}
