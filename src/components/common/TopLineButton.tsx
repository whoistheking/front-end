import React from 'react'
import styled from 'styled-components';
import { BorderButton } from '../../styles/BorderButton';

const TopLineButton = () => {
  return (
    <TopLineButtonContainer>
      <BorderButton width='70px' height='30px'>
        Button
      </BorderButton>
      <BorderButton width='70px' height='30px'>
        Button
      </BorderButton>
    </TopLineButtonContainer>
  )
};

const TopLineButtonContainer = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;

  @media screen and (max-width: 550px) {
    width: 96%;
  }
`;

export default TopLineButton;