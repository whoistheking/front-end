import React from 'react'
import styled from 'styled-components';
import PokerCard from './PokerCard';

const MyCardList = () => {

    const cardArr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <MyCardListContainer>
        {cardArr?.map((item : number) => {
            return (
                <PokerCard key={item} mycard={true}/>
            )
        })}
    </MyCardListContainer>
  )
};

const MyCardListContainer = styled.div`
    width: 550px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    gap: 5px;

    @media screen and (max-width: 550px) {
        width: 96%;
    }
`;

const CardWrapper = styled.div`
    
`;

export default MyCardList;