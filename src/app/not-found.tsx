'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 font-light bg-[#010c14]">
      <AlertTriangle className="w-20 h-20 text-[#ff6b6b] mb-4 animate-pulse" />
      <h1 className="text-4xl mb-2 text-[#00f0ff] font-mono">404 - Page Not Found</h1>
      <p className="text-[#9eeaf9] mb-6 max-w-md">
        The page you are looking for doesn&apos;t exist or is under construction.
      </p>
      <Link href="/">
        <Button
          variant="outline"
          className="border-[#1a3a42] text-[#00f0ff] hover:border-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 bg-[#010c14] hover:bg-[#02141e]"
        >
          Go Home
        </Button>
      </Link>
    </div>
  );
}
