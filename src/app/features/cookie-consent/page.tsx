"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CookieConsentDialog } from "./_components/cookie-consent-dialog";
import { CookieSettingsButton } from "./_components/cookie-settings-button";

export default function CookieConsentPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAcceptAll = () => {
    console.log("Accept all cookies");
  };

  const handleAcceptNecessary = () => {
    console.log("Accept necessary cookies only");
  };

  const handleSavePreferences = (preferences: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  }) => {
    console.log("Save preferences:", preferences);
  };

  return (
    <div className="min-h-screen py-6 sm:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/projects" className="text-[#00f0ff] hover:underline mb-4 inline-block text-sm sm:text-base">
            ← Back to Projects
          </Link>
          <h1 className="text-2xl sm:text-3xl font-light text-[#00f0ff] mb-4">🍪 Cookie Consent Banner</h1>
          <p className="text-gray-300 text-sm sm:text-base">GDPR-compliant cookie consent management</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">UI/UX Design</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">LocalStorage</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">Cookie Handling</Badge>
          </div>
        </div>

        {/* Cookie Consent Demo */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200/30 p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cookie Consent Demo</h3>
            <p className="text-gray-600 mb-4">Click the button below to see the cookie consent dialog in action.</p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-gray-900 text-white hover:bg-gray-800 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Open Cookie Dialog
            </button>
          </div>

          <CookieConsentDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            onAcceptAll={handleAcceptAll}
            onAcceptNecessary={handleAcceptNecessary}
            onSavePreferences={handleSavePreferences}
          />
        </div>

        {/* Skills Info */}
        <div className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-4 sm:p-6 mb-6">
          <h3 className="text-base sm:text-lg font-light text-[#00f0ff] mb-4">Skills Demonstrated</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-300">
            <div>
              <h4 className="text-[#00f0ff] mb-2">UI/UX Design</h4>
              <p>GDPR-compliant interface design with clear consent options and user-friendly controls.</p>
            </div>
            <div>
              <h4 className="text-[#00f0ff] mb-2">LocalStorage</h4>
              <p>Persistent storage of user preferences with proper data handling and validation.</p>
            </div>
            <div>
              <h4 className="text-[#00f0ff] mb-2">Cookie Handling</h4>
              <p>Proper cookie management, consent tracking, and compliance with privacy regulations.</p>
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