import React, { useState } from "react";
import styled from "styled-components";
import { BiLockAlt, BiUserCircle } from "react-icons/bi";
import { BsFillUnlockFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:5001/api/Register", {
        name: name,
        surname: surname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
      } else {
        console.log("Sign up failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container onSubmit={handleSignUp}>
      <motion.form
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
      >
        <Link to={"/"} className="link-styles">
          <p className="go-back">Go back</p>
        </Link>
        <BiUserCircle className="userIcon" />
        <h2>SIGN-UP</h2>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="name"
            placeholder="Enter Your Name"
          />
          <input
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            type="text"
            placeholder="Enter Your Surname"
          />
        </div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="lastNme"
            placeholder="Enter Your Email"
          />
          <input type="phone" placeholder="Enter Your Phone Number" />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter Your Password"
          />
          {passwordVisible === true ? (
            <BsFillUnlockFill className="icon" onClick={togglePassword} />
          ) : (
            <BiLockAlt className="icon" onClick={togglePassword} />
          )}
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
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
  margin-top: 2em;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    306deg,
    rgba(117, 70, 117, 1) 50%,
    rgba(3, 95, 139, 1) 100%
  );
  box-shadow: 7px 7px 13px #8f8f8f, -7px -7px 13px #ffffff;
  border-radius: 10px;
  form {
    background-color: #1f1e1e;
    margin-top: 3em;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    max-height: 700px;
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
    .userIcon {
      font-size: 3em;
    }
    h2 {
      font-size: 2em;
      font-weight: 400;
      margin: 10px 0;
    }
    div {
      display: flex;
      align-items: center;
      width: 90%;
      position: relative;
      gap: 10px;
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
        font-size: 15px;
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
      /* background: linear-gradient(#1f1e1e, #1f1e1e) padding-box,
        linear-gradient(to right, #00418b, darkorchid) border-box; */
      background-color: white;
      padding: 10px 20px;
      /* box-shadow: 1px 1px 4px #3a3838, -1px -1px 7px #757272; */
      color: black;
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        /* background: linear-gradient(#302f2f, #2c2b2b) padding-box,
          linear-gradient(to right, #00418b, darkorchid) border-box; */
        background-color: #808080;
      }
    }
  }
  @media (max-width: 570px) {
    padding: 0 3%;
    form {
      width: 100%;
      margin-bottom: 2em;
      padding-bottom: 2em;
      div {
        width: 80%;
        flex-direction: column;
        .icon {
          margin-top: 30px;
        }
      }
    }
  }
`;

export default Signup;
