import React from 'react'
import styled from 'styled-components';
import PokerCard from './PokerCard';

const ChoiceCardList = () => {

    const cardArr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <CardListContainer>
        {cardArr?.map((item : number) => {
            return (
                <PokerCard key={item} mycard={false}/>
            )
        })}
    </CardListContainer>
  )
};

const CardListContainer = styled.div`
    width: 550px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    @media screen and (max-width: 550px) {
        width: 96%;
    }
`;

export default ChoiceCardList;