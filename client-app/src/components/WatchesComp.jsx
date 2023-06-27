import React, { useEffect } from "react";
import styled from "styled-components";
import appleWatch from "../assets/homePageImgs/appleWatch8.png";
import galaxyWatch from "../assets/homePageImgs/galaxyWatch5.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const WatchesComp = () => {
  const { ref, inView } = useInView();
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1.start({
        opacity: 1,
        transition: { duration: 0.6, delay: 0.4 },
        x: 0,
      });
    }
    if (!inView) {
      animation1.start({ opacity: 0, x: -780 });
    }
    if (inView) {
      animation2.start({
        opacity: 1,
        transition: { duration: 0.6, delay: 0.4 },
        x: 0,
      });
    }
    if (!inView) {
      animation2.start({ opacity: 0, x: 780 });
    }
  }, [inView]);
  return (
    <Container>
      <motion.img animate={animation2} src={appleWatch} alt="" />
      <div>
        <h1 ref={ref}>Style meets technology on your wrist.</h1>
        <p>
          Unlock a world of possibilities with a smartwatch that tracks your
          fitness, delivers notifications, and lets you express your
          individuality.
        </p>
        <button>See All</button>
      </div>
      <motion.img animate={animation1} src={galaxyWatch} alt="" />
    </Container>
  );
};
const Container = styled.div`
  padding: 8em 6%;
  background-color: #111111;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
  img {
    width: 200px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    h1 {
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 400;
      font-size: 2.3em;
    }
    p {
      color: #9e9e9e;
      font-weight: 300;
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
`;

export default WatchesComp;
