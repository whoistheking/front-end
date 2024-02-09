import React, { useEffect } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getLoginApi } from '../api/users';

const Redirection = () => {

    const navigate = useNavigate();
    const { social } = useParams();
    const code = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
      console.log(code);
      console.log(social);
      const fetchData = async () => {
        try {
          const res = await getLoginApi(social, code);
          console.log("로그인 데이터", res);
          navigate("/main");
        } catch (error) {
          console.log("error", error);
        };
      };

      fetchData();
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