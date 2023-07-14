import React from "react";
import styled from "styled-components";
import galaxySeriesVid from "../../assets/products/galaxySeriesVideo.webm";
import iPhoneSeriesVid from "../../assets/products/iPhoneSeriesVideo.mp4";
import PixelSeriesImg from "../../assets/products/pixelSeries.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import data from "./phonesPageData";

const Phones = () => {
  const { latestPhones } = data;
  return (
    <Container>
      <Swiper
        className="topBanner"
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
      >
        <div data-swiper-parallax="-23%"></div>
        <SwiperSlide className="galaxy">
          <video loop autoPlay>
            <source src={galaxySeriesVid} />
          </video>
          <div className="content">
            <h1>
              <span>Galaxy</span> Phones
            </h1>
            <p>Experience the magic of a Galaxy Phone.</p>
            <button>DISCOVER ALL</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="iphone">
          <video loop autoPlay>
            <source src={iPhoneSeriesVid} />
          </video>
          <div className="content">
            <h1>
              <span>Apple</span> Phones
            </h1>
            <p>Experience the Apple magic!</p>
            <button>DISCOVER ALL</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pixel">
          <img src={PixelSeriesImg} alt="" />
          <div className="content">
            <h1>
              <span>Google</span> Phones
            </h1>
            <p>Experience the Pixel magic!</p>
            <button>DISCOVER ALL</button>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="latest">
        <h2 className="title">Latest Phones</h2>
        <div className="items">
          {latestPhones.map((item) => (
            <div className="item">
              <div className="hiddenElement1">
                <p>{item.company}</p>
                <h2>{item.title}</h2>
              </div>

              <div className="hiddenElement2">
                <button>Check it out!</button>
              </div>
              <div className="mainElement">
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 3em 0%;
  background: var(--primaryBackgroundColor);
  .topBanner {
    color: white;
    .galaxy {
      position: relative;
      video {
        width: 100%;
        object-fit: cover;
      }
      .content {
        position: absolute;
        top: 20%;
        left: 7%;
        h1 {
          font-size: 3em;
          font-weight: 400;
          span {
            font-weight: 600;
            background: var(--gradientBackground);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        p {
          color: #aaaaaa;
        }
        button {
          font-family: "Poppins", sans-serif;
          font-size: 17px;
          padding: 8px 14px;
          margin-top: 1em;
          background-color: white;
          border: none;
          border-radius: 10px;
        }
      }
    }
    .iphone {
      width: 100%;
      background-color: black;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      video {
        margin-top: 13.7%;
        width: 60%;
      }
      .content {
        position: absolute;
        top: 20%;
        left: 7%;
        h1 {
          font-size: 3em;
          font-weight: 400;
          span {
            font-weight: 600;
            background: var(--gradientBackground);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        p {
          color: #aaaaaa;
        }
        button {
          font-family: "Poppins", sans-serif;
          font-size: 17px;
          padding: 8px 14px;
          margin-top: 1em;
          background-color: white;
          border: none;
          border-radius: 10px;
        }
      }
    }
    .pixel {
      width: 100%;
      background-color: black;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      img {
        margin-top: 15.1%;
        width: 60%;
        object-fit: cover;
      }
      .content {
        position: absolute;
        top: 20%;
        left: 7%;
        h1 {
          font-size: 3em;
          font-weight: 400;
          span {
            font-weight: 600;
            background: var(--gradientBackground);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        p {
          color: #aaaaaa;
        }
        button {
          font-family: "Poppins", sans-serif;
          font-size: 17px;
          padding: 8px 14px;
          margin-top: 1em;
          background-color: white;
          border: none;
          border-radius: 10px;
        }
      }
    }
  }
  .latest {
    .title {
      text-align: center;
      font-size: 2em;
      background: var(--gradientBackground2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 3em 0 1em 0;
      font-weight: 500;
    }
    .items {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 18em;
      margin: 7em 0 14em 0;
      width: 100%;
      padding-right: 20%;
      .item {
        position: relative;
        background-color: gray;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        .hiddenElement1 {
          position: absolute;
          border: 1px solid #d8d8d8;
          background-color: white;
          width: 240px;
          border-radius: 32px 32px 0 0;
          padding: 10px;
          box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;
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
          box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;
          padding-top: 30px;
          transition: 0.4s;
          border: 1px solid #e0e0e0;
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
  }
  @media (max-width: 1030px) {
    padding: 7em 2%;
    .latest {
      .items {
        padding-right: 27%;
        gap: 270px;
      }
    }
  }
  @media (max-width: 900px) {
    .topBanner {
      .galaxy {
        video {
          height: 400px;
        }
      }
      .iphone {
        height: 400px;
      }
      .pixel {
        height: 400px;
      }
    }
  }
  @media (max-width: 840px) {
    .latest {
      .items {
        padding-right: 31%;
        gap: 180px 250px;
        flex-wrap: wrap;
        align-items: center;
      }
    }
  }
  @media (max-width: 720px) {
    .topBanner {
      .pixel {
        .content {
          top: 13%;
          left: 2%;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .latest {
      .items {
        padding-right: 41%;
      }
    }
  }
  @media (max-width: 620px) {
    .topBanner {
      .pixel {
        img {
          width: 60%;
          overflow: hidden;
          margin-top: 11em;
        }
        .content {
          top: 13%;
          left: 2%;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .latest {
      .items {
        padding-right: 47%;
      }
    }
  }
  @media (max-width: 530px) {
    .topBanner {
      .galaxy,
      .iphone {
        .content {
          top: 14%;
          left: 4%;
          h1 {
            font-size: 2.4em;
          }
        }
      }
    }
  }
  @media (max-width: 380px) {
    .topBanner {
      .galaxy,
      .iphone,
      .pixel {
        .content {
          top: 8%;
          left: 4%;
          h1 {
            font-size: 2em;
          }
        }
      }
    }
  }
`;

export default Phones;
