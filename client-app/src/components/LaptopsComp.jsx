import React from "react";
import styled from "styled-components";
import laptopPic from "../assets/homePageImgs/macbookSideView.png";
import macbookAir2023 from "../assets/homePageImgs/macbookAir2023.webp";
import macbookPro2023 from "../assets/homePageImgs/macbookPro2023.png";
import galaxyBookPro from "../assets/homePageImgs/galaxyBookPro2023.png";

const LaptopsComp = () => {
  return (
    <Container>
      <div className="topSection">
        <img src={laptopPic} alt="" />
        <div>
          <h1>Discover the magic of a Great Laptop</h1>
          <button>Discover More</button>
        </div>
      </div>
      <div className="bottomSection">
        <div className="items">
          <div className="item">
            <img src={macbookAir2023} alt="" />
            <h3>Apple MacBook Air 2023</h3>
            <button>More Details</button>
          </div>
          <div className="item">
            <img src={galaxyBookPro} alt="" />
            <h3>Galaxy Book Pro 2023</h3>
            <button>More Details</button>
          </div>
          <div className="item">
            <img src={macbookPro2023} alt="" />
            <h3>Apple MacBook Pro 2023</h3>
            <button>More Details</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 10em 7%;
  background: #111111;
  .topSection {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: center;
    img {
      width: 50%;
    }
    div {
      h1 {
        background: var(--gradientBackground);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 400;
        font-size: 2.7em;
      }
      button {
        margin-top: 20px;
        padding: 9px 14px;
        font-family: "Poppins", sans-serif;
        font-size: 17px;
        border: none;
        background: var(--gradientBackground);
        color: white;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        :hover {
          background: var(--gradientBackgroundDarker);
        }
      }
    }
  }
  .bottomSection {
    margin-top: 7em;
    .items {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2em;
      .item {
        width: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        img {
          width: 90%;
        }
        h3 {
          font-weight: 400;
          color: #cfcfcf;
          text-align: center;
        }
        button {
          padding: 5px 10px;
          font-family: "Poppins", sans-serif;
          font-size: 17px;
          border: none;
          background: white;
          color: #111111;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
          :hover {
            background: var(--gradientBackgroundDarker);
          }
        }
      }
    }
  }
  @media (max-width: 4000px) {
    .topSection {
      div {
        h1 {
          font-size: 4em;
        }
      }
    }
  }
  @media (max-width: 1470px) {
    .topSection {
      div {
        h1 {
          font-size: 2.7em;
        }
      }
    }
  }
  @media (max-width: 840px) {
    padding: 10em 3%;
    .topSection {
    }
  }
  @media (max-width: 660px) {
    .topSection {
      flex-direction: column;
      img {
        width: 70%;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-size: 2.3em;
          text-align: center;
        }
      }
    }
  }
`;

export default LaptopsComp;
