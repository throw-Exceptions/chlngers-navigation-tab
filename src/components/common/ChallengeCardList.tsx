import React from 'react';
import { ChallengeType } from 'src/api/chlngersAPI';
import styled from 'styled-components';
import ChallengeCard from './ChallengeCard';

type ChallengeCardListProps = {
  list: Array<ChallengeType>
};

const ChallengeCardList = ({list}: ChallengeCardListProps) => {
  return (
    <Container>
      {list.map(
        challenge => <ChallengeCard challenge={challenge} key={challenge.id} />
      )}
    </Container>
  );
};

export default ChallengeCardList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;