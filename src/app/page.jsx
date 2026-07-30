import HeroSection from '@/components/sections/HeroSection';
import HighlightsBar from '@/components/sections/HighlightsBar';
import CategorySection from '@/components/sections/CategorySection';
import InstructorSection from '@/components/sections/InstructorSection';
import RoadmapStorySection from '@/components/sections/RoadmapStorySection';
import ExploreSection from '@/components/sections/ExploreSection';
import GuidesEverywhereSection from '@/components/sections/GuidesEverywhereSection';
import WhyRNRoadmapSection from '@/components/sections/WhyRNRoadmapSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FreePracticeQuizSection from '@/components/sections/FreePracticeQuizSection';
import SelectGuidesPricingSection from '@/components/sections/SelectGuidesPricingSection';
import GiveawaySection from '@/components/sections/GiveawaySection';
import WhatNursesSaySection from '@/components/sections/WhatNursesSaySection';
import FAQSection from '@/components/sections/FAQSection';
import ReadyNextStepSection from '@/components/sections/ReadyNextStepSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsBar />
      <CategorySection />
      <InstructorSection />
      <RoadmapStorySection />
      <ExploreSection />
      <GuidesEverywhereSection />
      <WhyRNRoadmapSection />
      <HowItWorksSection />
      <FreePracticeQuizSection />
      <SelectGuidesPricingSection />
      <GiveawaySection />
      <WhatNursesSaySection />
      <FAQSection />
      <ReadyNextStepSection />
    </>
  );
}
