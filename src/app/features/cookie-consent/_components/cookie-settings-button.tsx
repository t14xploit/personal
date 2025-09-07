"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import { CookieConsentDialog } from "./cookie-consent-dialog";

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

export function CookieSettingsButton() {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors flex items-center"
      >
        <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
        Cookie Settings
      </button>
      
      <CookieConsentDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAcceptAll={handleAcceptAll}
        onAcceptNecessary={handleAcceptNecessary}
        onSavePreferences={handleSavePreferences}
      />
    </>
  );
}
