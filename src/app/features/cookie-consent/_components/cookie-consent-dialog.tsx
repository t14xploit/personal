"use client"

import { useState, useEffect } from "react"
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Cookie, Shield, BarChart3, Target, Settings } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true
  analytics: false,
  marketing: false,
  preferences: false,
}

export function CookieConsentDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = Cookies.get("cookie-consent")
    if (!consent) {
      setIsOpen(true)
    } else {
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)
      } catch {
        // If parsing fails, show dialog again
        setIsOpen(true)
      }
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    // Save to cookie (expires in 1 year)
    Cookies.set("cookie-consent", JSON.stringify(prefs), { expires: 365 })
    
    // Apply preferences (you can add actual analytics/marketing script loading here)
    if (prefs.analytics) {
      console.log("Analytics enabled")
      // Load analytics scripts
    }
    
    if (prefs.marketing) {
      console.log("Marketing enabled")
      // Load marketing scripts
    }
    
    if (prefs.preferences) {
      console.log("Preferences enabled")
      // Load preference scripts
    }
    
    setIsOpen(false)
  }

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    savePreferences(allAccepted)
  }

  const acceptNecessary = () => {
    savePreferences(defaultPreferences)
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return // Can't disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 text-gray-900 rounded-lg shadow-lg [&>*]:!bg-white [&>*]:!text-gray-900 [&>*]:!border-gray-200">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-gray-900">
            <Cookie className="h-5 w-5" />
            Cookie Settings
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            We use cookies to enhance your browsing experience and analyze our traffic.
            Choose which types of cookies you want to accept.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {!showDetails ? (
            // Simple view
            <div className="space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                We respect your privacy. You can choose to accept all cookies,
                only necessary cookies, or customize your settings.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptAll} className="flex-1 bg-gray-900 text-white hover:bg-gray-800 font-medium">
                  Accept All Cookies
                </Button>
                <Button onClick={acceptNecessary} variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                  Necessary Only
                </Button>
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Customize Settings
                </Button>
              </div>
            </div>
          ) : (
            // Detailed view
            <div className="space-y-4">
              <div className="grid gap-4">
                {/* Necessary Cookies */}
                <Card className="bg-white border border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-gray-900 font-semibold">
                      <Shield className="h-4 w-4" />
                      Necessary Cookies
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      These cookies are required for the website to function properly
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="necessary" className="text-sm text-gray-700">
                        Always enabled
                      </Label>
                      <Switch
                        id="necessary"
                        checked={true}
                        disabled
                        className="data-[state=checked]:bg-gray-900"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Analytics Cookies */}
                <Card className="bg-white border border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-gray-900 font-semibold">
                      <BarChart3 className="h-4 w-4" />
                      Analytics Cookies
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Help us understand how visitors interact with our website
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="analytics" className="text-sm text-gray-700">
                        Allow analytics cookies
                      </Label>
                      <Switch
                        id="analytics"
                        checked={preferences.analytics}
                        onCheckedChange={(checked) => updatePreference("analytics", checked)}
                        className="data-[state=checked]:bg-gray-900"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Marketing Cookies */}
                <Card className="bg-white border border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-gray-900 font-semibold">
                      <Target className="h-4 w-4" />
                      Marketing Cookies
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Used to deliver personalized advertisements and measure campaign effectiveness
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketing" className="text-sm text-gray-700">
                        Allow marketing cookies
                      </Label>
                      <Switch
                        id="marketing"
                        checked={preferences.marketing}
                        onCheckedChange={(checked) => updatePreference("marketing", checked)}
                        className="data-[state=checked]:bg-gray-900"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Preference Cookies */}
                <Card className="bg-white border border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-gray-900 font-semibold">
                      <Settings className="h-4 w-4" />
                      Preference Cookies
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Remember your preferences and settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="preferences" className="text-sm text-gray-700">
                        Allow preference cookies
                      </Label>
                      <Switch
                        id="preferences"
                        checked={preferences.preferences}
                        onCheckedChange={(checked) => updatePreference("preferences", checked)}
                        className="data-[state=checked]:bg-gray-900"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={saveCustomPreferences} className="flex-1 bg-gray-900 text-white hover:bg-gray-800 font-medium">
                  Save My Settings
                </Button>
                <Button onClick={acceptAll} variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                  Accept All Cookies
                </Button>
                <Button
                  onClick={() => setShowDetails(false)}
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Back to Simple View
                </Button>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="text-xs text-gray-500">
          You can change your cookie settings at any time in the footer.
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
