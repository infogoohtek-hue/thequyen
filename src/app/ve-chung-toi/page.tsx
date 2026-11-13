import type { Metadata } from 'next';
import AboutContent from '../about-content';

export const metadata: Metadata = {
  title: 'Về chúng tôi | THE Q',
  description: 'Khám phá câu chuyện THE Q qua xưởng may, phòng mẫu, thiết kế nhận diện và bộ sưu tập áo khoác mùa đông.',
  alternates: { canonical: '/ve-chung-toi/' },
  openGraph: { title: 'Về chúng tôi | THE Q', description: 'Từ xưởng may đến từng thiết kế áo khoác THE Q.', images: ['/images/brand/storefront.webp'], url: '/ve-chung-toi/' },
};

export default function AboutPage() { return <AboutContent/>; }
