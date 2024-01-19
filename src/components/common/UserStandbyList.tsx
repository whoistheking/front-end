import React from 'react'
import styled from 'styled-components';

interface UserStandbyListProps {
    gamestart: boolean;
};

const UserStandbyList : React.FC<UserStandbyListProps> = ({ gamestart }) => {

    const userArr : any = [0, 1, 2, 3, 4];

  return (
    <UserListContainer>
        {userArr?.map((item : any) => {
            return (
                <UserCardContainer key={item}>
                    {(gamestart)
                        ? <WaitStatusBox>
                            Turn
                        </WaitStatusBox>
                        : <ReadyStatusBox>
                            Ready!
                        </ReadyStatusBox>}
                    <UserNicknameBox>
                        UserStandbyList
                    </UserNicknameBox>
                    <CardBox>
                        
                    </CardBox>
                </UserCardContainer>
            )
        })}
    </UserListContainer>
  )
};

const UserListContainer = styled.div`
    width: 550px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 1600px) {
        gap: 24px;
    }

    @media screen and (max-width: 550px) {
        width: 96%;
        gap: 8px;
    }
`;

const UserCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
`;

export const ReadyStatusBox = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    user-select: none;

    @media screen and (max-width: 550px) {
        font-size: 14px;
        font-weight: 600;
    }
`;

const WaitStatusBox = styled(ReadyStatusBox)`
    color: #E30000;
`;

const UserNicknameBox = styled.div`
    width: 100%;
    height: 25px;
    border: 1px dotted #222020;
    background-color: #D2C0A7;
    font-size: 11px;
    font-weight: 700;
    line-height: 100%;
    word-break: break-word;
    padding-top: 5px;

    @media screen and (max-width: 550px) {
        height: 15px;
        font-size: 8px;
    }
`;

const CardBox = styled.div`
    width: 100%;
    height: 90px;
    border: 1px dotted #222020;
    background-color: #DCCFBD;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1600px) {
        height: 80px;
    }

    @media screen and (max-width: 550px) {
        height: 66px;
    }
`;

export default UserStandbyList;