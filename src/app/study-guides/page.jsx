import GuidesHeroSection from '@/components/sections/guides/GuidesHeroSection';
import HighlightsBar from '@/components/sections/HighlightsBar';
import BrowseByStageSection from '@/components/sections/guides/BrowseByStageSection';
import YourNextStepSection from '@/components/sections/guides/YourNextStepSection';

export const metadata = {
  title: 'Study Guides | RNroadmap - Built For How Nurses Learn',
  description: 'Explore high-yield nursing study guides, flashcards, NCLEX review, dosage calculations, and pharmacology resources built at the bedside.'
};

export default function StudyGuidesPage() {
  return (
    <main>
      <GuidesHeroSection />
      <HighlightsBar />
      <BrowseByStageSection />
      <YourNextStepSection />
    </main>
  );
}
