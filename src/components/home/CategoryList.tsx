import SectionTitle from '@components/common/SectionTitle';
import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const CategoryList: React.FC = () => {
  const categories = [
    {name: '다이어트', src: '/icons/category_diet.svg'},
    {name: '운 동', src: '/icons/category_exercise.svg'},
    {name: '공 부', src: '/icons/category_pencil.svg'},
    {name: '돌 봄', src: '/icons/category_family.svg'},
    {name: '생활습관', src: '/icons/category_calendar.svg'},
    {name: '취 미', src: '/icons/category_hobby.svg'},
    {name: '감정관리', src: '/icons/category_emotion.svg'},
    {name: '외국어', src: '/icons/category_alphabet.svg'},
    {name: '돈관리', src: '/icons/category_money.svg'},
    {name: '독 서', src: '/icons/category_book.svg'},
  ];

  return (
    <Container>
      <SectionTitle title="챌린지 카테고리" useLink={false} />
      <List>
        {categories.map(
          category => (
            <CategoryItem
              name={category.name}
              src={category.src}
              key={category.name} />
          )
        )}
      </List>
    </Container>
  );
};

export default CategoryList;

const Container = styled.div`
  padding: 0 1rem;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0rem;
`;