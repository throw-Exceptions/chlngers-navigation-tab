import React from 'react';
import styled from 'styled-components';

type ImageButtonProps = {
  path: string,
  onClick: (e: any) => void,
}

export const ImageButton = ({path, onClick}: ImageButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImg src={path}/>
    </StyledButton>
  )
};

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  width: 2rem;
  height: 1.8rem;
  padding: 0;
  margin-right: 0.8rem;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;