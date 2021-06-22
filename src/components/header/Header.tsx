import React from 'react'
import styled from 'styled-components'
import { ImageButton } from './Button'
import NavigationBar, { Tabs } from './NavigationBar'
import SearchPageLink from './SearchPageLink'

type HeaderProps = {
  currentTab: Tabs,
  setCurrentTab: (tab: Tabs) => void
};

const Header = ({currentTab, setCurrentTab}: HeaderProps) => {
  const handleClickBookmark = (): void => {
    console.log("go to bookmark page");
  };

  const handleClickCart = (): void => {
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
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </Container>
  )
}

export default Header

const Container = styled.header`
  position: fixed;
  top: 0;
  height: 7rem;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 1;
`;

const LinkSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;