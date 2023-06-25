import React from "react";
import styled from "styled-components";
import tablet from "../assets/homePageImgs/galaxyTabS8.png";
import TabS8 from "../assets/homePageImgs/SGalaxyTabS8Ultra.png";
import iPadPro from "../assets/homePageImgs/iPad2023.png";
import OnePulPad from "../assets/homePageImgs/OneplusPad.png";

const TabletsComp = () => {
  return (
    <Container>
      <div className="image">
        <img src={tablet} alt="" />
        <h1>Efficiency meets entertainment on a tablet.</h1>
      </div>
      <div className="items">
        <div className="item">
          <img src={TabS8} alt="" />
          <h3>Galaxy Tab S8 Ultra</h3>
          <button>More Details</button>
        </div>
        <div className="item">
          <img src={iPadPro} alt="" />
          <h3>iPad Pro 2023</h3>
          <button>More Details</button>
        </div>
        <div className="item">
          <img src={OnePulPad} alt="" />
          <h3>OnePlus Tab</h3>
          <button>More Details</button>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 3%;
  background-color: #111111;
  display: flex;
  flex-direction: column;
  gap: 4em;
  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 90%;
    }
    h1 {
      text-align: center;
      font-weight: 400;
      font-size: 2.7em;
      background: var(--gradientBackground2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .items {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    .item {
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      height: 220px;
      :nth-child(1) {
        height: 200px;
        justify-content: center;
        img {
          margin-top: 34px;
        }
      }
      img {
        height: 100%;
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
          background: #a3a3a3;
        }
      }
    }
  }
`;

export default TabletsComp;
