import { MembersLibrary } from '../page';

export const metadata = {
  title: 'My Flashcards | Member\'s Library',
  description: 'Study interactive NCLEX flashcards.'
};

export default function MembersFlashcardsPage() {
  return <MembersLibrary defaultTab="favourites" />;
}
