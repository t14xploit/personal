"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import { CookieConsentDialog } from "./cookie-consent-dialog";

export function CookieSettingsButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAcceptAll = () => {
    // Implementation for accepting all cookies
    console.log("Accept all cookies");
  };

  const handleAcceptNecessary = () => {
    // Implementation for accepting only necessary cookies
    console.log("Accept necessary cookies only");
  };

  const handleSavePreferences = (preferences: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  }) => {
    // Implementation for saving custom preferences
    console.log("Save preferences:", preferences);
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
