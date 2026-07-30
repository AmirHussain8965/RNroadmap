import ShopHeaderSection from '@/components/sections/shop/ShopHeaderSection';
import ShopProductSliders from '@/components/sections/shop/ShopProductSliders';
import ShopBundlesSection from '@/components/sections/shop/ShopBundlesSection';
import ShopFormatSelector from '@/components/sections/shop/ShopFormatSelector';
import ShopContactCta from '@/components/sections/shop/ShopContactCta';

export const metadata = {
  title: 'Shop Study Guides & Bundles | RNroadmap',
  description: 'Shop study guides, flashcards, complete starter bundles, NCLEX reviews, and audio study guides created by Walner Alcius RN, BSN, CCRN.'
};

export default function ShopPage() {
  return (
    <main>
      <ShopHeaderSection />
      <ShopProductSliders />
      <ShopBundlesSection />
      <ShopFormatSelector />
      <ShopContactCta />
    </main>
  );
}
