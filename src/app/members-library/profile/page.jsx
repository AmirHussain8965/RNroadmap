import { MembersLibrary } from '../page';

export const metadata = {
  title: 'My Profile | Member\'s Library',
  description: 'Manage your profile and active premium subscriptions.'
};

export default function MembersProfilePage() {
  return <MembersLibrary defaultTab="membership" />;
}
