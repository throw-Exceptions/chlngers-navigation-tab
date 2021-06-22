import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBannerAdList, BannerAdType } from 'src/api/chlngersAPI';
import styled from 'styled-components';
import BannerAd from './BannerAd';

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
      {bannerAdList && bannerAdList.map(
        bannerAd => <BannerAd bannerAd={bannerAd} key={bannerAd.id}/>
      )}
    </Container>
  );
};

export default BannerAdList;

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  padding: 2rem 1rem;
`;