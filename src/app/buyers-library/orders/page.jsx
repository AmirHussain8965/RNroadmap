import { BuyersLibrary } from '../page';

export const metadata = {
  title: 'Order History | Buyer\'s Library',
  description: 'View order receipts, payment confirmations, and purchases.'
};

export default function BuyersOrdersPage() {
  return <BuyersLibrary defaultTab="orders" />;
}
