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
import { handleZip } from '@/utils/imgDownloader/imgDownloader';
import { ITranslationsTypes } from '@/app/[locale]/tracking/page';
import SearchVector from '@/public/images/vectors/search.png';

interface ITrackingSearchProps {
  className?: string;
  translations: ITranslationsTypes;
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
  translations: {
    title,
    placeholder,
    button,
    frameName,
    frameNumber,
    onTheWay,
    sailingDate,
    status,
    waiting,
    download,
  },
}: ITrackingSearchProps) => {
  const [frameData, setFrameData] = useState<IFrameData | null>(null);
  const [isShowCarousel, setIsShowCarousel] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [swiper, setSwiper] = useState<any>();
  const [slideToShow, setSlideToShow] = useState(0);

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

  const getFrameStatus = () => {
    let flag;

    if (frameData) {
      const sailingDate = new Date(frameData.SailingOnOrAbout);
      const nowDate = new Date();
      flag = sailingDate > nowDate;
    }

    return flag;
  };

  const isFrameSailing = getFrameStatus();

  return (
    <div className={classNames(cls.trackingSearch, {}, [className])}>
      {isShowCarousel && (
        <div>
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
                    className={cls.swiperImg}
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
      <div className={cls.searchBlock}>
        <input type="text" className={cls.input} placeholder={placeholder} />
        <button onClick={searchFrame} className={cls.button}>
          <p className={cls.btnText}>{button}</p>
          <Image
            className={cls.btnImage}
            src={SearchVector}
            alt="Картинка поиска"
          />
        </button>
      </div>
      <div>
        {frameData && (
          <div className={cls.infoBlock}>
            <ul className={cls.frameInfo}>
              <li className={cls.frameInfoItem}>
                <p className={cls.frameItemTitle}>{frameNumber}</p>
              </li>
              <li className={cls.frameInfoItem}>
                <p className={cls.frameItemTitle}>{frameName}</p>
              </li>
              <li className={cls.frameInfoItem}>
                <p className={cls.frameItemTitle}>{sailingDate}</p>
              </li>
              <li className={cls.frameInfoItem}>
                <p className={cls.frameItemTitle}>{status}</p>
              </li>
            </ul>
            <ul className={cls.frameInfo}>
              <li className={cls.frameInfoItem}>
                <p className={cls.frameItemValue}>{frameData.FlightNumber}</p>
              </li>
              <li className={cls.frameInfoItem}>
                <p className={cls.frameItemValue}>
                  {frameData.NameOfTheVessel}
                </p>
              </li>
              <li className={cls.frameInfoItem}>
                <p className={cls.frameItemValue}>
                  {frameData.SailingOnOrAbout.substring(0, 10)}
                </p>
              </li>
              <li className={cls.frameInfoItem}>
                <p className={cls.frameItemValue}>
                  {isFrameSailing ? waiting : onTheWay}
                </p>
              </li>
            </ul>
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
                    className={cls.image}
                    src={el.image}
                    width={200}
                    height={130}
                    alt="Картинка кузова"
                  />
                </li>
              ))}
            </ul>
            <button
              className={cls.downloadBtn}
              onClick={() => handleZip(frameData.images)}
            >
              {download}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
