import React from 'react'
import styled from 'styled-components';

interface UserStandbyListProps {
    gamestart: boolean;
};

const UserStandbyList : React.FC<UserStandbyListProps> = ({ gamestart }) => {

    const userArr : any = [
        {id: 0, user: true, count: [0, 1, 2]},
        {id: 1, user: true, count: [0, 1, 2, 3, 4, 5, 6]},
        {id: 2, user: true, count: [0, 1, 2, 3, 4]},
        {id: 3, user: true, count: [0]},
        {id: 4, user: false, count: null},
    ];

  return (
    <UserListContainer>
        {userArr?.map((item : any) => {
            return (
                <UserCardContainer key={item.id}>
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
                        <UserCardListWrapper>
                            <UserCardList>
                                <UserCard>
                                    <CardCount>
                                        5
                                    </CardCount>
                                </UserCard>
                            </UserCardList>
                            <UserCardList>
                                <UserCard>
                                    <CardCount>
                                        5
                                    </CardCount>
                                </UserCard>
                            </UserCardList>
                            <UserCardList>
                                <UserCard>
                                    <CardCount>
                                        5
                                    </CardCount>
                                </UserCard>
                            </UserCardList>
                            <UserCardList>
                                <UserCard>
                                    <CardCount>
                                        5
                                    </CardCount>
                                </UserCard>
                            </UserCardList>
                            <UserCardList>
                                <UserCard>
                                    <CardCount>
                                        5
                                    </CardCount>
                                </UserCard>
                            </UserCardList>
                        </UserCardListWrapper>
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

const UserCardListWrapper = styled.div`
    width: 70%;
    height: 80px;
    position: relative;
    transition: all 0.3s;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    /* @media screen and (max-width: 1600px) {
        width: 55px;
        height: 73px;
    }

    @media screen and (max-width: 550px) {
        width: 42px;
        height: 56px;
    } */
`;

const UserCardList = styled.div`
    max-width: 3px;
`;

const UserCard = styled.div`
    width: 55px;
    height: 73px;
    background-color: #ffadbb;
    border-radius: 3px;
    border: 1px solid #222020;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardCount = styled.div`
    font-size: 30px;
    font-weight: 500;
    line-height: 100%;
`;

export default UserStandbyList;