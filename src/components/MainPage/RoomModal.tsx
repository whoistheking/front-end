import React, { useRef, useState } from "react";
import styled from "styled-components";
import { StBasicButton } from "../../styles/BasicButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/config/configureStore";
import { connectedSocket } from "../../redux/module/Connect";
import { useNavigate } from "react-router-dom";

interface RoomModalProps {
  roomModalOpen: {
    isOpen: boolean;
    isCreate: boolean;
  };
  setRoomModalOpen: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      isCreate: boolean;
    }>
  >;
}

const RoomModal: React.FC<RoomModalProps> = ({
  roomModalOpen,
  setRoomModalOpen,
}) => {

  const navigate = useNavigate();
  const { isCreate } = roomModalOpen;

  const onClickModalCloseHandler = () => {
    setRoomModalOpen({ ...roomModalOpen, isOpen: false });
  };

  const isCreateModal = () => {
    if (isCreate) {
      return (
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ContentWrapper>
            <Content>새로운 방을 생성하시겠습니까?</Content>
            <Content>
              친구와 함께 하거나 랜덤 매칭된 유저들과 게임을 즐길 수 있어요!
            </Content>
            <Content>
              생성된 방에서 부여받은 초대코드를 친구에게 알려주세요.
            </Content>
          </ContentWrapper>
          <ButtonWrapper>
            <ModalButton
              width="120px"
              height="40px"
              color="#FFFFFF"
              onClick={() => navigate("/gameroom/waiting")}>
              생성하기
            </ModalButton>
            <ModalButton
              width="90px"
              height="40px"
              color="#FFFFFF"
              onClick={onClickModalCloseHandler}
            >
              닫기
            </ModalButton>
          </ButtonWrapper>
        </ModalContainer>
      );
    } else {
      return (
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ContentWrapper>
            <Content>랜덤으로 매칭을 시작합니다.</Content>
          </ContentWrapper>
          <ButtonWrapper>
            <ModalButton width="120px" height="40px" color="#FFFFFF">
              매칭 시작
            </ModalButton>
            <ModalButton
              width="90px"
              height="40px"
              color="#FFFFFF"
              onClick={onClickModalCloseHandler}
            >
              닫기
            </ModalButton>
          </ButtonWrapper>
        </ModalContainer>
      );
    }
  };

  return (
    <ModalBackGroundContainer onClick={onClickModalCloseHandler}>
      {isCreateModal()}
    </ModalBackGroundContainer>
  );
};

const ModalBackGroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000037;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e8decf;
  border-radius: 5px;
  box-shadow: #22202080 0px 0px 8px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 50px;
`;

const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Content = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  color: #222020;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ModalButton = styled(StBasicButton)`
  font-size: 22px;

  &:active {
    box-shadow: #74532280 0px 2px 2px 1px;
    font-size: 20px;
  }
`;

export default RoomModal;
