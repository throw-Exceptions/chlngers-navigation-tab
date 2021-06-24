import React from 'react';
import styled from 'styled-components';
import Header from '@components/header/Header';
import HomeTab from '@components/home/HomeTab';
import { useState } from 'react';
import { Tabs } from '@components/header/NavigationBar';
import PopularTab from '@components/popular/PopularTab';
import NewTab from '@components/new/NewTab';
import RecommandTab from '@components/recommand/RecommandTab';
import UserProvider from 'src/contexts/UserContext';

const Home: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.Home);
  return (
    <UserProvider>
      <Container>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === Tabs.Home && <HomeTab/>}
        {currentTab === Tabs.Popular && <PopularTab/>}
        {currentTab === Tabs.New && <NewTab/>}
        {currentTab === Tabs.Recommand && <RecommandTab/>}
      </Container>
    </UserProvider>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;
