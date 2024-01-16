import React from 'react'
import styled from 'styled-components';

const UserStandbyList = () => {
  return (
    <UserListContainer>
        <UserCardContainer>
            <ReadyStatusBox>
                Ready!
            </ReadyStatusBox>
            <UserNicknameBox>
                UserStandbyList
            </UserNicknameBox>
            <CardBox>
                
            </CardBox>
        </UserCardContainer>
        <UserCardContainer>
            <ReadyStatusBox>
                Ready!
            </ReadyStatusBox>
            <UserNicknameBox>
                UserStandbyList
            </UserNicknameBox>
            <CardBox>
                
            </CardBox>
        </UserCardContainer>
        <UserCardContainer>
            <ReadyStatusBox>
                Ready!
            </ReadyStatusBox>
            <UserNicknameBox>
                UserStandbyList
            </UserNicknameBox>
            <CardBox>
                
            </CardBox>
        </UserCardContainer>
        <UserCardContainer>
            <ReadyStatusBox>
                Ready!
            </ReadyStatusBox>
            <UserNicknameBox>
                UserStandbyList
            </UserNicknameBox>
            <CardBox>
                
            </CardBox>
        </UserCardContainer>
        <UserCardContainer>
            <ReadyStatusBox>
                Ready!
            </ReadyStatusBox>
            <UserNicknameBox>
                멍지니
            </UserNicknameBox>
            <CardBox>
                
            </CardBox>
        </UserCardContainer>
    </UserListContainer>
  )
};

const UserListContainer = styled.div`
    width: 96%;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 18px;
`;

const UserCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

const ReadyStatusBox = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
`;

const UserNicknameBox = styled.div`
    width: 70px;
    height: 30px;
    border: 1px dotted #222020;
    background-color: #D2C0A7;
    font-size: 11px;
    font-weight: 700;
    line-height: normal;
    word-break: break-word;
`;

const CardBox = styled.div`
    width: 58px;
    height: 77px;
    border: 1px dotted #222020;
    background-color: #DCCFBD;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default UserStandbyList;