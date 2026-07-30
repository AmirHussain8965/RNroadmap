import { MembersLibrary } from '../page';

export const metadata = {
  title: 'Mock Exams | Member\'s Library',
  description: 'Practice NCLEX style test bank mock exams.'
};

export default function MembersTestBankPage() {
  return <MembersLibrary defaultTab="test-bank" />;
}
