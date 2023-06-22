import React, { useState } from "react";
import styled from "styled-components";
import { BiLockAlt } from "react-icons/bi";
import { BsFillUnlockFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <Container>
      <motion.form
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
      >
        <Link to={"/"} className="link-styles">
          <p className="go-back">Go back</p>
        </Link>
        {/* add the box shadows */}
        <h2>SIGN-UP</h2>
        <div>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div>
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter Your Password"
          />
          {passwordVisible === true ? (
            <BsFillUnlockFill className="icon" onClick={togglePassword} />
          ) : (
            <BiLockAlt className="icon" onClick={togglePassword} />
          )}
        </div>
        <div>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Confirm Your Password"
          />
          {passwordVisible === true ? (
            <BsFillUnlockFill className="icon" onClick={togglePassword} />
          ) : (
            <BiLockAlt className="icon" onClick={togglePassword} />
          )}
        </div>
        <h4>
          Already have an account?
          <Link to={"/log-in"} className="link-styles">
            {" "}
            <span>Log In</span>
          </Link>
        </h4>
        <button type="submit">Sign Up</button>
      </motion.form>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 70%;
  height: auto;
  background: linear-gradient(
    306deg,
    rgba(117, 70, 117, 1) 50%,
    rgba(3, 95, 139, 1) 100%
  );
  box-shadow: 7px 7px 13px #8f8f8f, -7px -7px 13px #ffffff;
  margin-top: 3%;
  border-radius: 10px;
  form {
    background-color: #1f1e1e;
    margin-top: 3em;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
    height: 520px;
    .go-back {
      align-self: flex-start;
      text-align: left;
      padding: 7px 10px;
      color: gray;
      cursor: pointer;
      :hover {
        color: white;
      }
    }
    h2 {
      font-size: 2em;
      font-weight: 400;
      margin-top: 10px;
    }
    div {
      display: flex;
      align-items: center;
      width: 60%;
      position: relative;
      input {
        margin-top: 12px;
        border-radius: 20px;
        border: 2px solid transparent;
        background: linear-gradient(#1f1e1e, #1f1e1e) padding-box,
          linear-gradient(to right, #00418b, darkorchid) border-box;
        padding: 14px 20px;
        font-family: "Poppins", sans-serif;
        outline: none;
        color: white;
        font-size: 16px;
        width: 100%;
      }
      .icon {
        position: absolute;
        right: 17px;
        margin-top: 10px;
        font-size: 20px;
        cursor: pointer;
      }
    }
    h4 {
      color: gray;
      font-weight: 300;
      padding: 10px;
      span {
        color: #cacaca;
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }
    }
    button {
      margin-top: 17px;
      border-radius: 20px;
      border: 2px solid transparent;
      background: linear-gradient(#1f1e1e, #1f1e1e) padding-box,
        linear-gradient(to right, #00418b, darkorchid) border-box;
      padding: 10px 20px;
      box-shadow: 1px 1px 4px #3a3838, -1px -1px 7px #757272;
      color: white;
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        background: linear-gradient(#302f2f, #2c2b2b) padding-box,
          linear-gradient(to right, #00418b, darkorchid) border-box;
      }
    }
  }
  @media (max-width: 570px) {
    width: 94%;
    form {
      width: 100%;
      div {
        width: 80%;
      }
    }
  }
`;

export default Signup;
