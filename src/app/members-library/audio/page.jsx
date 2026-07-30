import { MembersLibrary } from '../page';

export const metadata = {
  title: 'My Audio Guides | Member\'s Library',
  description: 'Listen to your high-yield audio study guides and episodes.'
};

export default function MembersAudioPage() {
  return <MembersLibrary defaultTab="audio" />;
}
