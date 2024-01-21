import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { cardClick } from '../../redux/module/CardChoiceSlice';
import { RootState } from '../../redux/config/configureStore';
import CardBack from '../../assets/images/card_back_image.webp';

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
            if (selectCard === item) {
                dispatch(cardClick(undefined));
            } else {
                dispatch(cardClick(item));
            };
            
        };
    };

    const cardRender = () => {
        if ((selectCard === item) && !mycard) {
            return (
                <SelectCardContainer onClick={onClickCardChoiceHandler}>
                    <SelectCardInnerBox>
                        <FrontCard style={{transform: (mycard) ? "" : "rotateY(180deg)"}}>
                            front
                        </FrontCard>
                        <BackCard
                            src={CardBack}
                            alt=''
                            style={{transform: (mycard) ? "rotateY(180deg)" : ""}}/>
                    </SelectCardInnerBox>
                </SelectCardContainer>
            )
        } else {
            return (
                <CardContainer onClick={onClickCardChoiceHandler}>
                    <CardInnerBox>
                        <FrontCard style={{transform: (mycard) ? "" : "rotateY(180deg)"}}>
                            front
                        </FrontCard>
                        <BackCard
                            src={CardBack}
                            alt=''
                            style={{transform: (mycard) ? "rotateY(180deg)" : ""}}/>
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

const SelectCardContainer = styled.div`
    width: 66px;
    height: 88px;
    position: relative;
    perspective: 1000px;
    transition: all 0.3s;
    transform: translateY(-10%) scale(105%);
    cursor: pointer;

    @media screen and (max-width: 1600px) {
        width: 55px;
        height: 73px;
    }

    @media screen and (max-width: 550px) {
        width: 42px;
        height: 56px;
    }
`;

const CardContainer = styled.div`
    width: 66px;
    height: 88px;
    position: relative;
    perspective: 1000px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s;
        transform: translateY(-10%) scale(105%);
    }

    @media screen and (max-width: 1600px) {
        width: 55px;
        height: 73px;
    }

    @media screen and (max-width: 550px) {
        width: 42px;
        height: 56px;
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

const BackCard = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
`;

export default PokerCard;