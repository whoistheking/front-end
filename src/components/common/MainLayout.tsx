import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Banner from './Banner';
import Background from '../../assets/images/background_image.webp';

const MainLayout = () => {
  return (
    <MainLayoutContainer>
      <MainContentWrapper>
        <Banner />
        <PageLayout>
          <BackgroundImage src={Background} alt=''/>
          <PageInWrapper>
            <Outlet />
          </PageInWrapper>
        </PageLayout>
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
  font-family: "Pretendard";
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

const PageLayout = styled.div`
  min-width: 570px;
  height: 100%;
  overflow-y: auto;
  position: relative;

  @media screen and (max-width: 570px) {
    min-width: 100%;
  }
`;

const PageInWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`;

export default MainLayout;