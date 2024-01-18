import React, { useState } from "react";
import styled from "styled-components";
import UserStandbyList from "../components/common/UserStandbyList";
import { StBasicButton } from "../styles/BasicButton";
import TopLineButton from "../components/common/TopLineButton";

const WaitingRoomPage = () => {
  const [button, setButton] = useState<boolean>(false);

  const ButtonOnclick = () => {
    setButton(!button);
  };
  return (
    <GameRoomLayout>
      <TopLineButton />
      <div style={{ marginTop: "20px" }}>
        <UserStandbyList gamestart={false} />
      </div>
      <IdContainer>
        <IdBoxContainer>
          <Id>
            ID : 00001<Copy></Copy>
          </Id>
        </IdBoxContainer>
      </IdContainer>
      <LogoContainer>쿼카를 잡아랏!</LogoContainer>
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

const LogoContainer = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 800;
  margin: 90px 0px 330px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default WaitingRoomPage;
