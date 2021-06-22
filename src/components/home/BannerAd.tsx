import React from 'react';
import { BannerAdType } from 'src/api/chlngersAPI';
import styled from 'styled-components';

type BannerAdProps = {
  bannerAd: BannerAdType
};

type ContainerProps = {
  backgroundUrl: string
};

const BannerAd = ({
  bannerAd
}: BannerAdProps) => {
  const remainDates = new Date(Number(new Date(bannerAd.startDate)) - Number(new Date())).getDate() - 1
  return (
    <Container backgroundUrl={bannerAd.backgroundImageUrl}>
      <Title>{bannerAd.title}</Title>
      <Description>{bannerAd.description}</Description>
      <Info>
        <Icon src="/icons/person_white.png"/>
        {bannerAd.participateNum}명 참가
        · {remainDates > 0 ? `${remainDates}일 뒤 시작` : '오늘 시작'}
        {bannerAd.maxParticipateNum && ` · 선착순 ${bannerAd.maxParticipateNum - bannerAd.participateNum}명 남음`}
      </Info>
      <TagList>
        <Tag>{bannerAd.category}</Tag>
        <Tag>{bannerAd.periodWeek}주동안</Tag>
      </TagList>
    </Container>
  );
};

export default BannerAd;

const Container = styled.div<ContainerProps>`
  background-image: url(${(props: any) => props.backgroundUrl});
  background-size: cover;
  width: calc(100% - 0.5rem);
  height: 12rem;
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin: 0 0.25rem;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 1.3rem;
`;

const Description = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const Info = styled.div`
  background: rgba(0, 0, 0, 0.5);
  font-size: 0.7rem;
  color: #fff;
  font-weight: 600;
  padding: 0.3rem 0.3rem;
  margin-top: 1.5rem;
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: 0.1rem;
`;

const Icon = styled.img`
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.3rem;
`;

const TagList = styled.div`
  display: flex;
`;

const Tag = styled.div`
  background-color: #fff;
  color: #000;
  font-size: 0.8rem;
  margin: 0.3rem 0.3rem 0 0;
  padding: 0.5rem;
  line-height: 0.8rem;
  border-radius: 0.1rem;
`;