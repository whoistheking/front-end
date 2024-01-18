import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/logo/mainlogoimage.webp';
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
  width: 400px;
  height: 300px;
  object-fit: contain;
  user-select: none;
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