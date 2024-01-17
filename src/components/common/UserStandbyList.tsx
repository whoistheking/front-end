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
    gap: 24px;

    @media screen and (max-width: 550px) {
        width: 96%;
    }
`;

const UserCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
`;

const ReadyStatusBox = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    user-select: none;
`;

const WaitStatusBox = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    color: #E30000;
    user-select: none;
`;

const UserNicknameBox = styled.div`
    width: 100%;
    height: 30px;
    border: 1px dotted #222020;
    background-color: #D2C0A7;
    font-size: 11px;
    font-weight: 700;
    line-height: 150%;
    word-break: break-word;
`;

const CardBox = styled.div`
    width: 100%;
    height: 90px;
    border: 1px dotted #222020;
    background-color: #DCCFBD;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default UserStandbyList;