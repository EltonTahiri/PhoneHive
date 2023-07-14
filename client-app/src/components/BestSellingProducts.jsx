import React from "react";
import styled from "styled-components";
import iPhone14Pro from "../assets/homePageImgs/iphone14Pro.jpg";
import galaxyS23 from "../assets/homePageImgs/galaxyS23.jpg";
import pixel7Pro from "../assets/homePageImgs/pixel7Pro2.jpg";

const BestSellingProducts = () => {
  return (
    <Container>
      <div className="cards">
        <div className="card">
          <div className="hiddenElement1">
            <h2>iPhone 14 Pro</h2>
            <p>780+ Sales</p>
          </div>

          <div className="hiddenElement2">
            <button>Check it out!</button>
          </div>
          <div className="mainElement">
            <img src={iPhone14Pro} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="hiddenElement1">
            <h2>Galaxy S23+</h2>
            <p>730+ Sales</p>
          </div>

          <div className="hiddenElement2">
            <button>Check it out!</button>
          </div>
          <div className="mainElement">
            <img src={galaxyS23} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="hiddenElement1">
            <h2>Pixel 7 Pro</h2>
            <p>620+ Sales</p>
          </div>

          <div className="hiddenElement2">
            <button>Check it out!</button>
          </div>
          <div className="mainElement">
            <img src={pixel7Pro} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  display: flex;
  justify-content: center;
  margin-bottom: 10em;
  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 300px;
    width: 100%;
    margin-right: 20%;
    .card {
      position: relative;
      background-color: gray;
      display: flex;
      flex-direction: column;
      .hiddenElement1 {
        position: absolute;
        background-color: white;
        width: 240px;
        border-radius: 32px 32px 0 0;
        padding: 10px;
        box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
        padding-bottom: 40px;
        transition: 0.3s ease-in-out;
        top: 0;
        h2 {
          text-align: center;
          margin-bottom: 10px;
          color: #4b4b4b;
          font-weight: 400;
        }
        p {
          color: gray;
          text-align: center;
        }
      }
      .mainElement {
        position: absolute;
        border-radius: 32px;
        img {
          width: 240px;
          border-radius: 30px;
          cursor: pointer;
        }
      }
      .hiddenElement2 {
        top: 40px;
        position: absolute;
        background-color: white;
        width: 240px;
        border-radius: 0 0 30px 30px;
        display: flex;
        justify-content: center;
        box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
        padding-top: 30px;
        transition: 0.4s;
        button {
          margin: auto;
          border-radius: 20px;
          border: 2px solid transparent;
          padding: 10px 20px;
          box-shadow: 7px 7px 12px #a8a8a8, -7px -7px 12px #ffffff;
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          cursor: pointer;
          transition: 0.3s;
          margin: 10px;
          :hover {
            background: #e0e0e0;
          }
        }
      }
      :hover {
        .hiddenElement1 {
          top: -90px;
          transition: 0.4s;
        }
        .hiddenElement2 {
          top: 130px;
          transition: 0.4s;
          z-index: 7;
        }
        .mainElement {
          z-index: 10;
          img {
            transition: 0.4s;
            transform: scale(1.04);
          }
        }
      }
    }
  }
  @media (max-width: 1030px) {
    padding: 7em 2%;
    .cards {
      margin-right: 30%;
      gap: 270px;
    }
  }
  @media (max-width: 840px) {
    .cards {
      margin-right: 31%;
      gap: 180px 250px;
      flex-wrap: wrap;
      align-items: center;
    }
  }
  @media (max-width: 700px) {
    .cards {
      margin-right: 41%;
    }
  }
  @media (max-width: 600px) {
    .cards {
      margin-right: 47%;
    }
  }
`;

export default BestSellingProducts;
