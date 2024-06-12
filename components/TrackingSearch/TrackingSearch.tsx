'use client';

import { classNames } from '@/utils/classNames/classNames';
import cls from './TrackingSearch.module.scss';
import { Description, FontSizes } from '../Description/Description';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

interface ITrackingSearchProps {
  className?: string;
  title: string;
  placeholder: string;
  button: string;
}

export interface IFrameData {
  FlightNumber: string;
  NameOfTheVessel: string;
  SailingOnOrAbout: string;
  images: Image[];
}

export interface Image {
  image: string;
}

const URL = 'https://www.vl1c.ru/mirayunfhttp/hs/post/product_json/VM4-082144';

export const TrackingSearch = ({
  className,
  title,
  placeholder,
  button,
}: ITrackingSearchProps) => {
  const [frameData, setFrameData] = useState<IFrameData | null>(null);
  const [isShowCarousel, setIsShowCarousel] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchFrame = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setFrameData(data);
      setIsLoading(false);
      setIsError(false);
    } catch (e) {
      setIsLoading(false);
      setIsError(false);
    }
  };

  return (
    <div className={classNames(cls.trackingSearch, {}, [className])}>
      {isShowCarousel && (
        <div className={cls.swiperWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            loopAddBlankSlides={true}
            loop={true}
            slidesPerView={1}
            className={cls.swiper}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {frameData &&
              frameData.images.map((el, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={el.image}
                    width={1000}
                    height={650}
                    alt="Картинка кузова"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
      <Description fontSize={FontSizes.S} className={cls.trackingTitle}>
        {title}
      </Description>
      <div>
        <input type="text" className={cls.input} placeholder={placeholder} />
        <button onClick={searchFrame} className={cls.button}>
          {button}
        </button>
      </div>
      <div>
        <p>VM4-082144</p>
        {frameData && (
          <ul className={cls.imgsList}>
            {frameData.images.map((el, index) => (
              <li
                onClick={() => setIsShowCarousel(true)}
                className={cls.imgsListItem}
                key={index}
              >
                <Image
                  src={el.image}
                  width={100}
                  height={100}
                  alt="Картинка кузова"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
