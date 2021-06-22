import React from 'react';
import styled from 'styled-components';
import Header from '@components/header/Header';

const Home: React.FC = () => {
  return (
    <Container>
      <Header/>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;
