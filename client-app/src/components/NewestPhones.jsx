import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import iPhone14Purple from "../assets/homePageImgs/iphone14ProPurple.png";
import iPhone14Black from "../assets/homePageImgs/iphone14ProBlack.png";
import iPhone14Silver from "../assets/homePageImgs/iphone14ProSilver.png";
import iPhone14Gold from "../assets/homePageImgs/iphone14ProGold.png";
import S23UltraLavender from "../assets/homePageImgs/galaxyS23UltraLavender.png";
import S23UltraBlack from "../assets/homePageImgs/galaxyS23UltraBlack.png";
import S23UltraCream from "../assets/homePageImgs/galaxyS23UltraCream.png";
import S23UltraGreen from "../assets/homePageImgs/galaxyS23UltraGreen.png";
import pixel7ProBlack from "../assets/homePageImgs/pixel7ProBlack.png";
import pixel7ProWhite from "../assets/homePageImgs/pixel7ProWhite.png";
import pixel7ProHazel from "../assets/homePageImgs/pixel7ProHazel.png";

const NewestPhones = () => {
  const [activeColoriPhone, setActiveColoriPhone] = useState("purple");
  const [activeColorGalaxy, setActiveColorGalaxy] = useState("lavender");
  const [activeColorPixel, setActiveColorPixel] = useState("white");
  return (
    <Container>
      <h3 className="title">
        <span>N</span>ewest <span>P</span>hones
      </h3>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="swiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              " linear-gradient(to right top, #161616, #131313, #181717, #141414, #3b4146)",
            backgroundPosition: "cover",
            width: "170%",
          }}
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide className="slide">
          {activeColoriPhone === "purple" && (
            <img data-swiper-parallax="-700" src={iPhone14Purple} alt="" />
          )}
          {activeColoriPhone === "black" && (
            <img data-swiper-parallax="-700" src={iPhone14Black} alt="" />
          )}
          {activeColoriPhone === "silver" && (
            <img data-swiper-parallax="-700" src={iPhone14Silver} alt="" />
          )}
          {activeColoriPhone === "gold" && (
            <img data-swiper-parallax="-700" src={iPhone14Gold} alt="" />
          )}
          <div className="details">
            <h2 data-swiper-parallax="-300">iPhone 14 Pro</h2>
            <p>
              The iPhone 14 Pro is Apple's flagship smartphone, featuring a
              stunning display, powerful processor, advanced camera system, and
              sleek design. With cutting-edge technology and a premium user
              experience, it offers top-tier performance and aesthetics.
            </p>
            <div className="colors">
              <h4>All Colors: </h4>
              <div className="options">
                <span onClick={() => setActiveColoriPhone("purple")}></span>
                <span onClick={() => setActiveColoriPhone("black")}></span>
                <span onClick={() => setActiveColoriPhone("silver")}></span>
                <span onClick={() => setActiveColoriPhone("gold")}></span>
              </div>
            </div>
            <h3>
              <span>Warranty: </span>2 years
            </h3>
            <div className="buttons">
              <button>MORE DETAILS</button>
              <button>BUY NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide slide2">
          {activeColorGalaxy === "lavender" && (
            <img data-swiper-parallax="-700" src={S23UltraLavender} alt="" />
          )}
          {activeColorGalaxy === "black" && (
            <img data-swiper-parallax="-700" src={S23UltraBlack} alt="" />
          )}
          {activeColorGalaxy === "cream" && (
            <img data-swiper-parallax="-700" src={S23UltraCream} alt="" />
          )}
          {activeColorGalaxy === "green" && (
            <img data-swiper-parallax="-700" src={S23UltraGreen} alt="" />
          )}
          <div className="details">
            <h2 data-swiper-parallax="-300">Galaxy S23 Ultra</h2>
            <p>
              The Galaxy S23 Ultra is Samsung's flagship smartphone, boasting a
              stunning display, powerful processor, advanced camera system, and
              sleek design. With cutting-edge technology and a premium user
              experience, it delivers top-tier performance and aesthetics.
            </p>
            <div className="colors">
              <h4>All Colors: </h4>
              <div className="options">
                <span onClick={() => setActiveColorGalaxy("lavender")}></span>
                <span onClick={() => setActiveColorGalaxy("black")}></span>
                <span onClick={() => setActiveColorGalaxy("cream")}></span>
                <span onClick={() => setActiveColorGalaxy("green")}></span>
              </div>
            </div>
            <h3>
              <span>Warranty: </span>2 years
            </h3>
            <div className="buttons">
              <button>MORE DETAILS</button>
              <button>BUY NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide slide3">
          {activeColorPixel === "white" && (
            <img data-swiper-parallax="-700" src={pixel7ProWhite} alt="" />
          )}
          {activeColorPixel === "black" && (
            <img data-swiper-parallax="-700" src={pixel7ProBlack} alt="" />
          )}
          {activeColorPixel === "hazel" && (
            <img data-swiper-parallax="-700" src={pixel7ProHazel} alt="" />
          )}
          <div className="details">
            <h2 data-swiper-parallax="-300">Pixel 7 Pro</h2>
            <p>
              The Pixel 7 Pro is Google's flagship smartphone, featuring an
              impressive display, powerful processor, advanced camera system,
              and sleek design. With state-of-the-art technology and a premium
              user experience, it offers exceptional performance and aesthetics.
            </p>
            <div className="colors">
              <h4>All Colors: </h4>
              <div className="options">
                <span onClick={() => setActiveColorPixel("white")}></span>
                <span onClick={() => setActiveColorPixel("black")}></span>
                <span onClick={() => setActiveColorPixel("hazel")}></span>
              </div>
            </div>
            <h3>
              <span>Warranty: </span>2 years
            </h3>
            <div className="buttons">
              <button>MORE DETAILS</button>
              <button>BUY NOW</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: 10em;
  .swiper {
    width: 100%;
    height: auto;
    background-color: #36333321;

    .slide {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      img {
        width: 350px;
      }
      .details {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        h2 {
          font-weight: 400;
        }
        p {
          font-size: 15px;
        }
        .colors {
          display: flex;
          gap: 7px;
          h4 {
            font-weight: 400;
            color: var(--primaryColor);
          }
          .options {
            display: flex;
            gap: 7px;
            span {
              width: 30px;
              height: 30px;
              border-radius: 10px;
              background-color: #290229;
              border: 1px solid white;
              :nth-child(2) {
                background-color: #272525;
              }
              :nth-child(3) {
                background-color: gray;
              }
              :nth-child(4) {
                background-color: #cfc279;
              }
              cursor: pointer;
              transition: 0.3s;
              :hover {
                transform: scale(1.1);
              }
            }
          }
        }
        h3 {
          font-weight: 400;
          font-size: 19px;
          span {
            color: var(--primaryColor);
          }
        }
        .buttons {
          display: flex;
          gap: 4px;
          button {
            padding: 7px 10px;
            font-family: "Poppins", sans-serif;
            font-size: 15px;
            border: none;
            background: var(--primaryColor);
            color: white;
            border-radius: 10px;
            :nth-child(2) {
              background-color: var(--backgroundPrimaryColor);
              border: 1px solid var(--fontSecondaryColor);
              /* color: var(--fontPrimaryColor); */
            }
            :hover {
              background: var(--primaryColorDark);
              transition: 0.3s;
              cursor: pointer;
              :nth-child(2) {
                background-color: #363434;
              }
            }
          }
        }
      }
    }
    .slide2 {
      margin-top: 30px;
      gap: 1em;
      img {
        width: 370px;
      }
      .details {
        .colors {
          .options {
            span {
              background-color: #e1b6f0;
              :nth-child(3) {
                background-color: #e7d9ab;
              }
              :nth-child(4) {
                background-color: #01290d;
              }
            }
          }
        }
      }
    }
    .slide3 {
      margin-top: 30px;
      gap: 1em;
      img {
        width: 310px;
      }
      .details {
        .colors {
          .options {
            span {
              background-color: snow;
              :nth-child(2) {
                background-color: #2c2a2a;
              }
              :nth-child(3) {
                background-color: #8a8484;
              }
            }
          }
        }
      }
    }
  }
  .title {
    text-align: center;
    width: 100%;
    z-index: 100;
    font-size: 5em;
    font-weight: 300;
    span {
      color: var(--primaryColor);
      font-weight: 600;
    }
  }
  .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
  }

  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
  }
  @media (max-width: 787px) {
    .swiper {
      .slide {
        flex-direction: column;
        .details {
          width: 80%;
          text-align: center;
          align-items: center;
        }
      }
    }
  }
  @media (max-width: 630px) {
    .title {
      font-size: 3em;
    }
  }
  @media (max-width: 377px) {
    .title {
      font-size: 2.4em;
    }
  }
  @media (max-width: 500px) {
    .swiper {
      .slide {
        flex-direction: column;
        img {
          width: 90%;
        }
        .details {
          width: 90%;
          text-align: center;
          align-items: center;
        }
      }
    }
  }
`;

export default NewestPhones;
