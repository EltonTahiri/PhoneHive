import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/homePageImgs/heroImg.png";

const Hero = () => {
  return (
    <Container>
      <img src={bannerImg} className="heroBg" alt="" />
      <div className="text">
        <h1>Stay connected. Stay ahead.</h1>
        <p>
          Unlock endless possibilities and embark on a journey of technological
          marvels with our extraordinary phones.
        </p>
        <button>EXPLORE MORE</button>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .heroBg {
    position: relative;
    width: 100%;
    height: 90vh;
    filter: brightness(0.3);
    object-fit: cover;
    border-radius: 0 0 20px 20px;
  }
  .text {
    width: 100%;
    padding: 0 3%;
    top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    background: none;
    margin-top: 10%;
    text-align: center;
    color: white;
    h1 {
      font-weight: 500;
      font-size: 3.4em;
    }
    p {
      font-weight: 300;
    }
    button {
      margin-top: 1em;
      padding: 7px 10px;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      border: none;
      backdrop-filter: blur(20px);
      background: none;
      color: white;
      box-shadow: 0 0 7px 2px #ffffff47;
      border-radius: 10px;
      :hover {
        background: var(--primaryColorDark);
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 855px) {
    .text {
      h1 {
        padding: 0 17%;
      }
    }
  }
  @media (max-width: 735px) {
    .text {
      h1 {
        padding: 0 10%;
      }
    }
  }
  @media (max-width: 615px) {
    .text {
      margin-top: 8em;
      h1 {
        padding: 0 7%;
        font-size: 2.8em;
      }
    }
  }
  @media (max-width: 471px) {
    .text {
      h1 {
        padding: 0 4%;
        font-size: 2.4em;
      }
    }
  }
`;

export default Hero;
