'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 font-light">
      <AlertTriangle className="w-20 h-20 text-red-500 mb-4" />
      <h1 className="text-4xl mb-2 text-[#00f0ff]">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6">
        The page you are looking for doesn&apos;t exist or is under construction.
      </p>
      <Link href="/">
        <Button variant="outline" className="border-[#00f0ff] text-[#00f0ff] hover:shadow-[0_0_20px_#00f0ff99]">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
