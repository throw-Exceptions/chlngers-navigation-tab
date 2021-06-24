import React from 'react';
import styled from 'styled-components';

export enum Tabs {
  Home = '홈',
  Popular = '인기',
  New = '신규',
  Recommand = '추천'
};

type NavigationBarProps = {
  currentTab: Tabs,
  setCurrentTab: (tab: Tabs) => void
};

const NavigationBar = ({currentTab, setCurrentTab}: NavigationBarProps) => {
  const tabList: Array<Tabs> = [Tabs.Home, Tabs.Popular, Tabs.New, Tabs.Recommand];

  const handleClick = (e: any): void => {
    const clickedTab: Tabs = e.target.text;
    setCurrentTab(clickedTab);
  };

  return (
    <StyledNav>
      {tabList.map(
        (tab: Tabs) => (tab === currentTab) ? (
          <SelectedTab key={tab}>{tab}</SelectedTab>
        ) : (
          <Tab onClick={handleClick} key={tab}>{tab}</Tab>
        )
      )}
    </StyledNav>
  );
};

export default NavigationBar;

const StyledNav = styled.nav`
  height: 3rem;
  display: flex;
  align-items: flex-end;
`;

const Tab = styled.a`
  height: 2rem;
  font-size: 1rem;
  text-align: center;
  padding: 0 0.8rem;
  margin: 0 0.5rem;
`;

const SelectedTab = styled(Tab)`
  color: #FE6067;
  font-weight: 600;
  border-bottom: 3px solid #FE6067;
`;