'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

const banners=[
  {id:'winter',className:'hero-winter',image:'/images/campaign.png',alt:'Bộ sưu tập THE Q với áo phao đen'},
  {id:'warm',className:'hero-warm',image:'/images/campaign-olive-ivory.webp',alt:'Người mẫu mặc áo phao xanh olive và màu kem THE Q'},
  {id:'gile',className:'hero-gile',image:'/images/campaign-gile.webp',alt:'Người mẫu nam mặc áo gile xanh rêu và người mẫu nữ mặc áo phao đen THE Q'},
];

export default function HeroCarousel({activeIndex,onIndexChange}:{activeIndex:number;onIndexChange:(index:number)=>void}) {
  return <section className="home-banner" aria-label="Bộ sưu tập THE Q mùa đông">
    <Swiper
      className="banner-carousel"
      modules={[Navigation,Pagination,Keyboard,A11y]}
      initialSlide={activeIndex}
      slidesPerView={1}
      loop
      speed={500}
      navigation
      pagination={{clickable:true,bulletElement:'button'}}
      keyboard={{enabled:true,onlyInViewport:true}}
      a11y={{prevSlideMessage:'Banner trước',nextSlideMessage:'Banner tiếp theo',paginationBulletMessage:'Chuyển đến banner {{index}}'}}
      onSlideChange={swiper=>onIndexChange(swiper.realIndex)}
    >
      {banners.map((banner,index)=><SwiperSlide key={banner.id} className={banner.className}>
        <div className="banner-image" aria-hidden={index!==activeIndex}>
          <img src={banner.image} alt={banner.alt} fetchPriority={index===0?'high':'auto'} loading={index===0?'eager':'lazy'}/>
        </div>
      </SwiperSlide>)}
    </Swiper>
  </section>;
}
