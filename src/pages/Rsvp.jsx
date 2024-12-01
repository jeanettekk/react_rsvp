import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  background-color: #f2e5d7; /* Peach background */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const FormWrapper = styled.div`
  background-color: white; /* White background for the form */
  padding: 30px; /* Padding around the iframe */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  max-width: 1000px; /* Maximum width for the form */
  width: 95%; /* Responsive width */
  max-height: 90%; /* Limit height to 90% of viewport */
  height: 90%; /* Make the form larger */
  overflow: hidden; /* Prevent any overflow */
`;

const FormIframe = styled.iframe`
  width: 100%; /* Take up all the width of the container */
  height: 100%; /* Take up all the height of the container */
  border: none; /* Remove iframe borders */
  display: block;
`;

const Rsvp = () => {
  return (
    <PageWrapper>
      <FormWrapper>
        <FormIframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdEF3YVa91oZ9yHXJSOzrLXr6DhklBmv0Y-K2XpBaNKN8le2Q/viewform?embedded=true"
          title="RSVP Form"
        />
      </FormWrapper>
    </PageWrapper>
  );
};

export default Rsvp;
