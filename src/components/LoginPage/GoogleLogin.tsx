import React from "react";
import styled from "styled-components";
import Google from "../../assets/icons/google.webp";

import { IconWrapper, ButtonIcons, ButtonText } from "./KakaoLogin";

const GoogleLogin = () => {
  const googleClientId =
    "34087968194-hmd7ualh5ujpv7okb4gm5j0teabq4qb3.apps.googleusercontent.com";
  const googleRedirectUrl = "http://localhost:3000/google/callback";
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&redirect_uri=${googleRedirectUrl}`;

  const loginOnclick = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		googleClientId
		&googleRedirectUrl
    &googleAuthUrl
		&response_type=code
		&scope=email profile`;
  };

  return (
    <GoogleLoginButton onClick={loginOnclick}>
      <IconWrapper>
        <ButtonIcons src={Google} alt="google" />
      </IconWrapper>
      <ButtonText>구글 로그인</ButtonText>
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
