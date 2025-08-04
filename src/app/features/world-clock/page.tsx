import DigitalClock from "@/components/features/digital-clock";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function WorldClockPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/projects" className="text-[#00f0ff] hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-light text-[#00f0ff] mb-4">🌍 World Clock Dashboard</h1>
          <p className="text-gray-300">Display current time in multiple cities worldwide</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">Array Mapping</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">Date Manipulation</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">Component Reusability</Badge>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-8 text-center">
          <div className="text-6xl mb-6">🌍</div>
          <h2 className="text-xl font-light text-[#00f0ff] mb-4">World Clock Dashboard</h2>
          <p className="text-gray-300 mb-6">
            This feature will display current time in multiple cities around the world with flags and time zone information.
            Users can see real-time updates and different time zones at a glance.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Skills demonstrated:</strong></p>
            <p>• Array mapping for rendering multiple components</p>
            <p>• Date manipulation and timezone handling</p>
            <p>• Component reusability and clean architecture</p>
          </div>
        </div>
      </div>
      <div>
        <DigitalClock />
      </div>
    </div>
  );
}