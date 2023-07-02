import React from "react";
import styled from "styled-components";
import {
  BsPhoneFill,
  BsFillLaptopFill,
  BsTabletFill,
  BsSmartwatch,
} from "react-icons/bs";

const ProductCategories = () => {
  return (
    <Container>
      <div className="items">
        <div className="item">
          <BsPhoneFill className="icon" />
          <h2>PHONES</h2>
        </div>
        <div className="item">
          <BsFillLaptopFill className="icon" />
          <h2>LAPTOPS</h2>
        </div>
        <div className="item">
          <BsSmartwatch className="icon" />
          <h2>SMARTWATCHES</h2>
        </div>
        <div className="item">
          <BsTabletFill className="icon" />
          <h2>TABLETS</h2>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 7%;
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
      :nth-child(2) {
        padding-bottom: 2em;
      }
      :nth-child(4) {
        margin-bottom: 2em;
      }
      :hover {
        transform: scale(1.04);
      }
      .icon {
        font-size: 4em;
      }
      h2 {
        color: var(--fontSecondaryColor);
        font-weight: 500;
        background: var(--gradientBackground);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
