import React, { useState, useEffect } from 'react';
import { getBannerAdList, BannerAdType } from 'src/api/chlngersAPI';
import styled from 'styled-components';
import BannerAd from './BannerAd';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

const BannerAdList = () => {
  const [bannerAdList, setBannerAdList] = useState<Array<BannerAdType>>([]);

  const initialize = async () => {
    const list: Array<BannerAdType> = await getBannerAdList();
    setBannerAdList(list);
  };

  useEffect(
    () => {
      initialize();
    },
    []
  );

  return (
    <Container>
      <Swiper
        style={{padding: "0 1rem"}}
        slidesPerView={1}
        autoplay={true}
      >
      {bannerAdList && bannerAdList.map(
        (bannerAd: BannerAdType) => (
          <SwiperSlide key={bannerAd.id}>
            <BannerAd bannerAd={bannerAd}/>
          </SwiperSlide>
        )
      )}
      </Swiper>
    </Container>
  );
};

export default BannerAdList;

const Container = styled.div`
  width: 100%;
  padding: 2rem 0rem;
`;