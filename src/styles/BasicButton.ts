import { styled } from "styled-components";

export const StBasicButton = styled.button<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #c4ae8d;
  box-shadow: #745322ba 2px 2px 2px 1px;
  border: none;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: all 0.2s;
  font-family: "NanumYeBbeunMinGyeongCe";
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  &:active {
    box-shadow: #74532280 1px 1px 2px 1px;
    font-size: 26px;
  }
`;
