import React from 'react';
import styled from 'styled-components';

type FilterButtonProps = {
  onClick?: () => void
};

const FilterButton = ({onClick}: FilterButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Icon src="/icons/filter_inactive.png" />
      필터
    </Container>
  );
};

export default FilterButton;

const Container = styled.button`
  border: 1px solid #eee;
  border-radius: 0.2rem;
  width: 4.5rem;
  height: 2.3rem;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const Icon = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.3rem;
`;