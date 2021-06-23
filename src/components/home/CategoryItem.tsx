import React from 'react';
import styled from 'styled-components';

type CategoryItemProps = {
  src: string,
  name: string
};

const CategoryItem = ({src, name}: CategoryItemProps) => {
  const handleClick = (): void => {
    console.log(`click category: "${name}"`);

  };
  return (
    <Container onClick={handleClick}>
      <StyledImg src={src}/>
      <StyledText>{name}</StyledText>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

const StyledText = styled.div`
  padding-top: 0.5rem;
  font-size: 0.8rem;
`;
