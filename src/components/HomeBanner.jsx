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
  background-color: #F2E5D7;
`;

const Image = styled.img`
  width: 55%;
  height: 100%;
  object-fit: cover;
  object-position: 0 24%;
`;

const StyledH1 = styled.h1`
  color: #F4504C;
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
        <div className="col text-center">
          <StyledH1>We're getting married!</StyledH1>
          <h2 className="p-4">February 26, 2026, Thursday</h2>
          <h5>Raeburn Pl<br />Edinburgh, Midlothian<br />EH4 1HX</h5>
        </div>
        <Image src={couple} alt="Couple" />
      </ImageContainer>
    </>
  );
};

export default HomeBanner;
