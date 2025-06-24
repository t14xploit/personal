import IdentityHeader from '@/components/about/IdentityHeader';
import OriginProtocol from '@/components/about/OriginProtocol';
import SkillsModule from '@/components/about/SkillsModule';
import CredentialsFile from '@/components/about/CredentialsFile';
import SystemNotes from '@/components/about/SystemNotes';
import JourneyLog from '@/components/about/JourneyLog';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-6 sm:py-8 lg:py-12 max-w-full mx-auto space-y-6 sm:space-y-8 lg:space-y-12 overflow-x-hidden">
      <IdentityHeader />
      <OriginProtocol />
      <SkillsModule />
      <CredentialsFile />
      <SystemNotes />
      <JourneyLog />
    </main>
  );
}
