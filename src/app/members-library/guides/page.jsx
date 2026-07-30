import { MembersLibrary } from '../page';

export const metadata = {
  title: 'My Study Guides | Member\'s Library',
  description: 'View and read your active nursing study guides.'
};

export default function MembersGuidesPage() {
  return <MembersLibrary defaultTab="guides" />;
}
