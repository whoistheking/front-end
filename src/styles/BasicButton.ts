import { styled } from "styled-components";

export const StBasicButton = styled.button<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #c4ae8d;
  border: none;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;
