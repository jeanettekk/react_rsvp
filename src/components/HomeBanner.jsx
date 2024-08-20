import React from 'react';
import styled from 'styled-components';
import couple from '../assets/images/couple.jpg';

const BannerContainer = styled.div`
  background-color: peachpuff;
  height: 10vh; /* Adjust the height as needed */
  width: 100vw;
  display: flex;
  align-items: center; /* Vertically centers the content */
  justify-content: center; /* Horizontally centers the content */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 90vh; /* Adjusted to take up the remaining space */
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const HomeBanner = () => {
  return (
    <>
      <BannerContainer>
        <nav>
          {/* Place your navbar component here */}
        </nav>
      </BannerContainer>
      <ImageContainer>
        <Image src={couple} alt="Couple" />
      </ImageContainer>
    </>
  );
};

export default HomeBanner;
