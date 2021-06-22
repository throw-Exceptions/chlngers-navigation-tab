import React from 'react'
import styled from 'styled-components'

const SearchPageLink: React.FC = () => {
  const handleClick = () => {
    console.log("go to search page")
  }
  return (
    <Container
      onClick={handleClick}
    >
      <StyledImg src="/icons/search_black.png"/>
      어떤 습관을 가지고 싶으신가요?
    </Container>
  )
}

export default SearchPageLink

const Container = styled.div`
  background-color: #eee;
  font-size: 0.7rem;
  color: #555;
  height: 2rem;
  width: 100%;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  margin: 1rem;
`;

const StyledImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.5rem;
`;
