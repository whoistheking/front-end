import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StBasicButton } from "../styles/BasicButton";
import TopLineButton from "../components/common/TopLineButton";
import ProfileBG from "../assets/images/profile_background_image.webp";
import Profile from "../assets/icons/google.webp";
import TypeCode from "../components/MainPage/TypeCode";
import RoomModal from "../components/MainPage/RoomModal";
import { useQuery } from "react-query";
import { getProfileApi } from "../api/users";
import UserInfo from "../components/MainPage/UserInfo";

const MainPage = () => {

  const { isLoading, data, isError } = useQuery("getProfileQuery", () => getProfileApi(), {
    refetchOnWindowFocus: false
  });
  console.log("프로필 데이터", data);

  
  
  const [roomModalOpen, setRoomModalOpen] = useState<{
    isOpen: boolean,
    isCreate: boolean
  }>({
    isOpen: false,
    isCreate: false
  });
  const { isOpen, isCreate } = roomModalOpen;

  return (
    <MainPageLayout>
      <MainContainer>
        <TopLineButton />
        <ProfileContainer>
          <ProfileBackground src={ProfileBG} alt="" />
          <ProfileWrapper>
            <WantedTitle>
              WANTED
            </WantedTitle>
            <ProfileImageWrapper>
              <ProfileImage src={Profile} alt="" />
            </ProfileImageWrapper>
            <UserInfo />
          </ProfileWrapper>
        </ProfileContainer>
        <TypeCode />
        <RoomButtonWrapper>
          <RoomButton
            width="120px"
            height="40px"
            color="#FFFFFF"
            onClick={() => setRoomModalOpen({ ...roomModalOpen, isOpen: !isOpen, isCreate: false })}>
            게임 매칭
          </RoomButton>
          <RoomButton
            width="120px"
            height="40px"
            color="#FFFFFF"
            onClick={() => setRoomModalOpen({ ...roomModalOpen, isOpen: !isOpen, isCreate: true })}>
            방 생성
          </RoomButton>
        </RoomButtonWrapper>
      </MainContainer>
      {(isOpen)
        && <RoomModal
          roomModalOpen={roomModalOpen}
          setRoomModalOpen={setRoomModalOpen} />}
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

  @media screen and (max-width: 550px) {
    gap: 5px;
  }
`;

const WantedTitle = styled.div`
  font-family: 'NanumMyeongjoExtraBold';
  font-size: 46px;
  font-weight: 500;
  line-height: normal;
  color: #250808;
  letter-spacing: 5px;
  user-select: none;

  @media screen and (max-width: 550px) {
    font-size: 36px;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 120px;
  height: 110px;
  border: 2px solid #250808;
  border-radius: 8px;
  background-color: #FCFCFC;
  overflow: hidden;
  user-select: none;

  @media screen and (max-width: 550px) {
    width: 90px;
    height: 80px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RoomButtonWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 60px;

  @media screen and (max-width: 550px) {
    gap: 30px;
    height: 28%;
  }
`;

const RoomButton = styled(StBasicButton)`
  font-size: 24px;

  &:active {
    box-shadow: #74532280 0px 2px 2px 1px;
    font-size: 22px;
  }
`;

export default MainPage;
