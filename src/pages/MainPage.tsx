import React from "react";
import styled from "styled-components";
import { StBasicButton } from "../styles/BasicButton";
import TopLineButton from "../components/common/TopLineButton";
import ProfileBG from "../assets/images/profile_background_image.webp";
import Profile from "../assets/icons/google.webp";
import TypeCode from "../components/MainPage/TypeCode";

const MainPage = () => {
  return (
    <MainPageLayout>
      <MainContainer>
        <TopLineButton />
        <ProfileContainer>
          <ProfileBackground src={ProfileBG} alt=""/>
          <ProfileWrapper>
            <WantedTitle>
              WANTED
            </WantedTitle>
            <ProfileImageWrapper>
              <ProfileImage src={Profile} alt=""/>
            </ProfileImageWrapper>
            <UserInfoWrapper>
              <UserTopLaneBox>
                LV.10
                <UserNickname>
                  멍지니
                </UserNickname>
              </UserTopLaneBox>
              <UserEXPPointBack>
                <ExpPoint width={80}/>
              </UserEXPPointBack>
              <UserBottomLaneBox>
                <Text>
                  EXP
                </Text>
                <Text>
                  80/100
                </Text>
              </UserBottomLaneBox>
            </UserInfoWrapper>
          </ProfileWrapper>
        </ProfileContainer>
        <TypeCode />
      <StBasicButton width="120px" height="40px" color="black">
        버튼
      </StBasicButton>
      </MainContainer>
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ProfileContainer = styled.div`
  width: 500px;
  height: 380px;
  position: relative;

  @media screen and (max-width: 500px) {
    width: 350px;
    height: 267px;
  }
`;

const ProfileBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-family: "Pretendard";
  color: #250808;
`;

const WantedTitle = styled.div`
  font-family: 'NanumMyeongjoExtraBold';
  font-size: 46px;
  font-weight: 500;
  line-height: normal;
  color: #250808;
  letter-spacing: 5px;
  user-select: none;
`;

const ProfileImageWrapper = styled.div`
  width: 120px;
  height: 110px;
  border: 2px solid #250808;
  border-radius: 8px;
  background-color: #FCFCFC;
  overflow: hidden;
  user-select: none;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 240px;
`;

const UserTopLaneBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

const UserNickname = styled.div`
  font-size: 20px;
  font-weight: 800;
  line-height: normal;
`;

const UserEXPPointBack = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 10px;
  border: 4px solid #D08239;
  background-color: #D08239;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ExpPoint = styled.div<{ width : number }>`
  width: ${(props) => props.width}%;
  height: 10px;
  border-radius: 10px;
  background-color: #250808;
  box-shadow: #b96e6ec8 0px 0px 4px 2px;
`;

const UserBottomLaneBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 600;
  line-height: 100%;
  color: #250808;
`;

export default MainPage;
