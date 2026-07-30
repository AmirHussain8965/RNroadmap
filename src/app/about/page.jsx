import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import HighlightsBar from '@/components/sections/HighlightsBar';
import BuiltByNurseSection from '@/components/sections/about/BuiltByNurseSection';
import MeetInstructorSection from '@/components/sections/about/MeetInstructorSection';
import OurMissionSection from '@/components/sections/about/OurMissionSection';
import RealExperienceSection from '@/components/sections/about/RealExperienceSection';
import WhatNursesSaySection from '@/components/sections/WhatNursesSaySection';
import FAQSection from '@/components/sections/FAQSection';
import ReadyNextStepAboutSection from '@/components/sections/about/ReadyNextStepAboutSection';

export const metadata = {
  title: 'About Us | RNroadmap - Built By A Nurse, For Nurses',
  description: 'Learn about Walner Alcius RN, BSN, CCRN and the story behind RNroadmap — nursing study guides built at the bedside to guide every nurse at every stage.'
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <HighlightsBar />
      <BuiltByNurseSection />
      <MeetInstructorSection />
      <OurMissionSection />
      <RealExperienceSection />
      <WhatNursesSaySection />
      <FAQSection />
      <ReadyNextStepAboutSection />
    </main>
  );
}
