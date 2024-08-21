import React from 'react';
import styled from 'styled-components';
import couple from '../assets/images/couple.jpg';

const BannerContainer = styled.div`
  background-color: #be0e65;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid #F4504C; /* Add the yellow border around the image container */
  box-sizing: border-box; /* Ensure padding and border are included in the element's total width and height */
  background-color: #084C61;
`;

const Image = styled.img`
  width: 55%;
  height: 100%;
  object-fit: cover;
  object-position: 0 24%;
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
