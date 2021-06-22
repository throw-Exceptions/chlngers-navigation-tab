import React from 'react'
import styled from 'styled-components'
import { ImageButton } from './Button'
import NavigationBar from './NavigationBar'
import SearchPageLink from './SearchPageLink'

const Header = () => {
  const handleClickBookmark = (e: any): void => {
    console.log("go to bookmark page");
  };

  const handleClickCart = (e: any): void => {
    console.log("go to cart page");
  };

  return (
    <Container>
      <LinkSection>
        <SearchPageLink/>
        <ImageButton 
          path="/icons/bookmark_black.png" 
          onClick={handleClickBookmark}
        />
        <ImageButton 
          path="/icons/cart.svg" 
          onClick={handleClickCart}
        />
      </LinkSection>
      <NavigationBar/>
    </Container>
  )
}

export default Header

const Container = styled.header`
  width: 100%;
  border-bottom: 1px solid #eee;
`;

const LinkSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;