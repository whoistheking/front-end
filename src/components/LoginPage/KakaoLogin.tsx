import React from 'react'
import styled from 'styled-components';
import Kakao from '../../assets/icons/kakao.webp';

const KakaoLogin = () => {

  const REST_API_KEY = ""; // 발급받은 키
  const REDIRECT_URI = "http://localhost:3000/login"; // Callback URL
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const KakaoLoginButtonHandler = () => {
    window.location.href = link; // 카카오 로그인 페이지 링크로 이동
  };

  return (
    <LoginButton
      color='#222020'
      backgroundcolor='#fee500'
      onClick={KakaoLoginButtonHandler}>
      <IconWrapper>
        <ButtonIcons src={Kakao} alt='google' />
      </IconWrapper>
      <ButtonText>
        카카오 로그인
      </ButtonText>
    </LoginButton>
  )
};

export const LoginButton = styled.button<{ backgroundcolor: string, color: string }>`
  width: 300px;
  height: 54px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  border: none;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  min-width: 80px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ButtonIcons = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const ButtonText = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: 'NanumBaReunHiPi';
  font-size: 22px;
  font-weight: 800;
  line-height: normal;
`;

export default KakaoLogin;