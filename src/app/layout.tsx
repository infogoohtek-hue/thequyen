import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ShopShell from './shop-shell';
import './storefront.css';
import './about.css';
const montserrat = localFont({src:[{path:'../../public/fonts/montserrat-0.ttf',weight:'400'},{path:'../../public/fonts/montserrat-1.ttf',weight:'500'},{path:'../../public/fonts/montserrat-2.ttf',weight:'600'},{path:'../../public/fonts/montserrat-3.ttf',weight:'700'}],display:'swap',variable:'--font-montserrat'});
export const metadata: Metadata = {
  metadataBase: new URL('https://the-q-winterwear.chatgpt-busi-7531.chatgpt.site'),
  title: 'THE Q | Ấm áp theo cách của bạn',
  description: 'Khám phá áo khoác phao và gile THE Q. Thiết kế tinh giản, đồng hành cùng bạn trong những ngày lạnh.',
  openGraph: { title: 'THE Q — Winter, your way', description: 'Ấm áp theo cách của bạn.', locale: 'vi_VN', type: 'website', images: ['/images/campaign-original.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className={montserrat.variable}><body><ShopShell>{children}</ShopShell></body></html>;
}

