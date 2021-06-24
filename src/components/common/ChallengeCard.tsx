import React from 'react';
import styled from 'styled-components';
import { ChallengeType } from 'src/api/chlngersAPI';

type ChallengeCardProps = {
  challenge: ChallengeType
};

const ChallengeCard = ({challenge}: ChallengeCardProps) => {
  const remainDates = new Date(Number(new Date(challenge.startTime)) - Number(new Date())).getDate() - 1;
  return (
    <Container>
      <Background src={challenge.imageUrl}>
        <ParticipateNum>
          <Icon src="/icons/person_white.png" width={10} height={10}/>
          {challenge.participateNum}명
        </ParticipateNum>
      </Background>
      <Host>
        <Icon src={challenge.hostProfileImage} width={13} height={13} />
        {challenge.hostName}
      </Host>
      <Title>{challenge.title}</Title>
      <RemainDate>{remainDates > 0 ? `${remainDates}일 뒤 시작` : '오늘부터 시작'}</RemainDate>
      <BadgeList>
        <Badge>
          {challenge.certNumPerWeek > 0 ? (
            `주${challenge.certNumPerWeek}회`
          ) : (
            '기타'
          )}
        </Badge>
        <Badge>{challenge.periodWeek}주동안</Badge>
      </BadgeList>
    </Container>
  );
};

export default ChallengeCard;

const Container = styled.div`
  width: 10rem;
  height: 14rem;
  margin: 1rem 0.2rem;
`;

type BackgroundProps = {
  src: string
};

const Background = styled.div<BackgroundProps>`
  width: 100%;
  height: 7.5rem;
  border-radius: 0.3rem;
  background-image: url(${props => props.src});
  background-color: #ccc;
  display: flex;
  flex-direction: row-reverse;
`;

const ParticipateNum = styled.div`
  background: rgba(0, 0, 0, 0.5);
  font-size: 0.6rem;
  color: #fff;
  font-weight: 600;
  padding: 0.3rem 0.3rem;
  width: fit-content;
  height: fit-content;
  border-radius: 0.1rem;
  position: relative;
  top: 0.6rem;
  right: 0.6rem;
`;

type IconProps = {
  width: number,
  height: number
};

const Icon = styled.img<IconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-right: 0.3rem;
`;

const Host = styled.div`
  margin-top: 0.7rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #999;
  display: flex;
`;

const Title = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const RemainDate = styled.div`
  margin-top: 0.5rem;
  font-size: 0.6rem;
  color: #666;
`;

const BadgeList = styled.div`
  margin-top: 0.3rem;
  display: flex;
`;

const Badge = styled.div`
  padding: 0.2rem 0.4rem;
  font-size: 0.6rem;
  color: #666;
  background-color: #F9F9F9;
  margin-right: 0.3rem;
`;