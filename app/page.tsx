import { Navigation } from '@/components/sections/navigation';
import { PageLoader } from '@/components/primitives/page-loader';
import { ScrollProgress } from '@/components/primitives/anim';
import { Hero } from '@/components/sections/hero';
import { QuickHighlights } from '@/components/sections/quick-highlights';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Achievements } from '@/components/sections/achievements';
import { Publications } from '@/components/sections/publications';
import { Timeline } from '@/components/sections/timeline';
import { Learning } from '@/components/sections/learning';
import { Contact } from '@/components/sections/contact';
import { FloatingLinkedIn } from '@/components/sections/floating-linkedin';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <Navigation />
      <main className="relative">
        <Hero />
        <QuickHighlights />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Publications />
        <Timeline />
        <Learning />
        <Contact />
      </main>
      <FloatingLinkedIn />
      <Footer />
    </>
  );
}
