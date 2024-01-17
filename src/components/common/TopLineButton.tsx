import React from 'react'
import styled from 'styled-components';
import { StBorderButton } from '../../styles/BorderButton';
import { useNavigate } from 'react-router-dom';

const TopLineButton = () => {

  const navigate = useNavigate();

  return (
    <TopLineButtonContainer>
      <StBorderButton width='70px' height='30px'>
        Button
      </StBorderButton>
      <StBorderButton
        width='70px'
        height='30px'
        onClick={() => navigate("/main")}>
        나가기
      </StBorderButton>
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