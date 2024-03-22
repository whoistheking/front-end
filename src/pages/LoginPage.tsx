import React from 'react'
import styled, { keyframes } from 'styled-components';
import Logo from '../assets/logo/mainlogo_image.webp';
import KakaoLogin from '../components/LoginPage/KakaoLogin';
import NaverLogin from '../components/LoginPage/NaverLogin';
import GoogleLogin from '../components/LoginPage/GoogleLogin';

const LoginPage = () => {
  return (
    <ContentWrapper>
      <LogoImage src={Logo} alt='logo' />
      <ButtonWrapper>
        <KakaoLogin />
        <NaverLogin />
        <GoogleLogin />
      </ButtonWrapper>
    </ContentWrapper>
  )
};

const LogoAppear = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const ContentWrapper = styled.article`
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
  width: 400px;
  height: 300px;
  object-fit: contain;
  user-select: none;
  animation: ${LogoAppear} 0.5s forwards linear;

  @media screen and (max-width: 570px) {
    width: 250px;
    height: 200px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export default LoginPage;