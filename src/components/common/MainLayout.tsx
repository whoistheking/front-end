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
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: beige;
  color: #222020;
`;

const MainContentWrapper = styled.div`
  width: 1050px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #39373A;
    border-radius: 5px;
        
    &:hover {
      background-color: #676568;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: #D5D4D4;
    border-radius: 5px;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: beige;
  border: 1px solid;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export default MainLayout;