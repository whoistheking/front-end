import React from 'react'
import styled from 'styled-components';
import Google from '../../assets/icons/google.webp';
import { IconWrapper, ButtonIcons, ButtonText } from './KakaoLogin';

const GoogleLogin = () => {
  return (
    <GoogleLoginButton>
      <IconWrapper>
        <ButtonIcons src={Google} alt='google' />
      </IconWrapper>
      <ButtonText>
        구글 로그인
      </ButtonText>
    </GoogleLoginButton>
  )
};

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

export default GoogleLogin;