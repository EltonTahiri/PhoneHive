import React from "react";
import styled from "styled-components";
import slideshow1 from "../assets/homePageImgs/SlideshowImg1.png";
import slideshow2 from "../assets/homePageImgs/SlideshowImg2.png";
import slideshow3 from "../assets/homePageImgs/SlideshowImg3.png";
import galaxyS23Ultra from "../assets/homePageImgs/galaxyS23Utra.jpg";
import galaxyS23Plus from "../assets/homePageImgs/galaxyS23Plus.jpg";
import iPhone14Pro from "../assets/homePageImgs/iphone14Pro.jpg";
import pixel7Pro from "../assets/homePageImgs/pixel7Pro.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, EffectFade } from "swiper";

const Banner = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation]}
        className="slider"
      >
        <SwiperSlide>
          <img src={slideshow1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideshow2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideshow3} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="items">
        <div className="item">
          <img src={iPhone14Pro} alt="" />
          <button>BUY NOW</button>
        </div>
        <div className="item">
          <img src={galaxyS23Ultra} alt="" />
          <button>BUY NOW</button>
        </div>
        <div className="item">
          <img src={pixel7Pro} alt="" />
          <button>BUY NOW</button>
        </div>
        <div className="item">
          <img src={galaxyS23Plus} alt="" />
          <button>BUY NOW</button>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 10em 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  .slider {
    display: flex;
    align-self: flex-end;
    width: 55%;
    max-width: 700px;
    img {
      width: 100%;
      border-radius: 20px;
    }
  }
  .items {
    width: 45%;
    display: flex;
    max-width: 620px;
    flex-wrap: wrap;
    gap: 10px;
    .item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7px;
      transition: 0.3s;
      img {
        width: 220px;
        height: 130px;
        object-fit: cover;
        border-radius: 10px;
        transition: 0.3s;
      }
      button {
        display: none;
        position: absolute;
        padding: 7px 10px;
        margin-top: 3.4em;
        background-color: var(--primaryColor);
        border: none;
        color: white;
        border-radius: 10px;
        font-family: "Poppins", sans-serif;
        :hover {
          background: var(--primaryColorDark);
          transition: 0.3s;
          cursor: pointer;
        }
      }
      :hover {
        transition: 0.3s;
        img {
          filter: brightness(0.4);
        }
        button {
          display: flex;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 7em 3%;
    gap: 10px;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    .items {
      display: flex;
      width: 100%;
      justify-content: center;
      .item {
        img {
          width: 300px;
          height: 180px;
        }
      }
    }
    .slider {
      width: 100%;
    }
  }
  @media (max-width: 660px) {
    .items {
      .item {
        img {
          width: 240px;
          height: 140px;
        }
      }
    }
  }
  @media (max-width: 530px) {
    .items {
      .item {
        img {
          width: 210px;
          height: 110px;
        }
      }
    }
  }
  @media (max-width: 460px) {
    .items {
      .item {
        width: 100%;
        img {
          width: 70%;
          height: auto;
        }
      }
    }
  }
`;

export default Banner;
