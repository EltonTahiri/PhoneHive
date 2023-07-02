import React from "react";
import styled from "styled-components";
import { RiDoubleQuotesR } from "react-icons/ri";
import personPic1 from "../assets/homePageImgs/person1Pic.avif";
import personPic2 from "../assets/homePageImgs/person2Pic.jpg";
import personPic3 from "../assets/homePageImgs/person3Pic.webp";

const Testimonials = () => {
  return (
    <Container>
      <div className="topSection">
        <h1>What people are saying about us</h1>
        <p>
          At PhoneHive, we understand that choosing the right phone is an
          important decision. That's why we're here to guide you towards making
          the smartest choice.
        </p>
      </div>
      <div className="bottomSection">
        <div className="item">
          <RiDoubleQuotesR className="icon" />
          <p>
            I have been a loyal customer of PhoneHIVE for years because they
            consistently provide top-quality products. Their commitment to
            excellence is evident in every purchase I've made.
          </p>
          <div>
            <img src={personPic1} alt="" />
            <span>
              <h2>Steve Jackson</h2>
              <p>Loyal Customer</p>
            </span>
          </div>
        </div>

        <div className="item">
          <RiDoubleQuotesR className="icon" />
          <p>
            I cannot speak highly enough about the service and products at
            PhoneHIVE. They genuinely care about their customers and take the
            time to understand their needs, ensuring they walk away with the
            perfect phone.
          </p>
          <div>
            <img src={personPic3} alt="" />
            <span>
              <h2>Jennifer K.</h2>
              <p>Customer</p>
            </span>
          </div>
        </div>
        <div className="item">
          <RiDoubleQuotesR className="icon" />
          <p>
            The customer service at PhoneHIVE is exceptional. They genuinely
            care about their customers' satisfaction and go above and beyond to
            ensure a smooth buying experience. Highly recommended!
          </p>
          <div>
            <img src={personPic2} alt="" />
            <span>
              <h2>Mark Ross</h2>
              <p>Customer</p>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 7%;
  .topSection {
    display: flex;
    justify-content: center;
    gap: 1em;
    h1 {
      font-size: 3em;
      font-weight: 600;
      max-width: 14em;
    }
    p {
      margin-top: 20px;
      max-width: 30em;
      color: gray;
    }
  }
  .bottomSection {
    flex-wrap: wrap;
    margin-top: 3em;
    display: flex;
    justify-content: center;
    gap: 2em;
    .item {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 1.4em;
      .icon {
        font-size: 3em;
        color: #636262;
      }
      p {
        color: #727171;
      }
      div {
        display: flex;
        align-items: center;
        gap: 1em;
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }
        h2 {
          font-size: 17px;
          font-weight: 400;
        }
        p {
          color: gray;
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .topSection {
      h1 {
        width: 50%;
      }
      p {
        width: 50%;
      }
    }
  }
  @media (max-width: 940px) {
    padding: 0 3%;
    .bottomSection {
      .item {
        width: 300px;
      }
    }
  }
  @media (max-width: 740px) {
    padding: 0 7%;
    .bottomSection {
      gap: 5em;
      .item {
        width: 100%;
        text-align: center;
        align-items: center;
      }
    }
    .topSection {
      h1 {
        font-size: 2.7em;
      }
    }
  }
  @media (max-width: 672px) {
    .topSection {
      flex-direction: column;
      h1 {
        width: 100%;
      }
      p {
        width: 100%;
      }
    }
  }
  @media (max-width: 430px) {
    .topSection {
      flex-direction: column;
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

export default Testimonials;
