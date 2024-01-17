import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { cardClick } from '../../redux/module/CardChoiceSlice';
import { RootState } from '../../redux/config/configureStore';

interface PokerCardProps {
    mycard: boolean;
    item: any;
};

const PokerCard : React.FC<PokerCardProps> = ({ mycard, item }) => {

    const dispatch = useDispatch();
    const selectCard = useSelector((state : RootState) => state.cardChoice.value);

    const onClickCardChoiceHandler = () => {
        dispatch(cardClick(item));
    };

    const cardRender = () => {
        if (selectCard === item) {
            return (
                <SelectCardContainer onClick={onClickCardChoiceHandler} width='55px' height='73px'>
                    <CardInnerBox>
                        <FrontCard style={{transform: (mycard) ? "" : "rotateY(180deg)"}}>
                            front
                        </FrontCard>
                        <BackCard style={{transform: (mycard) ? "rotateY(180deg)" : ""}}>

                        </BackCard>
                    </CardInnerBox>
                </SelectCardContainer>
            )
        } else {
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
    };

  return (
    <div>
        {cardRender()}
    </div>
  )
};

const CardInnerBox = styled.div`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s;
`;

const SelectCardContainer = styled.div<{ width : string, height : string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
    overflow: hidden;
    border: 1px solid #222020;
    border-radius: 5px;
    perspective: 1000px;
    transition: all 0.3s;
    transform: translateY(-10%) scale(105%);
    cursor: pointer;
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