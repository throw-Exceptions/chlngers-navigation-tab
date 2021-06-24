import BigButton from '@components/common/BigButton';
import ChallengeCardList from '@components/common/ChallengeCardList';
import SectionTitle from '@components/common/SectionTitle';
import React, { useEffect, useState } from 'react';
import { ChallengeType, getMyChallengeList } from 'src/api/chlngersAPI';
import styled from 'styled-components';

const TryAgainList = () => {
  const [challengeList, setChallengeList] = useState<Array<ChallengeType>>([]);

  const handleClickArrow = (): void => {
    console.log("move to my challenge list");
  };

  const handleClickButton = () => {
    console.log("move to my challenge list");
  };

  useEffect(
    () => {
      const initialize = async () => setChallengeList(
        await getMyChallengeList(4)
      );
      initialize();
    },
    []
  );

  return (
    <Container>
      <TitleDiv>
        <SectionTitle title="다시 도전해 볼까요?" useLink={true} onClickLink={handleClickArrow}/>
      </TitleDiv>
      <ChallengeCardList list={challengeList}/>
      <BigButton
        title="다시 도전! 챌린지 전체 보기"
        onClick={handleClickButton}
      />
    </Container>
  );
};

export default TryAgainList;

const Container = styled.div`
  margin-top: 3rem;
`;

const TitleDiv = styled.div`
  padding: 0rem 1rem;
`;