import React from 'react'
import styled from 'styled-components';
import PokerCard from '../common/PokerCard';

// interface ChoiceCardListProps {
//     getCard: {
//         isget: boolean,
//         cardvalue: number | undefined
//     };
// };

const ChoiceCardList = () => {

    const cardArr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <CardListContainer>
        {cardArr?.map((item : number, index : number) => {
            return (
                <PokerCard
                    key={item}
                    mycard={false}
                    item={item}
                    index={index}/>
            )
        })}
    </CardListContainer>
  )
};

const CardListContainer = styled.div`
    width: 550px;
    height: 280px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    @media screen and (max-width: 1600px) {
        height: 160px;
    }

    @media screen and (max-width: 550px) {
        width: 96%;
        height: 180px;
        gap: 2px;
    }
`;

export default ChoiceCardList;