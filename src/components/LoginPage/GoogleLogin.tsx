import React from "react";
import styled from "styled-components";
import Google from "../../assets/icons/google.webp";
import { IconWrapper, ButtonIcons, ButtonText } from "./KakaoLogin";

const GoogleLogin = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_KEY;
  const googleRedirectUrl = "http://localhost:3000/google/callback";
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${googleRedirectUrl}`;

  const loginOnclick = () => {
    window.location.href = googleAuthUrl;
  };
  
  return (
    <GoogleLoginButton>
      <IconWrapper>
        <ButtonIcons src={Google} alt="google" />
      </IconWrapper>
      <ButtonText onClick={loginOnclick}>구글 로그인</ButtonText>
    </GoogleLoginButton>
  );
};

const GoogleLoginButton = styled.button`
  width: 300px;
  height: 54px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background: linear-gradient(to bottom, #ffffff, #e9e9e9);
  border: none;
  cursor: pointer;

  @media screen and (max-width: 570px) {
    width: 240px;
    height: 50px;
    border-radius: 3px;
    gap: 24px;
  }
`;

export default GoogleLogin;
