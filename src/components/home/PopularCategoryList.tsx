import React, { useState } from 'react';
import styled from 'styled-components';

type PopularCategoryListProps = {
  onClick: (category: string) => void
};

const PopularCategoryList = ({onClick}: PopularCategoryListProps) => {
  const [currentCategory, setCurrentCategory] = useState<string>('건강');
  const popularCategoryList = [ '건강', '역량', '정서', '자산', '생활', '취미' ];

  const handleClick = (category: string) => {
    onClick(category);
    setCurrentCategory(category);
  };
  
  return (
    <Container>
      {popularCategoryList.map(
        category => (
          <CategoryItem 
            selected={category === currentCategory}
            onClick={() => handleClick(category)}
          >
            {category}
          </CategoryItem>
        )
      )}
    </Container>
  );
};

export default PopularCategoryList;

const Container = styled.div`
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
`;

type CategoryItemProps = {
  selected: boolean
};

const CategoryItem = styled.div<CategoryItemProps>`
  height: 1.8rem;
  line-height: 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  margin: 0 0.3rem;
  border-radius: 1rem;
  flex: 0 0 auto;
  background-color: ${props => props.selected ? '#FE6067' : 'transparent'}
  color: ${props => props.selected ? '#FFFFFF' : '#aaa'}
`;