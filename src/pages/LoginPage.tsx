import React from 'react'
import styled from 'styled-components';
import { StPageLayout } from '../styles/StPageLayout';
import Logo from '../assets/logo/logo_example.png';

const LoginPage = () => {
  return (
    <StPageLayout backgroundcolor='#E8DECF'>
      <ContentWrapper>
        <LogoImage src={Logo} alt='logo'/>
        <ButtonWrapper>
          <Button color='#000000' backgroundcolor='#fffb00'>
            카카오톡
          </Button>
          <Button color='#FFFFFF' backgroundcolor='#00ff15'>
            네이버
          </Button>
          <Button color='#FFFFFF' backgroundcolor='#00a2ff'>
            구글
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </StPageLayout>
  )
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  user-select: none;
`;

const LogoImage = styled.img`
  width: 300px;
  height: 150px;
  object-fit: contain;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button<{ backgroundcolor : string, color : string }>`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundcolor};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: ${(props) => props.color};
  cursor: pointer;
`;

export default LoginPage;