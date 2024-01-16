import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/logo/logo_example.png';
import Kakao from '../assets/icons/kakao.webp';
import Naver from '../assets/icons/naver.webp';
import Google from '../assets/icons/google.webp';

const LoginPage = () => {
  return (
    <ContentWrapper>
      <LogoImage src={Logo} alt='logo' />
      <ButtonWrapper>
        <LoginButton
          color='#222020'
          backgroundcolor='#fee500'>
          <IconWrapper>
            <ButtonIcons src={Kakao} alt='google' />
          </IconWrapper>
          <ButtonText>
            카카오 로그인
          </ButtonText>
        </LoginButton>
        <LoginButton
          color='#FFFFFF'
          backgroundcolor='#02c75a'>
          <IconWrapper>
            <ButtonIcons src={Naver} alt='google' />
          </IconWrapper>
          <ButtonText>
            네이버 로그인
          </ButtonText>
        </LoginButton>
        <GoogleLoginButton>
          <IconWrapper>
            <ButtonIcons src={Google} alt='google' />
          </IconWrapper>
          <ButtonText>
            구글 로그인
          </ButtonText>
        </GoogleLoginButton>
      </ButtonWrapper>
    </ContentWrapper>
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

const LoginButton = styled.button<{ backgroundcolor: string, color: string }>`
  width: 300px;
  height: 54px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  border: none;
  cursor: pointer;
`;

const GoogleLoginButton = styled.button`
  width: 300px;
  height: 54px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: linear-gradient(to bottom, #FFFFFF, #e9e9e9);
  border: none;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  min-width: 80px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ButtonIcons = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const ButtonText = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: 'NanumBaReunHiPi';
  font-size: 20px;
  font-weight: 800;
  line-height: normal;
`;

const Test = styled.div`
  width: 100%;
  height: 1000px;
  background-color: transparent;
`;

export default LoginPage;