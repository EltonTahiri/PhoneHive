import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/homePageImgs/bannerImg2.png";

const Hero = () => {
  return (
    <Container>
      <div className="leftSide">
        <h1>
          Stay Connected. <br />
          Stay Ahead!
        </h1>
        <p>
          Unlock endless possibilities and embark on a journey of technological
          marvels with our extraordinary phones.
        </p>
        <button>Explore More</button>
      </div>
      <img src={bannerImg} alt="" />
    </Container>
  );
};
const Container = styled.div`
  padding: 0 4%;
  margin-top: 5.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2em;
  .leftSide {
    width: 44%;
    h1 {
      font-size: 3.4em;
      background: var(--gradientBackground2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: gray;
      margin-top: 10px;
    }
    button {
      background: linear-gradient(145deg, #dddddd, #ffffff);
      box-shadow: 12px 12px 42px #acacac, -12px -12px 42px #ffffff;
      border: 1px solid #cecece;
      color: var(--primaryColor);
      padding: 14px;
      border-radius: 10px;
      margin-top: 1em;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        background-color: #5597eeca;
        color: white;
      }
    }
  }
  img {
    width: 40%;
  }
  @media (min-width: 1440px) {
    margin-top: 10em;
  }
  @media (max-width: 1048px) {
    margin-top: 7em;
    gap: 1em;
    .leftSide {
      width: 60%;
    }
  }
  @media (max-width: 880px) {
    .leftSide {
      width: 60%;
      h1 {
        font-size: 2.4em;
      }
    }
  }
  @media (max-width: 788px) {
    .rightSide {
      img {
        width: 20em;
      }
    }
    .leftSide {
      width: 60%;
      h1 {
        font-size: 2.4em;
      }
    }
  }
  @media (max-width: 740px) {
    .leftSide {
      width: 60%;
      h1 {
        font-size: 2.2em;
      }
    }
  }
  @media (max-width: 710px) {
    flex-direction: column;
    padding: 4em 2%;
    margin-top: 3em;
    .leftSide {
      width: 100%;
      text-align: center;
      h1 {
        font-size: 2.7em;
      }
    }
    img {
      width: 70%;
    }
  }
  @media (max-width: 655px) {
    .leftSide {
      h1 {
        font-size: 1.8em;
      }
    }
  }
  @media (max-width: 655px) {
    .rightSide {
      img {
        width: 100%;
      }
    }
  }
`;

export default Hero;
