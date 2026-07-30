import { MembersLibrary } from '../page';

export const metadata = {
  title: 'Membership Status | Member\'s Library',
  description: 'Manage your active subscription plan and billing.'
};

export default function MembersStatusPage() {
  return <MembersLibrary defaultTab="membership" />;
}
