import React from 'react'
import styled from 'styled-components';
import CardBack from '../../assets/images/card_back_image.webp';

interface UserStandbyListProps {
    gamestart: boolean;
    userArr: any;
};

const UserStandbyList: React.FC<UserStandbyListProps> = ({ gamestart, userArr }) => {

    const gameStartChange = () => {
        if (gamestart) {
            return (
                userArr?.map((item: any) => {
                    return (
                        <UserCardContainer
                            key={item.id}>
                            {(item?.turn)
                                ? <WaitStatusBox>
                                    Turn
                                </WaitStatusBox>
                                : <WaitStatusBox>

                                </WaitStatusBox>}
                            <UserNicknameWrapper>
                                <UserNickname>
                                    {item?.name}
                                </UserNickname>
                            </UserNicknameWrapper>
                            <CardBox>
                                <UserCardListWrapper>
                                    {(item?.count)
                                        && item?.count.map((card: number | null) => {
                                            return (
                                                <UserCardList>
                                                    <UserCard>
                                                        <CardImage src={CardBack} alt='' />
                                                        <CardCount>
                                                            {item?.count.length}
                                                        </CardCount>
                                                    </UserCard>
                                                </UserCardList>
                                            )
                                        })}
                                </UserCardListWrapper>
                            </CardBox>
                        </UserCardContainer>
                    )
                })
            )
        } else {
            return (
                userArr?.map((item: any) => {
                    return (
                        <UserCardContainer
                            key={item.id}>
                            {(item?.user)
                                ? <ReadyStatusBox>
                                    Ready!
                                </ReadyStatusBox>
                                : <ReadyStatusBox>
                                </ReadyStatusBox>}
                            <UserNicknameWrapper>
                                <UserNickname>
                                    {item?.name}
                                </UserNickname>
                            </UserNicknameWrapper>
                            <CardBox>
                                <UserCardListWrapper>

                                </UserCardListWrapper>
                            </CardBox>
                        </UserCardContainer>
                    )
                })
            )
        };
    };

    return (
        <UserListContainer>
            {gameStartChange()}
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
    height: 18px;

    @media screen and (max-width: 550px) {
        font-size: 14px;
        font-weight: 600;
    }
`;

const WaitStatusBox = styled(ReadyStatusBox)`
    color: #E30000;
`;

const UserNicknameWrapper = styled.div`
    width: 100%;
    height: 25px;
    border: 1px dotted #222020;
    background-color: #D2C0A7;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserNickname = styled.div`
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
    width: 68%;
    height: 80px;
    position: relative;
    transition: all 0.3s;
    display: flex;
    flex-direction: row-reverse;
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
    width: 66px;
    height: 88px;
    /* background-color: #ffadbb; */
    border-radius: 3px;
    border: 1px solid #222020;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 1600px) {
        width: 55px;
        height: 73px;
    }

    @media screen and (max-width: 550px) {
        width: 42px;
        height: 56px;
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    user-select: none;
`;

const CardCount = styled.div`
    font-size: 30px;
    font-weight: 500;
    line-height: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`;

export default UserStandbyList;