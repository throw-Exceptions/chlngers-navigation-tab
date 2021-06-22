import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const NavigationBar = () => {
  const [currentTab, setCurrentTab] = useState<string>('홈');
  const tabList: Array<string> = ['홈', '인기', '신규', '추천'];

  const handleClick = (e: any): void => {
    const clickedTab: string = e.target.text;
    setCurrentTab(clickedTab);
  };

  return (
    <StyledNav>
      {tabList.map(
        (tab: string) => (tab === currentTab) ? (
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