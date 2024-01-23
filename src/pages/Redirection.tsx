import React, { useEffect } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Redirection = () => {

    const code = new URL(window.location.toString()).searchParams.get("code");
    const navigate = useNavigate();

    useEffect(() => {
      const loginTimer = setTimeout(() => {
        navigate("/main");
      }, 2000);
      
      return () => {
        clearTimeout(loginTimer);
      }
    }, []);

  return (
    <LoginLayout>
      로그인 중입니다.
    </LoginLayout>
  )
};

const LoginLayout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "NanumYeBbeunMinGyeongCe";
  font-size: 48px;
  font-weight: 700;
  line-height: normal;
  color: #222020;
`;

export default Redirection;