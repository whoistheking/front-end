import React from 'react'
import styled from 'styled-components';

interface PokerCardProps {
    mycard: boolean;
};

const PokerCard : React.FC<PokerCardProps> = ({ mycard }) => {
  return (
    <CardContainer width='50px' height='67px'>
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
    perspective: 1000px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s;
        transform: translateY(-10%) scale(101%);
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