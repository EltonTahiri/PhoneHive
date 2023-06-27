import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import NewestPhones from "../components/NewestPhones";
import Guarantees from "../components/Guarantees";
import Navbar from "../components/Navbar";
import ProductCategories from "../components/ProductCategories";
import LaptopsComp from "../components/LaptopsComp";
import TabletsComp from "../components/TabletsComp";
import WatchesComp from "../components/WatchesComp";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Statistics />
      <ProductCategories />
      <Banner />
      <NewestPhones />
      <LaptopsComp />
      <TabletsComp />
      <WatchesComp />
      <Guarantees />
      <Testimonials />
    </Container>
  );
};
const Container = styled.div`
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
`;

export default Home;
