import React from 'react'
import styled from 'styled-components';
import Naver from '../../assets/icons/naver.webp';
import { LoginButton, IconWrapper, ButtonIcons, ButtonText } from './KakaoLogin';

const NaverLogin = () => {
  return (
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
  )
};

export default NaverLogin;