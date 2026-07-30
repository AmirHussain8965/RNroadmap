import { BuyersLibrary } from '../page';

export const metadata = {
  title: 'My Downloads | Buyer\'s Library',
  description: 'Download your purchased nursing guides directly.'
};

export default function BuyersDownloadsPage() {
  return <BuyersLibrary defaultTab="purchases" />;
}
