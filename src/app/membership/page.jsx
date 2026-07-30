import MembershipPlansSection from '@/components/sections/membership/MembershipPlansSection';
import GiveawaySection from '@/components/sections/GiveawaySection';

export const metadata = {
  title: 'Membership Plans | RNroadmap - Full Access to Guides',
  description: 'Join RNroadmap memberships. Get full access to every study guide, flashcard deck, audio lesson, NCLEX review bank, and participate in our weekly giveaways.'
};

export default function MembershipPage() {
  return (
    <main>
      <MembershipPlansSection />
      <GiveawaySection />
    </main>
  );
}
