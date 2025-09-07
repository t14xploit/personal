"use client"

import { useState } from "react"
import { Cookie, Shield, BarChart3, Target, Settings } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

interface CookieConsentDialogProps {
  isOpen: boolean
  onClose: () => void
  onAcceptAll: () => void
  onAcceptNecessary: () => void
  onSavePreferences: (preferences: CookiePreferences) => void
}

export function CookieConsentDialog({
  isOpen,
  onClose,
  onAcceptAll,
  onAcceptNecessary,
  onSavePreferences,
}: CookieConsentDialogProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  })

  const [showDetails, setShowDetails] = useState(false)

  const handleSavePreferences = () => {
    onSavePreferences(preferences)
    onClose()
  }

  const handleAcceptAll = () => {
    onAcceptAll()
    onClose()
  }

  const handleAcceptNecessary = () => {
    onAcceptNecessary()
    onClose()
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl border border-gray-200 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Cookie className="h-5 w-5 text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-900">Cookie Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <p className="text-gray-600 mb-6">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            Choose which types of cookies you want to accept.
          </p>

          {!showDetails ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                We respect your privacy. You can choose to accept all cookies, 
                only necessary cookies, or customize your settings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleAcceptAll} 
                  className="flex-1 bg-gray-900 text-white hover:bg-gray-800 font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Accept All Cookies
                </button>
                <button 
                  onClick={handleAcceptNecessary} 
                  className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Necessary Only
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Customize Settings
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid gap-4">
                {/* Necessary Cookies */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-gray-700" />
                      <h3 className="text-base font-semibold text-gray-900">Necessary Cookies</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      These cookies are required for the website to function properly
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <label htmlFor="necessary" className="text-sm text-gray-700">
                        Always enabled
                      </label>
                      <input
                        type="checkbox"
                        id="necessary"
                        checked={true}
                        disabled
                        className="w-4 h-4 text-gray-900 bg-gray-200 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-gray-700" />
                      <h3 className="text-base font-semibold text-gray-900">Analytics Cookies</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Help us understand how visitors interact with our website
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <label htmlFor="analytics" className="text-sm text-gray-700">
                        Allow analytics cookies
                      </label>
                      <input
                        type="checkbox"
                        id="analytics"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference("analytics", e.target.checked)}
                        className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-gray-700" />
                      <h3 className="text-base font-semibold text-gray-900">Marketing Cookies</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Used to deliver personalized advertisements and measure campaign effectiveness
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <label htmlFor="marketing" className="text-sm text-gray-700">
                        Allow marketing cookies
                      </label>
                      <input
                        type="checkbox"
                        id="marketing"
                        checked={preferences.marketing}
                        onChange={(e) => updatePreference("marketing", e.target.checked)}
                        className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Preference Cookies */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="h-4 w-4 text-gray-700" />
                      <h3 className="text-base font-semibold text-gray-900">Preference Cookies</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Remember your preferences and settings
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <label htmlFor="preferences" className="text-sm text-gray-700">
                        Allow preference cookies
                      </label>
                      <input
                        type="checkbox"
                        id="preferences"
                        checked={preferences.preferences}
                        onChange={(e) => updatePreference("preferences", e.target.checked)}
                        className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleSavePreferences} 
                  className="flex-1 bg-gray-900 text-white hover:bg-gray-800 font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Save My Settings
                </button>
                <button 
                  onClick={handleAcceptAll} 
                  className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Back to Simple View
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            You can change your cookie settings at any time in the footer.
          </p>
        </div>
      </div>
    </div>
  )
}
