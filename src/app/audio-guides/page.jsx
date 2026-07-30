import AudioHeroSection from '@/components/sections/audio/AudioHeroSection';
import HighlightsBar from '@/components/sections/HighlightsBar';
import ChooseYourTrackSection from '@/components/sections/audio/ChooseYourTrackSection';
import YourNextStepSection from '@/components/sections/guides/YourNextStepSection';

export const metadata = {
  title: 'Audio Study Guides | RNroadmap - Study With Your Ears',
  description: 'High-yield audio study guides for NCLEX-RN and NCLEX-PN. 10 focused episodes each to stream or download and review on the go.'
};

export default function AudioGuidesPage() {
  return (
    <main>
      <AudioHeroSection />
      <HighlightsBar />
      <ChooseYourTrackSection />
      <YourNextStepSection
        title={
          <>
            Your Next Study Session <br />
            Is <span className="gold_text_span">One Tap</span> Away
          </>
        }
        desc="Turn downtime into study time — start listening and move closer to passing with confidence."
        imgSrc="/assets/audio_last1.png"
      />
    </main>
  );
}
