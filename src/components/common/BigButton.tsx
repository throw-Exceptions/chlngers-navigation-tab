import React from 'react';
import styled from 'styled-components';

type BigButtonProps = {
  title: string,
  onClick: () => void
};

const BigButton = ({title, onClick}: BigButtonProps) => {
  return (
    <Container>
      <Button onClick={onClick}>
        {title}
      </Button>
    </Container>
  );
};

export default BigButton;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: transparent;
  width: calc(100% - 2rem);
  height: 3rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  color: #666;
  font-weight: 700;
  font-size: 0.9rem;
`;