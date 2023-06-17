import React from "react";
import styled from "styled-components";

const Signup = () => {
  return <Container>Signup</Container>;
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  .bgImg {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(0.4);
    z-index: -1;
  }
  form {
    border-radius: 10px;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8em;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px 1px #c4c4c4b7;
    width: 440px;
    h2 {
      font-weight: 300;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
      input {
        font-family: "Poppins", sans-serif;
        background: none;
        border: 1px solid white;
        font-size: 17px;
        padding: 7px 10px;
        margin-top: 20px;
        border-radius: 20px 0 0 20px;
        outline: none;
        color: white;
        ::placeholder {
          color: #bdbdbd;
        }
        :focus {
          color: white;
        }
        :nth-child(2) {
          border-radius: 0 20px 20px 0;
          margin-top: 10px;
        }
      }
      .icon {
        color: var(--fontPrimaryColor);
        background-color: white;
        padding: 10px;
        font-size: 2.6em;
        border-radius: 50% 0 0 50%;
        :nth-child(2) {
          border-radius: 0 50% 50% 0;
          cursor: pointer;
        }
      }
    }
    button {
      margin-top: 1.4em;
      font-size: 17px;
      font-family: "Poppins", sans-serif;
      padding: 7px 14px;
      border: none;
      background-color: var(--primaryColor);
      color: white;
      border-radius: 10px;
      :hover {
        background: var(--primaryColorDark);
        transition: 0.3s;
        cursor: pointer;
      }
    }
    p {
      color: #d3d3d3;
      margin-top: 20px;
    }
    .p2 {
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
    .link-styles {
      text-decoration: underline;
    }
  }
  @media (max-width: 470px) {
    padding: 0 3%;
    form {
      width: 100%;
      padding: 30px 8px;
    }
  }
`;

export default Signup;
