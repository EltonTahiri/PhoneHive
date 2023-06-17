import React, { useState } from "react";
import styled from "styled-components";
import { BiLockAlt } from "react-icons/bi";
import { BsFillUnlockFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/store";

const Login = () => {
  //* form passowrd visibility toggle jwt
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:5001/api/login", {
        email: email,
        password: password,
      });
      if (response.status === 200 && response.data.token) {
        dispatch(login(response.data.token));
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        console.log("Login failed");
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container onSubmit={handleLogIn}>
      <motion.form
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
      >
        <Link to={"/"} className="link-styles">
          <p className="go-back">Go back</p>
        </Link>
        {/* add the box shadows */}
        <h2>LOG-IN</h2>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Your Email..."
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter Your Password..."
          />
          {passwordVisible === true ? (
            <BsFillUnlockFill className="icon" onClick={togglePassword} />
          ) : (
            <BiLockAlt className="icon" onClick={togglePassword} />
          )}
        </div>
        <h4>
          Don't have an account?
          <Link to={"/sign-up"} className="link-styles">
            {" "}
            <span>Sign Up</span>
          </Link>
        </h4>
        <button type="submit">Login</button>
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
  margin-top: 4%;
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
    height: 450px;
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
      margin-top: 1em;
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
      margin-top: 20px;
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

export default Login;
