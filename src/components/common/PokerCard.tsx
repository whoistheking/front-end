import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { cardClick } from '../../redux/module/CardChoiceSlice';

interface PokerCardProps {
    mycard: boolean;
    item: any;
};

const PokerCard : React.FC<PokerCardProps> = ({ mycard, item }) => {

    const dispatch = useDispatch();

    const onClickCardChoiceHandler = () => {
        dispatch(cardClick(item));
    };

  return (
    <CardContainer onClick={onClickCardChoiceHandler} width='55px' height='73px'>
        <CardInnerBox>
            <FrontCard style={{transform: (mycard) ? "" : "rotateY(180deg)"}}>
                front
            </FrontCard>
            <BackCard style={{transform: (mycard) ? "rotateY(180deg)" : ""}}>

            </BackCard>
        </CardInnerBox>
    </CardContainer>
  )
};

const CardInnerBox = styled.div`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s;
`;

const CardContainer = styled.div<{ width : string, height : string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
    overflow: hidden;
    border: 1px solid #222020;
    border-radius: 5px;
    perspective: 1000px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s;
        transform: translateY(-10%) scale(105%);
    }
    
    /* &:hover ${CardInnerBox} {
        transform: rotateY(180deg);
    } */
`;

const FrontCard = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    background-color: #FFFFFF;
`;

const BackCard = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    background-color: pink;
`;

export default PokerCard;