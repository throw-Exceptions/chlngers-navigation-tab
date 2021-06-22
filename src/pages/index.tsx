import React from 'react';
import styled from 'styled-components';
import Header from '@components/header/Header';
import HomeTab from '@components/home/HomeTab';

const Home: React.FC = () => {
  return (
    <Container>
      <Header/>
      <HomeTab/>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;
