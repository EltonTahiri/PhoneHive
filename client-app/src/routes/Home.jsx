import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

const Home = ({ theme }) => {
  // imma need to do smth with if stats and pass it like props in the hero section
  return (
    <Container>
      <Hero theme={theme} />
    </Container>
  );
};
const Container = styled.div`
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
`;

export default Home;
