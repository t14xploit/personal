"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CookieConsentDialog } from "./_components/cookie-consent-dialog";
import { CookieSettingsButton } from "./_components/cookie-settings-button";

// Cookie utility functions
const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));

  // Set cookie with proper attributes for production
  const cookieString = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax${
    window.location.protocol === 'https:' ? '; Secure' : ''
  }`;

  document.cookie = cookieString;
  console.log(`Cookie set: ${cookieString}`);
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export default function CookieConsentPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentCookies, setCurrentCookies] = useState<string>("");

  // Check for existing cookies on page load
  useEffect(() => {
    const checkCookies = () => {
      const consent = getCookie('cookie-consent');
      const preferences = getCookie('cookie-preferences');
      setCurrentCookies(`Consent: ${consent || 'Not set'}, Preferences: ${preferences || 'Not set'}`);
    };

    checkCookies();
    // Check cookies every second to show real-time updates
    const interval = setInterval(checkCookies, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAcceptAll = () => {
    setCookie('cookie-consent', 'all');
    setCookie('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }));
    console.log("All cookies accepted");
  };

  const handleAcceptNecessary = () => {
    setCookie('cookie-consent', 'necessary');
    setCookie('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }));
    console.log("Only necessary cookies accepted");
  };

  const handleSavePreferences = (preferences: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  }) => {
    setCookie('cookie-consent', 'custom');
    setCookie('cookie-preferences', JSON.stringify(preferences));
    console.log("Custom preferences saved:", preferences);
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

            {/* Current Cookie Status */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4 text-left">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Current Cookie Status:</h4>
              <p className="text-xs text-gray-600 font-mono break-all">{currentCookies}</p>
              <p className="text-xs text-gray-500 mt-2">
                Raw cookies: {typeof window !== 'undefined' ? document.cookie || 'No cookies set' : 'Loading...'}
              </p>
            </div>

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