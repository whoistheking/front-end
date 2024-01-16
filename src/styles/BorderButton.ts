import styled from "styled-components";

export const BorderButton = styled.button<{ width : string, height : string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: #FDEDED;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "NanumYeBbeunMinGyeongCe";
    font-size: 18px;
    font-weight: 700;
    line-height: 100%;
    box-shadow: #F4D5D5 0px 3px 2px 1px;
    border: none;
    cursor: pointer;

    &:active {
        box-shadow: #F4D5D590 0px 2px 2px 1px;
        font-size: 17px;
    }
`;