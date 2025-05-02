import IdentityHeader from '@/components/about/IdentityHeader';
import OriginProtocol from '@/components/about/OriginProtocol';
import SkillsModule from '@/components/about/SkillsModule';
import CredentialsFile from '@/components/about/CredentialsFile';
import SystemNotes from '@/components/about/SystemNotes';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import Terminal from '@/components/about/Terminal';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
      <Terminal/>
      <IdentityHeader />
      <OriginProtocol />
      <SkillsModule />
      <CredentialsFile />
      <SystemNotes />
      <JourneyTimeline/>
    </main>
  );
}
