import TestBankHeroSection from '@/components/sections/test-bank/TestBankHeroSection';
import HighlightsBar from '@/components/sections/HighlightsBar';
import PracticeSystemSection from '@/components/sections/test-bank/PracticeSystemSection';
import InteractiveQuizWidget from '@/components/sections/test-bank/InteractiveQuizWidget';
import YourNextStepSection from '@/components/sections/guides/YourNextStepSection';

export const metadata = {
  title: 'NCLEX Test Bank | RNroadmap - Practice Like Exam Day',
  description: 'Practice with 2,000+ NCLEX-style questions, full rationales, select-all-that-apply options, and unlimited retakes with separate tracks for NCLEX-RN and NCLEX-PN.'
};

export default function TestBankPage() {
  return (
    <main>
      <TestBankHeroSection />
      <HighlightsBar />
      <PracticeSystemSection />
      <InteractiveQuizWidget />
      <YourNextStepSection
        title={
          <>
            Ready For <span className="gold_text_span">Full</span> Access?
          </>
        }
        desc="Unlock the complete Test Bank as part of your membership and start practicing with confidence today."
        btnText="GET TEST BANK ACCESS"
        btnLink="/membership"
      />
    </main>
  );
}
