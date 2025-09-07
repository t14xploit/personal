import DigitalClock from "@/components/features/digital-clock";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CookieSettingsButton } from "../cookie-consent/_components/cookie-settings-button";

export default function WorldClockPage() {
  return (
    <div className="min-h-screen py-6 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/projects" className="text-[#00f0ff] hover:underline mb-4 inline-block text-sm sm:text-base">
            ← Back to Projects
          </Link>
          <h1 className="text-2xl sm:text-3xl font-light text-[#00f0ff] mb-4">🌍 World Clock Dashboard</h1>
          <p className="text-gray-300 text-sm sm:text-base">Display current time in multiple cities worldwide</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">Array Mapping</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">Date Manipulation</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24] text-xs sm:text-sm">Component Reusability</Badge>
          </div>
        </div>

        {/* World Clock Component */}
        <div className="mb-6 sm:mb-8">
          <DigitalClock />
        </div>

        {/* Skills Info */}
        <div className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-4 sm:p-6 mb-6">
          <h3 className="text-base sm:text-lg font-light text-[#00f0ff] mb-4">Skills Demonstrated</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-300">
            <div>
              <h4 className="text-[#00f0ff] mb-2">Array Mapping</h4>
              <p>Efficient rendering of multiple time zone components using JavaScript array methods.</p>
            </div>
            <div>
              <h4 className="text-[#00f0ff] mb-2">Date Manipulation</h4>
              <p>Working with JavaScript Date objects, timezone conversions, and real-time updates.</p>
            </div>
            <div>
              <h4 className="text-[#00f0ff] mb-2">Component Reusability</h4>
              <p>Clean architecture with reusable components and consistent design patterns.</p>
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