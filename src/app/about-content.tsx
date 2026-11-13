import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AboutContent() {
  return <>
    <nav className="breadcrumbs" aria-label="Đường dẫn trang"><Link href="/">Trang chủ</Link><span>—</span><span aria-current="page">Về chúng tôi</span></nav>
    <article className="about-page">
      <h1 className="title-section">VỀ THE Q</h1>
      <figure className="about-hero"><img src="/images/brand/storefront.webp" alt="Phối cảnh đầy đủ mặt tiền thương hiệu THE Q Winter Wear" width="1267" height="576" fetchPriority="high"/></figure>
      <section className="about-intro" id="cau-chuyen"><h2>GIỮ ẤM TỪNG HÀNH TRÌNH.</h2><p>THE Q mang đến những thiết kế áo phao và áo gile cho ngày lạnh. Tinh giản trong phom dáng, dễ kết hợp trong tủ đồ — từ một ngày đi làm đến những chuyến đi xa.</p><p>Đen, xanh olive và kem. Những gam màu quen thuộc, để bạn thoải mái chọn phong cách của riêng mình.</p></section>
      <section className="about-chapter" id="san-xuat"><h2 className="chapter-title">TỪ XƯỞNG MAY ĐẾN SẢN PHẨM</h2><div className="about-split"><figure><img src="/images/brand/company.webp" alt="Mặt tiền Công ty TNHH TM DV Thế Quyền trong tư liệu khách hàng" width="1200" height="896" loading="lazy"/></figure><div className="about-copy"><h3>Câu chuyện từ Thế Quyền</h3><p>Một góc nhìn gần hơn về nơi làm nghề: không gian Công ty TNHH TM DV Thế Quyền và xưởng may trong những hình ảnh được ghi lại tại cơ sở.</p><p>Đằng sau từng chiếc áo là công việc của những người thợ, từ chuẩn bị mẫu đến từng đường may.</p></div></div><figure className="about-wide"><img src="/images/brand/factory.webp" alt="Không gian xưởng may và đội ngũ đang làm việc" width="958" height="535" loading="lazy"/></figure></section>
      <section className="about-split about-sample" id="phong-mau"><div className="about-copy"><h2>Tỉ mỉ từ phòng mẫu</h2><p>Áo phao cổ đứng, áo khoác có mũ và áo gile. Phòng mẫu là nơi nhìn lại phom dáng, cách chần và từng chi tiết của thiết kế.</p><Link className="about-text-link" href="/#collection">Khám phá sản phẩm <ArrowUpRight size={18}/></Link></div><figure><img src="/images/brand/sample-room.webp" alt="Phòng mẫu với các thiết kế áo phao và gile đen, kem, vàng" width="958" height="535" loading="lazy"/></figure></section>
      <section className="about-chapter about-identity" id="nhan-dien"><h2 className="chapter-title">DẤU ẤN THE Q</h2><div className="about-section-intro"><h3>Nhất quán trong từng chi tiết</h3><p>Từ logo thêu đến nhãn cổ, thẻ bài và bao bì. Tinh thần tối giản của THE Q được nối dài qua từng điểm chạm.</p></div><figure><img src="/images/brand/identity.webp" alt="Bộ thiết kế nhận diện THE Q gồm logo, nhãn cổ, logo thêu, nhãn thành phần, thẻ bài và bao bì" width="1280" height="854" loading="lazy"/></figure></section>
      <section className="about-split about-energy" id="khong-gian-xanh"><figure><img src="/images/brand/solar.webp" alt="Hệ thống pin năng lượng mặt trời và thiết bị tại cơ sở" width="958" height="535" loading="lazy"/></figure><div className="about-copy"><h2>Một góc nhìn xanh hơn</h2><p>Từ những tấm pin trên mái đến hệ thống thiết bị bên trong xưởng — một dấu ấn của việc đưa năng lượng mặt trời vào không gian sản xuất.</p></div></section>
      <div className="about-finish"><h2>Cùng THE Q đón những ngày lạnh.</h2><Link href="/#collection" className="curve-button">Khám phá bộ sưu tập <ArrowUpRight size={18}/></Link></div>
    </article>
  </>;
}
