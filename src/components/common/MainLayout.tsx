import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Banner from './Banner';

const MainLayout = () => {
  return (
    <MainLayoutContainer>
      <MainContentWrapper>
        <Banner />
        <Outlet />
      </MainContentWrapper>
    </MainLayoutContainer>
  )
};

const MainLayoutContainer = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: beige;
  color: #222020;
`;

const MainContentWrapper = styled.div`
  width: 1140px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
`;

export default MainLayout;