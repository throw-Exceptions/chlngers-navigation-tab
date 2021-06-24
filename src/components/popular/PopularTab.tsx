import ChallengeCardList from '@components/common/ChallengeCardList';
import Screen from '@components/common/Screen';
import PopularCategoryList from '@components/popular/PopularCategoryList';
import React, { useState } from 'react';
import { ChallengeType, getAllPopularChallengeList, getPopularChallengeList } from 'src/api/chlngersAPI';
import FilterButton from './FilterButton';
import styled from 'styled-components';

const PopularTab: React.FC = () => {
  const [challengeList, setChallengeList] = useState<Array<ChallengeType>>([]);
  const handleChangeCategory = async (category: string) => {
    if (category === '전체') setChallengeList(await getAllPopularChallengeList(10));
    else setChallengeList(await getPopularChallengeList(category, 10));
  };
  return (
    <Screen>
      <PopularCategoryList onChangeCategory={handleChangeCategory} useAll={true} backgroundColor="#F6F6F6"/>
      <ButtonDiv>
        <FilterButton />
      </ButtonDiv>
      <ChallengeCardList list={challengeList}/>
    </Screen>
  );
};

export default PopularTab;

const ButtonDiv = styled.div`
  padding: 1rem 1.5rem 0 0;
  display: flex;
  flex-direction: row-reverse;
`;
