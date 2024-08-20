import React from 'react';
import styled from 'styled-components';
import couple from '../assets/images/couple.jpg';

const BannerContainer = styled.div`
  background-color: #8a0f5d;
  height: 10vh; /* Adjust the height as needed */
  width: 100vw;
  display: flex;
  align-items: center; /* Vertically centers the content */
  justify-content: center; /* Horizontally centers the content */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  border-top: 10px solid #be0e65; /* Add the yellow border around the image container */
  box-sizing: border-box; /* Ensure padding and border are included in the element's total width and height */
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
