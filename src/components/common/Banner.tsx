import React from 'react'
import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerContainer>
        Banner
    </BannerContainer>
  )
};

const BannerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: beige;
    border: 1px solid;

    @media screen and (max-width: 1140px) {
        display: none;
    }
`;

export default Banner;