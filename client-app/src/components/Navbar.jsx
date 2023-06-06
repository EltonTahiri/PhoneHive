import React, { useState } from "react";
import styled from "styled-components";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ switchTheme, theme }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <Container>
      <h2 className="logo">
        Phone<span>HIVE</span>
      </h2>
      <div className={toggle ? "blur active" : "blur"}></div>
      <ul
        onClick={handleToggle}
        className={toggle ? "nav-menu active" : "nav-menu"}
      >
        {/* <div className="blur"></div>
        <div className="content"> */}
        <li>Home</li>
        <li>Brands</li>
        <li>Latest Phones</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <div className="buttons">
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
        <div className="toggleTheme" onClick={switchTheme}>
          {theme === "dark" ? (
            <BsFillSunFill style={{ color: "white" }} className="themeIcon" />
          ) : (
            <BsMoonFill style={{ color: "#5e5c5c" }} className="themeIcon" />
          )}
          {/* </div> */}
        </div>
      </ul>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </Container>
  );
};
const Container = styled.div`
  background-color: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4%;
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  z-index: 100;
  overflow-x: hidden;
  transition: 0.2s;

  .logo {
    color: var(--fontSecondaryColor);
    font-weight: 500;
    span {
      color: var(--primaryColor);
      font-weight: 600;
    }
  }
  .nav-menu {
    display: flex;
    gap: 37px;
    list-style: none;
    align-items: center;
    li {
      transition: 0.3s;
      cursor: pointer;
    }
    .themeIcon {
      font-size: 24px;
      cursor: pointer;
      margin-top: 10px;
    }
    .activeTab {
      color: var(--primaryColor);
      font-weight: 700;
    }
    .buttons {
      display: flex;
      gap: 7px;
      button {
        padding: 7px 10px;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        border: none;
        background: var(--primaryColor);
        color: white;
        :nth-child(2) {
          background-color: var(--backgroundPrimaryColor);
          border: 1px solid var(--fontSecondaryColor);
          color: var(--fontPrimaryColor);
        }
        :hover {
          background: var(--primaryColorDark);
          transition: 0.3s;
          cursor: pointer;
          :nth-child(2) {
            background-color: var(--secondaryBackgroundColor);
          }
        }
      }
    }
  }
  .mobile-menu {
    position: absolute;
    right: 5%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    display: none;
    .icon {
      color: var(--fontPrimaryColor);
    }
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1004px) {
    .blur {
      transition: 0.3s;
      width: 0%;
      height: 230vh;
      backdrop-filter: blur(3px);
      position: fixed;
      left: -20em;
    }
    .blur.active {
      left: 0;
      width: 70%;
    }
    .nav-menu {
      background-color: var(--secondaryBackgroundColor);
      width: 70%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10%;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 1%;
      right: -100%;
      transition: 0.3s;
      z-index: 99;
      li {
        color: var(--fontPrimaryColor);
      }
      .activeTab {
        color: #ffffff;
      }
      .themeIcon {
        color: white;
      }
      .buttons {
        button {
          border: 1px solid var(--fontSecondaryColor);
        }
      }
    }
    .mobile-menu {
      display: block;
      z-index: 99;
    }
    .nav-menu.active {
      right: 1%;
    }
  }
  @media (max-width: 370px) {
    .nav-menu {
      width: 98%;
    }
  }
`;

export default Navbar;
