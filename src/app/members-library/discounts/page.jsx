import { MembersLibrary } from '../page';

export const metadata = {
  title: 'Member Discounts | Member\'s Library',
  description: 'Access exclusive partner discounts and coupon codes for premium members.'
};

export default function MembersDiscountsPage() {
  return <MembersLibrary defaultTab="discounts" />;
}
