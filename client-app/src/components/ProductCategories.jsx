import React from "react";
import styled from "styled-components";
import galaxyPhones from "../assets/homePageImgs/galaxyS23SeriesImg.png";
import macbook from "../assets/homePageImgs/macbook.png";
import galaxyWatches from "../assets/homePageImgs/galaxyWatch.png";
import iPad from "../assets/homePageImgs/ipad.png";

const ProductCategories = () => {
  return (
    <Container>
      <div className="items">
        <div className="item">
          <img src={galaxyPhones} alt="" />
          <h2>PHONES</h2>
        </div>
        <div className="item">
          <img src={macbook} alt="" />
          <h2>LAPTOPS</h2>
        </div>
        <div className="item">
          <img src={galaxyWatches} alt="" />
          <h2>SMARTWATCHES</h2>
        </div>
        <div className="item">
          <img src={iPad} alt="" />
          <h2>TABLETS</h2>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 7%;
  margin-top: 10em;
  .items {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2.2em;
    flex-wrap: wrap;
    .item {
      width: 200px;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        transform: scale(1.04);
      }
      img {
        width: 100%;
      }
      h2 {
        color: var(--fontSecondaryColor);
        font-weight: 400;
      }
    }
  }
  @media (max-width: 530px) {
    padding: 0 3%;
    .items {
      gap: 10px;
      .item {
        width: 170px;
      }
    }
  }
`;

export default ProductCategories;
