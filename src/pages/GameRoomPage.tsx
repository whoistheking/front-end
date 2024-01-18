import React, { useState } from "react";
import styled from "styled-components";
import UserStandbyList from "../components/common/UserStandbyList";
import TopLineButton from "../components/common/TopLineButton";
import ChoiceCardList from "../components/common/ChoiceCardList";
import MyCardList from "../components/common/MyCardList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configureStore";
import { cardClick } from "../redux/module/CardChoiceSlice";

const GameRoomPage = () => {
  const dispatch = useDispatch();
  const isChoice = useSelector((state: RootState) => state.cardChoice.value);

  // const [getCard, setGetCard] = useState<{
  //   isget: boolean,
  //   cardvalue: number | undefined
  // }>({
  //   isget: false,
  //   cardvalue: undefined
  // });

  return (
    <GameRoomLayout>
      <TopLineButton />
      <UserStandbyList gamestart={true} />
      <SelectStatusTextWrapper>
        <SelectStatusText>
          <UserContent>멍지니</UserContent>
          님이
          <UserContent>나</UserContent>의 카드를 고르는 중...
        </SelectStatusText>
      </SelectStatusTextWrapper>
      <ChoiceCardList />
      <AllChoiceWrapper>
        {isChoice && (
          <ChoiceContainer>
            <ChoiceText>정말 이 카드를 선택하시겠습니까?</ChoiceText>
            <ButtonWrapper>
              <Button color="#000E8E">확인</Button>
              <Button
                onClick={() => dispatch(cardClick(undefined))}
                color="#FF6D6D"
              >
                취소
              </Button>
            </ButtonWrapper>
          </ChoiceContainer>
        )}
      </AllChoiceWrapper>
      <MyCardList />
    </GameRoomLayout>
  );
};

const GameRoomLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SelectStatusTextWrapper = styled.div`
  height: 20px;
  margin-top: 8px;
`;

const SelectStatusText = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: #676767;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const UserContent = styled.div`
  font-size: 17px;
  font-weight: 700;
  line-height: normal;
  color: #222020;
`;

const AllChoiceWrapper = styled.div`
  width: 96%;
  height: 80px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ChoiceText = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  user-select: none;
  color: #676767;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Button = styled.button<{ color: string }>`
  width: 70px;
  height: 30px;
  border-radius: 3px;
  border: none;
  color: #ffffff;
  background-color: ${(props) => props.color};
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  user-select: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.color} 0 0 3px 0;
    color: #e9e9e9;
    font-weight: 500;
  }
`;

export default GameRoomPage;
