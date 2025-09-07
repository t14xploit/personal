import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CookieConsentDialog } from "./_components/cookie-consent-dialog";

export default function CookieConsentPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/projects" className="text-[#00f0ff] hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-light text-[#00f0ff] mb-4">🍪 Cookie Consent Banner</h1>
          <p className="text-gray-300">GDPR-compliant cookie consent management</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">UI/UX Design</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">LocalStorage</Badge>
            <Badge variant="outline" className="text-[#00f0ff] border-[#0f1f24]">Cookie Handling</Badge>
          </div>
        </div>
        <CookieConsentDialog />

        {/* Placeholder Content */}
        <div className="bg-[#020b12] border border-[#0f1f24] rounded-lg p-8 text-center">
          <div className="text-6xl mb-6">🍪</div>
          <h2 className="text-xl font-light text-[#00f0ff] mb-4">Cookie Consent Banner</h2>
          <p className="text-gray-300 mb-6">
            This feature will implement a GDPR-compliant cookie consent banner with granular controls for different
            cookie categories, localStorage persistence, and proper consent management.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Skills demonstrated:</strong></p>
            <p>• UI/UX design for compliance and usability</p>
            <p>• LocalStorage for persistent user preferences</p>
            <p>• Cookie handling and GDPR compliance patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
}