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

const Slider = () => {
  return (
    <Swiper
      autoplay={true}
      loopAddBlankSlides={true}
      loop={true}
      slidesPerView={6}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <Image src={PartnerOne} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={PartnerTwo} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={PartnerThree} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={PartnerFour} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={PartnerFive} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={PartnerSix} alt={'Партнёр'} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={PartnerSeven} alt={'Партнёр'} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
