'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PartnerOne from '../../public/images/partners/partner-one.png';
import PartnerTwo from '../../public/images/partners/partner-two.png';
import PartnerThree from '../../public/images/partners/partner-three.png';
import PartnerFour from '../../public/images/partners/partner-four.png';
import PartnerFive from '../../public/images/partners/partner-five.png';
import PartnerSix from '../../public/images/partners/partner-six.png';
import PartnerSeven from '../../public/images/partners/partner-seven.png';
import Image from 'next/image';
import cls from './Slider.module.scss';

const Slider = () => {
  const getScreenWidth = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1300) {
        return 6;
      } else if (screenWidth > 1000 && screenWidth < 1300) {
        return 5;
      } else if (screenWidth > 800 && screenWidth < 1000) {
        return 4;
      } else if (screenWidth > 600 && screenWidth < 800) {
        return 3;
      } else if (screenWidth < 600) {
        return 2;
      }
    }
  };

  return (
    <Swiper
      autoplay={true}
      loopAddBlankSlides={true}
      loop={true}
      slidesPerView={getScreenWidth()}
      modules={[Autoplay]}
      className={cls.swiper}
    >
      <SwiperSlide className={cls.swiperSlide}>
        <Image src={PartnerOne} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide className={cls.swiperSlide}>
        <Image src={PartnerTwo} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide className={cls.swiperSlide}>
        <Image src={PartnerThree} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide className={cls.swiperSlide}>
        <Image src={PartnerFour} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide className={cls.swiperSlide}>
        <Image src={PartnerFive} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide className={cls.swiperSlide}>
        <Image src={PartnerSix} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide className={cls.swiperSlide}>
        <Image src={PartnerSeven} alt={'Партнёр'} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
