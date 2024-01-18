import React, { useEffect } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Redirection = () => {

    const code = new URL(window.location.toString()).searchParams.get("code");
    const navigate = useNavigate();

    useEffect(() => {
      navigate("/main");
    }, []);

  return (
    <div>로그인 중입니다.</div>
  )
};

export default Redirection;