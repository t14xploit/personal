import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T14Xploit",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col w-full overflow-x-hidden">
            <div className="flex items-center p-2">
              <SidebarTrigger className="bg-[#010c14] border border-[#1a3a42] hover:border-[#00f0ff] transition-colors duration-300" />
            </div>
            <div className="flex justify-center mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-7xl overflow-x-hidden">
                {children}
              </div>
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}


