import styled from "styled-components";

export const StBorderButton = styled.button<{ width : number, height : number }>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: #FBE7E7;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "NanumYeBbeunMinGyeongCe";
    font-size: 18px;
    font-weight: 700;
    line-height: 100%;
    box-shadow: #E3AEAE 0px 2px 2px 1px;
    border: none;
    user-select: none;
    color: #616161;
    cursor: pointer;

    &:hover {
        color: #222020;
        text-shadow: none;
        transform: scale(101%) translateY(-2%);
    }

    &:active {
        box-shadow: #E3AEAE90 0px 2px 2px 1px;
        color: #222020;
        font-size: 17px;
    }

    @media screen and (max-width: 550px) {
        width: ${(props) => props.width - 10}px;
        height: ${(props) => props.height - 4}px;
        font-size: 16px;
    }
`;