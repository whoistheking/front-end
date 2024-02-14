import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getLoginApi } from '../api/users';

const Redirection = () => {

  const navigate = useNavigate();
  const { social } = useParams();
  const code = new URL(window.location.href).searchParams.get("code");
  
  const loadingDelay : string[] = ["로", "그", "인", "", "중", "입", "니", "다", ".", ".", "."];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getLoginApi(social, code);
        if (res.status === 200) {
          console.log("리스폰스 값", res);
          const responseData = res.data.result;
          localStorage.setItem("name", responseData.name);
          localStorage.setItem("token", responseData.token);
          navigate("/main");
        };
      } catch (error) {
        console.log("error", error);
      };
    };

    fetchData();

  }, []);

  return (
    <LoginLayout>
      {loadingDelay?.map((item : string, index : number) => {
        return (
          <MoveText key={index} delay={index * 0.1}>
            {item}
          </MoveText>
        )
      })} 
    </LoginLayout>
  )
};

const LoadingAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-40%);
  }
  100% {
    transform: translateY(0%);
  }
`;

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
  backdrop-filter: blur(5px);
  gap: 5px;
  user-select: none;
`;

const MoveText = styled.div<{ delay : number }>`
  font-family: "NanumYeBbeunMinGyeongCe";
  font-size: 48px;
  font-weight: 700;
  line-height: normal;
  color: #222020;
  animation: ${LoadingAnimation} 1.2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

export default Redirection;