import React from 'react';
import styled from 'styled-components';
import {FiChevronRight} from 'react-icons/fi';

type SectionTitleProps = {
  title: string,
  useLink: boolean,
  onClickLink?: () => void
};

const SectionTitle = ({title, useLink, onClickLink}: SectionTitleProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {useLink && <LinkButton onClick={onClickLink}><FiChevronRight/></LinkButton>}
    </Container>
  );
};

export default SectionTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 2rem;
  line-height: 2.4rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const LinkButton = styled.button`
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 1.7rem;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;