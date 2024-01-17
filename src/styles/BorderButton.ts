import styled from "styled-components";

export const StBorderButton = styled.button<{ width : string, height : string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
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
    text-shadow: 0px 0px 3px #AF5B5B;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        color: #222020;
        text-shadow: none;
    }

    &:active {
        box-shadow: #E3AEAE90 0px 2px 2px 1px;
        color: #222020;
        text-shadow: 0px 0px 3px #000000;
        font-size: 17px;
    }
`;