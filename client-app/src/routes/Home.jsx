import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import NewestPhones from "../components/NewestPhones";
import Guarantees from "../components/Guarantees";
import ProductCategories from "../components/ProductCategories";
import LaptopsComp from "../components/LaptopsComp";
import TabletsComp from "../components/TabletsComp";
import WatchesComp from "../components/WatchesComp";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import ContactUsComp from "../components/ContactUsComp";
import BestSellingProducts from "../components/BestSellingProducts";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Container>
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
      <BestSellingProducts />
      <ContactUsComp />
    </Container>
  );
};
const Container = styled.div`
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
  overflow-x: hidden;
`;

export default Home;
