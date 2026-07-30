import { MembersLibrary } from '../page';

export const metadata = {
  title: 'My Favourites | Member\'s Library',
  description: 'View your starred study guides, bookmarks, and favorite audio tracks.'
};

export default function MembersFavouritesPage() {
  return <MembersLibrary defaultTab="favourites" />;
}
