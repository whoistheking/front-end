import React from 'react'
import styled from 'styled-components';
import UserStandbyList from '../components/common/UserStandbyList';
import TopLineButton from '../components/common/TopLineButton';
import ChoiceCardList from '../components/common/ChoiceCardList';
import MyCardList from '../components/common/MyCardList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/config/configureStore';
import { cardClick } from '../redux/module/CardChoiceSlice';

const GameRoomPage = () => {

  const dispatch = useDispatch();
  const isChoice = useSelector((state : RootState) => state.cardChoice.value);

  return (
    <GameRoomLayout>
      <TopLineButton />
      <UserStandbyList />
      <SelectStatusText>
        멍지니 님이 나 의 카드를 고르는 중...
      </SelectStatusText>
      <ChoiceCardList />
      <AllChoiceWrapper>
        {(isChoice)
          && <ChoiceContainer>
            <ChoiceText>
              정말 이 카드를 선택하시겠습니까?
            </ChoiceText>
            <ButtonWrapper>
              <Button color='#000E8E'>
                확인
              </Button>
              <Button onClick={() => dispatch(cardClick(undefined))} color='#FF6D6D'>
                취소
              </Button>
            </ButtonWrapper>
          </ChoiceContainer>}
        </AllChoiceWrapper>
      <MyCardList />
    </GameRoomLayout>
  )
};

const GameRoomLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SelectStatusText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #676767;
  margin-top: 8px;
  user-select: none;
`;

const AllChoiceWrapper = styled.div`
  width: 96%;
  height: 200px;
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
  font-size: 17px;
  font-weight: 400;
  line-height: normal;
  user-select: none;
  color: #676767;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const Button = styled.button<{ color : string }>`
  width: 70px;
  height: 30px;
  border-radius: 3px;
  border: none;
  color: #FFFFFF;
  background-color: ${(props) => props.color};
  user-select: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.color} 0 0 3px 0;
  }
`;

export default GameRoomPage;