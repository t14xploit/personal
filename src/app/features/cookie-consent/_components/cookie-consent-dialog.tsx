"use client"

import { useState, useEffect } from "react"
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Cookie className="h-5 w-5" />
            Vi använder cookies
          </DialogTitle>
          <DialogDescription>
            Vi använder cookies för att förbättra din upplevelse på vår webbplats. 
            Välj vilka typer av cookies du vill acceptera.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {!showDetails ? (
            // Simple view
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Vi respekterar din integritet. Du kan välja att acceptera alla cookies, 
                endast nödvändiga cookies, eller anpassa dina inställningar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptAll} className="flex-1">
                  Acceptera alla cookies
                </Button>
                <Button onClick={acceptNecessary} variant="outline" className="flex-1">
                  Endast nödvändiga cookies
                </Button>
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="ghost"
                  className="flex-1"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Anpassa inställningar
                </Button>
              </div>
            </div>
          ) : (
            // Detailed view
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
                      <Label htmlFor="necessary" className="text-sm">
                        Alltid aktiverade
                      </Label>
                      <Switch
                        id="necessary"
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
                      <Label htmlFor="analytics" className="text-sm">
                        Tillåt analytiska cookies
                      </Label>
                      <Switch
                        id="analytics"
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
                      <Label htmlFor="marketing" className="text-sm">
                        Tillåt marknadsföringscookies
                      </Label>
                      <Switch
                        id="marketing"
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
                      <Label htmlFor="preferences" className="text-sm">
                        Tillåt inställningscookies
                      </Label>
                      <Switch
                        id="preferences"
                        checked={preferences.preferences}
                        onCheckedChange={(checked) => updatePreference("preferences", checked)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={saveCustomPreferences} className="flex-1">
                  Spara mina inställningar
                </Button>
                <Button onClick={acceptAll} variant="outline" className="flex-1">
                  Acceptera alla cookies
                </Button>
                <Button
                  onClick={() => setShowDetails(false)}
                  variant="ghost"
                  className="flex-1"
                >
                  Tillbaka till enkel vy
                </Button>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="text-xs text-muted-foreground">
          Du kan när som helst ändra dina cookie-inställningar i sidfoten.
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
