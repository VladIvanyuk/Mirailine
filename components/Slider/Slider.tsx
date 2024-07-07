/* eslint-disable @next/next/no-img-element */
'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cls from './Slider.module.scss';
import { useEffect, useState } from 'react';
import { IImageList } from './model/types';

const BUCKET_URL = 'https://s3.timeweb.cloud/47f0ddef-mirailine/';
const CLOUD_API_URL =
  'https://api.timeweb.cloud/api/v1/storages/buckets/312608/object-manager/list';

const Slider = () => {
  const [partnersImgs, setPartnersImgs] = useState<IImageList>([]);
  useEffect(() => {
    fetch(`${CLOUD_API_URL}?prefix=partners/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjFrYnhacFJNQGJSI0tSbE1xS1lqIn0.eyJ1c2VyIjoibXAxNDA0OSIsInR5cGUiOiJhcGlfa2V5IiwicG9ydGFsX3Rva2VuIjoiNjM5MDg0YTItMTA4ZS00MDUxLWJjZTUtZmZkNmJmYjYyMTdjIiwiYXBpX2tleV9pZCI6IjUzZjhiMThjLTJiZTEtNDZiZi04YjhhLWVlNzIzZmJmZTE4YSIsImlhdCI6MTcyMDMyNzU4NX0.pVDtVuaBgqb6Hby0XnYRjTunjPEZXnmHqsgRYB1t0fT8oaON4rvQlhF52364sW5k8TIyOdNYxNkSRtxbUblU2K-Se815OhN2k_wAxx5qevCi6LimpY17hEVtzTNSCKJI2gKsGVoVnk3TLA0NUfgnghNr67BV84FfTyJnlqhnY4M6d6XJ6GtIdBEER47s43Xri7DWeZtxdI06E4sL3kdcyDW2v2RNs9aTGX6QLP4yf8atXmR8BKRnVk_kUb0_QPEn_Y1Q_Xee9h1WnUYQyS592QEvjCKS3JsqktFPxnbGD6yxUxy3-R9f4VFcZQoXM3lhD6cmWTy2SjM5KD-QjJGnQV-ZYt2pTtgS3G27hZ3A7aJZFnrllHub6NB_jtqLYy9B3rtW22bKuNdkJiaBlQHi43Or8tvcAR8IZee9Du2sWVPxVNZu2AYVZZIDxFb2lTqP83nKDGpIKoLpJlYX38OcwlE7OxpvJvk5bk0tIGfzLrMBq7-24W2pft5KIMad-oo7`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPartnersImgs(data.files));
  }, []);

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
      } else if (screenWidth > 400 && screenWidth < 600) {
        return 2;
      } else {
        return 1;
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
      {partnersImgs.map((item) => (
        <SwiperSlide key={item.key} className={cls.swiperSlide}>
          <img src={BUCKET_URL + item.key} alt={'Партнёр'} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
