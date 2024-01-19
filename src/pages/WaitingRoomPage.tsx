import React, { useState } from "react";
import styled from "styled-components";
import UserStandbyList from "../components/common/UserStandbyList";
import { StBasicButton } from "../styles/BasicButton";
import TopLineButton from "../components/common/TopLineButton";
import LogoImage from "../assets/logo/mainlogoimage.webp";

const WaitingRoomPage = () => {
  const [button, setButton] = useState<boolean>(false);

  const ButtonOnclick = () => {
    setButton(!button);
  };

  const userArr : any = [ // 게임시작 페이지 기능 구현 작업 중 임의로 사용하는 값이야 신경쓰지말고 그대로 두고 있어 나중에 고칠게
    {id: 0, turn: true, user: true, name: "멍지니", count: [0, 1, 2]},
    {id: 1, turn: false, user: true, name: "춘식이", count: [0, 1, 2, 3, 4, 5, 6]},
    {id: 2, turn: false, user: true, name: "준짱잉", count: [0, 1, 2, 3, 4]},
    {id: 3, turn: false, user: true, name: "주호민동생", count: [0]},
    {id: 4, turn: false, user: false, name: null, count: null},
  ];

  return (
    <GameRoomLayout>
      <TopLineButton />
      <div style={{ marginTop: "20px" }}>
        <UserStandbyList gamestart={false} userArr={userArr}/>
      </div>
      <IdContainer>
        <IdBoxContainer>
          <Id>
            ID : 00001<Copy></Copy>
          </Id>
        </IdBoxContainer>
      </IdContainer>
      <LogoContainer src={LogoImage} alt=''/>
      <ButtonContainer>
        {button ? (
          <StBasicButton
            width="120px"
            height="40px"
            color="white"
            onClick={ButtonOnclick}
          >
            READY!
          </StBasicButton>
        ) : (
          <StBasicButton
            width="120px"
            height="40px"
            color="red"
            onClick={ButtonOnclick}
          >
            CANCEL
          </StBasicButton>
        )}
      </ButtonContainer>
    </GameRoomLayout>
  );
};

const GameRoomLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IdContainer = styled.div`
  width: 96%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const IdBoxContainer = styled.div`
  width: 212px;
  height: 40px;
  background-color: #4a2913;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const Id = styled.div`
  background-color: #c4ae8d;
  width: 180px;
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  padding: 0px 10px 0px 10px;
  font-weight: 700;
`;

const Copy = styled.div`
  background-color: #9b835f;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const LogoContainer = styled.img`
  width: 300px;
  height: 220px;
  object-fit: contain;
  margin: 40px 0px 120px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default WaitingRoomPage;
