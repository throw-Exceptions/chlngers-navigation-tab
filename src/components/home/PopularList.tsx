import BigButton from '@components/common/BigButton';
import ChallengeCardList from '@components/common/ChallengeCardList';
import SectionTitle from '@components/common/SectionTitle';
import React, { useState } from 'react';
import { ChallengeType, getPopularChallengeList } from 'src/api/chlngersAPI';
import styled from 'styled-components';
import PopularCategoryList from '../popular/PopularCategoryList';

const PopularList = () => {
  const [challengeList, setChallengeList] = useState<Array<ChallengeType>>([]);

  const handleClickArrow = (): void => {
    console.log("move to popular challenge tab");
  };

  const handleChangeCategory = async (category: string) => {
    const list: Array<ChallengeType> = await getPopularChallengeList(category, 4);
    setChallengeList(list);
  };

  const handleClickButton = () => {
    console.log("move to popular challenge tab");
  };

  return (
    <Container>
      <TitleDiv>
        <SectionTitle title="인기 챌린지" useLink={true} onClickLink={handleClickArrow}/>
      </TitleDiv>
      <PopularCategoryList onChangeCategory={handleChangeCategory} useAll={false}/>
      <ListDiv>
        <ChallengeCardList list={challengeList}/>
      </ListDiv>
      <BigButton
        title="인기 건강 챌린지 전체 보기"
        onClick={handleClickButton}
      />
    </Container>
  );
};

export default PopularList;

const Container = styled.div`
`;

const TitleDiv = styled.div`
  padding: 0rem 1rem;
`;

const ListDiv = styled.div`
`;