import React from 'react'
import styled from 'styled-components';
import Naver from '../../assets/icons/naver.webp';
import { LoginButton, IconWrapper, ButtonIcons, ButtonText } from './KakaoLogin';

const NaverLogin = () => {

  const NAVER_CLIENT_ID = "";
  const REDIRECT_URI = "http://localhost:3000/login/social";
  const STATE = "flase";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`

  const NaverLoginButtonHandler = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <LoginButton
      color='#FFFFFF'
      backgroundcolor='#02c75a'
      onClick={NaverLoginButtonHandler}>
      <IconWrapper>
        <ButtonIcons src={Naver} alt='google' />
      </IconWrapper>
      <ButtonText>
        네이버 로그인
      </ButtonText>
    </LoginButton>
  )
};

export default NaverLogin;