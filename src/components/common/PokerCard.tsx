import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
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
        if (mycard) {
            return;
        } else {
            dispatch(cardClick(item));
        };
    };

    const cardRender = () => {
        if ((selectCard === item) && !mycard) {
            return (
                <SelectCardContainer onClick={onClickCardChoiceHandler} width='66px' height='88px'>
                    <SelectCardInnerBox>
                        <FrontCard style={{transform: (mycard) ? "" : "rotateY(180deg)"}}>
                            front
                        </FrontCard>
                        <BackCard style={{transform: (mycard) ? "rotateY(180deg)" : ""}}>

                        </BackCard>
                    </SelectCardInnerBox>
                </SelectCardContainer>
            )
        } else {
            return (
                <CardContainer onClick={onClickCardChoiceHandler} width='66px' height='88px'>
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

const CardViewAnimation = keyframes`
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(180deg);
    }
`;

const SelectCardContainer = styled.div<{ width : string, height : string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
    perspective: 1000px;
    transition: all 0.3s;
    transform: translateY(-10%) scale(105%);
    cursor: pointer;
`;

const CardContainer = styled.div<{ width : string, height : string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
    perspective: 1000px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s;
        transform: translateY(-10%) scale(105%);
    }
`;

const SelectCardInnerBox = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #222020;
    box-shadow: #00000050 1px 1px 5px 3px;
    border-radius: 3px;
    transform-style: preserve-3d;
    transition: all 0.5s;
    /* animation: ${CardViewAnimation} 1s forwards; */
`;

const CardInnerBox = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #222020;
    box-shadow: #00000050 1px 1px 2px 1px;
    border-radius: 3px;
    transform-style: preserve-3d;
    transition: all 0.5s;
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
    background-color: #ffadbb;
`;

export default PokerCard;