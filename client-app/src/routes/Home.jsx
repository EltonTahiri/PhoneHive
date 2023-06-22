import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import NewestPhones from "../components/NewestPhones";
import Guarantees from "../components/Guarantees";
import Navbar from "../components/Navbar";
import ProductCategories from "../components/ProductCategories";

const Home = ({ theme }) => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <ProductCategories />
      <Banner />
      <NewestPhones />
      {/* guarantees compoment */}
      <Guarantees />
    </Container>
  );
};
const Container = styled.div`
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
`;

export default Home;
