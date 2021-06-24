import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type PopularCategoryListProps = {
  onChangeCategory: (category: string) => void,
  useAll: boolean,
  backgroundColor?: string,
};

const PopularCategoryList = ({onChangeCategory, useAll, backgroundColor}: PopularCategoryListProps) => {
  const popularCategoryList = useAll ? (
    [ '전체', '건강', '역량', '정서', '자산', '생활', '취미' ]
  ) : (
    [ '건강', '역량', '정서', '자산', '생활', '취미' ]
  );
  const [currentCategory, setCurrentCategory] = useState<string>(popularCategoryList[0]);

  const handleClick = (category: string) => setCurrentCategory(category);

  useEffect(
    () => {
      onChangeCategory(currentCategory);
    },
    [currentCategory]
  );

  return (
    <Container backgroundColor={backgroundColor}>
      {popularCategoryList.map(
        category => (
          <PopularCategoryItem
            selected={category === currentCategory}
            onClick={() => handleClick(category)}
            key={category}
          >
            {category}
          </PopularCategoryItem>
        )
      )}
    </Container>
  );
};

export default PopularCategoryList;

type ContainerProps = {
  backgroundColor?: string
};

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0.8rem 0 0.8rem 1rem;
  border-bottom: 1px solid #eee;
  background-color: ${props => props.backgroundColor || 'transparent'}
`;

type CategoryItemProps = {
  selected: boolean
};

const PopularCategoryItem = styled.div<CategoryItemProps>`
  height: 1.8rem;
  line-height: 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  margin: 0 0.3rem;
  border-radius: 1rem;
  flex: 0 0 auto;
  background-color: ${props => props.selected ? '#FE6067' : 'transparent'};
  color: ${props => props.selected ? '#FFFFFF' : '#aaa'};
`;