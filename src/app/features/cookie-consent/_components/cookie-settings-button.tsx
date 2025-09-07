"use client"

import { useState } from "react"
import Cookies from "js-cookie"
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
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Shield, BarChart3, Target, Settings } from "lucide-react"
import { showSuccessToast } from "@/lib/toast-utils"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
}

export function CookieSettingsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    if (typeof window !== "undefined") {
      const consent = Cookies.get("cookie-consent")
      if (consent) {
        try {
          return JSON.parse(consent)
        } catch {
          return defaultPreferences
        }
      }
    }
    return defaultPreferences
  })

  const savePreferences = (prefs: CookiePreferences) => {
    Cookies.set("cookie-consent", JSON.stringify(prefs), { expires: 365 })
    
    // Apply preferences
    if (prefs.analytics) {
      console.log("Analytics enabled")
    }
    
    if (prefs.marketing) {
      console.log("Marketing enabled")
    }
    
    if (prefs.preferences) {
      console.log("Preferences enabled")
    }
    
    setIsOpen(false)
    showSuccessToast("Cookie settings saved!")
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-xs sm:text-sm">
          <Cookie className="h-3 h-3 sm:w-4 sm:h-4 mr-2" />
          Cookie Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 text-gray-900">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-gray-900">
            <Cookie className="h-5 w-5" />
            Cookie Settings
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Manage your cookie preferences. You can change these settings at any time.
          </DialogDescription>
        </DialogHeader>

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
                  <Label htmlFor="necessary-settings" className="text-sm text-gray-700">
                    Always enabled
                  </Label>
                  <Switch
                    id="necessary-settings"
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
                  <Label htmlFor="analytics-settings" className="text-sm text-gray-700">
                    Allow analytics cookies
                  </Label>
                  <Switch
                    id="analytics-settings"
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
                  <Label htmlFor="marketing-settings" className="text-sm text-gray-700">
                    Allow marketing cookies
                  </Label>
                  <Switch
                    id="marketing-settings"
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
                  <Label htmlFor="preferences-settings" className="text-sm text-gray-700">
                    Allow preference cookies
                  </Label>
                  <Switch
                    id="preferences-settings"
                    checked={preferences.preferences}
                    onCheckedChange={(checked) => updatePreference("preferences", checked)}
                    className="data-[state=checked]:bg-gray-900"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={() => savePreferences(preferences)} className="bg-gray-900 text-white hover:bg-gray-800 font-medium">
            Save Settings
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
