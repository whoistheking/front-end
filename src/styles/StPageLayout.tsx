import styled from "styled-components";

export const StPageLayout = styled.div<{ backgroundcolor : string }>`
    min-width: 570px;
    height: 100%;
    background-color: ${(props) => props.backgroundcolor};
`;