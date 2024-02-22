import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const UserInfo = () => {

    const [expPoint, setExpPoint] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (expPoint >= 80) return;
            setExpPoint(expPoint + 1);
        }, 10);

        return () => clearInterval(interval);
    }, [expPoint]);

    return (
        <UserInfoWrapper>
            <UserTopLaneBox>
                LV.10
                <UserNickname>
                    멍지니
                </UserNickname>
            </UserTopLaneBox>
            <UserEXPPointBack>
                <ExpPoint width={expPoint} />
            </UserEXPPointBack>
            <UserBottomLaneBox>
                <Text>
                    EXP
                </Text>
                <Text>
                    {expPoint}/100
                </Text>
            </UserBottomLaneBox>
        </UserInfoWrapper>
    )
};

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 240px;

  @media screen and (max-width: 550px) {
    gap: 3px;
    width: 190px;
  }
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

  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;

const UserNickname = styled.div`
  font-size: 20px;
  font-weight: 800;
  line-height: normal;

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
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

  @media screen and (max-width: 550px) {
    height: 4px;
  }
`;

const ExpPoint = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 10px;
  border-radius: 10px;
  background-color: #250808;
  box-shadow: #b96e6ec8 0px 0px 4px 2px;
  transition: all 0.01;

  @media screen and (max-width: 550px) {
    height: 8px;
  }
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

  @media screen and (max-width: 550px) {
    font-size: 10px;
  }
`;

export default UserInfo;