import React from 'react'
import styled from 'styled-components';
import UserStandbyList from '../components/common/UserStandbyList';
import TopLineButton from '../components/common/TopLineButton';
import ChoiceCardList from '../components/common/ChoiceCardList';
import MyCardList from '../components/common/MyCardList';

const GameRoomPage = () => {
  return (
    <GameRoomLayout>
      <TopLineButton />
      <UserStandbyList />
      <SelectStatusText>
        멍지니 님이 나의 카드를 고르는 중...
      </SelectStatusText>
      <ChoiceCardList />
      <MyCardList />
    </GameRoomLayout>
  )
};

const GameRoomLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const SelectStatusText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #676767;
  margin-top: 8px;
`;

export default GameRoomPage;