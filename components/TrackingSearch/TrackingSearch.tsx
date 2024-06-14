'use client';

import { classNames } from '@/utils/classNames/classNames';
import { Description, FontSizes } from '../Description/Description';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import cls from './TrackingSearch.module.scss';
import { useDownload } from './useDownload';

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
  const [swiper, setSwiper] = useState<any>();
  const [slideToShow, setSlideToShow] = useState(0);
  const { handleZip } = useDownload();

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
          <div
            className={cls.swiperLayout}
            onClick={() => setIsShowCarousel(false)}
          ></div>
          <Swiper
            onSwiper={(swiper) => {
              setSwiper(swiper);
              swiper.slideTo(slideToShow, 0);
            }}
            modules={[Navigation, Pagination]}
            loopAddBlankSlides={true}
            loop={true}
            slidesPerView={1}
            className={cls.swiper}
            navigation
            pagination={{ clickable: true }}
          >
            {frameData &&
              frameData.images.map((el, index) => (
                <SwiperSlide className={cls.swiperSlide} key={index}>
                  <Image
                    src={el.image}
                    width={1000}
                    height={650}
                    alt='Картинка кузова'
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
        <input type='text' className={cls.input} placeholder={placeholder} />
        <button onClick={searchFrame} className={cls.button}>
          {button}
        </button>
      </div>
      <div>
        {frameData && (
          <>
            <ul className={cls.imgsList}>
              {frameData.images.map((el, index) => (
                <li
                  onClick={() => {
                    setIsShowCarousel(true);
                    setSlideToShow(index);
                  }}
                  className={cls.imgsListItem}
                  key={index}
                >
                  <Image
                    src={el.image}
                    width={200}
                    height={130}
                    alt='Картинка кузова'
                  />
                </li>
              ))}
            </ul>
            <button onClick={() => handleZip(frameData.images)}>
              DOWNLOAD
            </button>
          </>
        )}
      </div>
    </div>
  );
};
