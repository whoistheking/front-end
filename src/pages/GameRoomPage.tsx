import React from 'react'
import styled from 'styled-components';
import UserStandbyList from '../components/common/UserStandbyList';
import TopLineButton from '../components/common/TopLineButton';

const GameRoomPage = () => {
  return (
    <GameRoomLayout>
      <TopLineButton />
      <UserStandbyList />
      GameRoomPage
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

export default GameRoomPage;