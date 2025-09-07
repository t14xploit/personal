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
    showSuccessToast("Cookie-inställningar sparade!")
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <Cookie className="h-4 w-4 mr-2" />
          Cookie-inställningar
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Cookie className="h-5 w-5" />
            Cookie-inställningar
          </DialogTitle>
          <DialogDescription>
            Hantera dina cookie-preferenser. Du kan ändra dessa inställningar när som helst.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid gap-4">
            {/* Necessary Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Shield className="h-4 w-4" />
                  Nödvändiga cookies
                </CardTitle>
                <CardDescription>
                  Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="necessary-settings" className="text-sm">
                    Alltid aktiverade
                  </Label>
                  <Switch
                    id="necessary-settings"
                    checked={true}
                    disabled
                  />
                </div>
              </CardContent>
            </Card>

            {/* Analytics Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <BarChart3 className="h-4 w-4" />
                  Analytiska cookies
                </CardTitle>
                <CardDescription>
                  Hjälper oss förstå hur besökare använder webbplatsen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="analytics-settings" className="text-sm">
                    Tillåt analytiska cookies
                  </Label>
                  <Switch
                    id="analytics-settings"
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => updatePreference("analytics", checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Marketing Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="h-4 w-4" />
                  Marknadsföringscookies
                </CardTitle>
                <CardDescription>
                  Används för att visa relevanta annonser och mäta kampanjeffektivitet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing-settings" className="text-sm">
                    Tillåt marknadsföringscookies
                  </Label>
                  <Switch
                    id="marketing-settings"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => updatePreference("marketing", checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Preference Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Settings className="h-4 w-4" />
                  Inställningscookies
                </CardTitle>
                <CardDescription>
                  Sparar dina preferenser och inställningar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="preferences-settings" className="text-sm">
                    Tillåt inställningscookies
                  </Label>
                  <Switch
                    id="preferences-settings"
                    checked={preferences.preferences}
                    onCheckedChange={(checked) => updatePreference("preferences", checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={() => savePreferences(preferences)}>
            Spara inställningar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
