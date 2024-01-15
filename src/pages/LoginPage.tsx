import React from 'react'
import styled from 'styled-components';
import { StPageLayout } from '../styles/StPageLayout';

const LoginPage = () => {
  return (
    <StPageLayout backgroundcolor='#E8DECF'>
      <ContentWrapper>
        <LogoImage src='' alt='logo'/>
        LoginPage
      </ContentWrapper>
    </StPageLayout>
  )
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const LogoImage = styled.img`
  width: 300px;
  height: 150px;
  object-fit: contain;
`;

export default LoginPage;