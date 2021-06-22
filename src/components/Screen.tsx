import React from 'react';
import styled from 'styled-components';

type ScreenProps = {
  children: React.ReactNode
};

const Screen = ({children}: ScreenProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Screen;

const Container = styled.section`
  position: absolute;
  top: 7rem;
  z-index: 0;
  width: 100%;
`;