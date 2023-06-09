import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  const [activeTab, setActiveTab] = useState("home");
  const [name, setName] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      setName(decodedToken.Name);
      console.log(name);
    } else {
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/");
  };
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
        <Link to={"/"} className="link-styles">
          <li
            className={activeTab === "home" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("home")}
          >
            Home
          </li>
        </Link>
        <Link to={"/"} className="link-styles">
          <div
            className="submenu"
            onMouseLeave={() => setSubmenuOpen(false)}
            onMouseOver={() => setSubmenuOpen(true)}
          >
            <li
              className={activeTab === "products" ? "activeTab" : "nonActive"}
              onClick={() => setActiveTab("products")}
            >
              Products ▼
            </li>
            {submenuOpen === true ? (
              <div
                className="menu"
                onMouseOver={() => setSubmenuOpen(true)}
                onClick={() => setSubmenuOpen(true)}
              >
                <Link to={"/products/phones"} className="link-styles">
                  <p
                    className={
                      activeTab === "phones" ? "activeTab" : "nonActive"
                    }
                    onClick={() => setActiveTab("phones")}
                  >
                    Phones
                  </p>
                </Link>
                <p>Laptops</p>
                <p>Tablets</p>
                <p>Smartwatches</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link to={"/brands"} className="link-styles">
          <li
            className={activeTab === "brands" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("brands")}
          >
            Brands
          </li>
        </Link>
        <li>About Us</li>
        <li>Contact Us</li>
        {!isLoggedIn ? (
          <div className="buttons">
            <Link to={"/sign-up"}>
              <button>Sign Up</button>
            </Link>
            <Link to={"/log-in"}>
              <button>Log In</button>
            </Link>
          </div>
        ) : (
          <div className="userBtn">
            <BiUserCircle className="icon" />
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        )}
      </ul>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </Container>
  );
};
const Container = styled.div`
  color: #1a1a1a;
  background: #ececec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4%;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
  overflow-x: visible;
  transition: 0.2s;
  .logo {
    /* color: var(--fontSecondaryColor); */
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
    .submenu {
      position: relative;
      .menu {
        transition: 0.3s;
        display: flex;
        flex-direction: column;
        gap: 2em;
        position: absolute;
        background: #ececec;
        border-radius: 0 0 10px 10px;
        top: 23px;
        border-top: none;
        text-align: center;
        padding: 7px;
        left: -2.6em;
        p {
          border-radius: 10px;
          padding: 10px;
          :hover {
            background-color: #cecece;
          }
        }
      }
    }
    .themeIcon {
      font-size: 24px;
      cursor: pointer;
      margin-top: 10px;
      color: white;
    }
    .activeTab {
      color: var(--primaryColor);
      font-weight: 700;
    }
    .userBtn {
      :hover {
        button {
          display: flex;
        }
      }
      .icon {
        margin-top: 7px;
        font-size: 30px;
        cursor: pointer;
        position: relative;
      }
      button {
        position: absolute;
        display: none;
        right: 30px;
        padding: 7px 10px;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        border: none;
        background: var(--primaryColor);
        color: white;
        border-radius: 10px;
        :hover {
          background: var(--primaryColorDark);
          transition: 0.3s;
          cursor: pointer;
        }
      }
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
      color: #292929;
    }
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1004px) {
    .blur {
      transition: 0.3s;
      width: 100%;
      height: 230vh;
      backdrop-filter: blur(10px);
      position: absolute;
      left: -100%;
      z-index: 9;
    }
    .blur.active {
      left: -1em;
      width: 70%;
      overflow: visible;
    }
    .nav-menu {
      background-color: #2c2c2c;
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
        color: white;
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
      .icon {
        color: #6cb1eb;
      }
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
