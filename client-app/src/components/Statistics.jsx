import React from "react";
import styled from "styled-components";

const Statistics = () => {
  return (
    <Container>
      <div className="items">
        <div className="item">
          <h3>800+</h3>
          <p>LOYAL CUSTOMERS</p>
        </div>
        <div className="item">
          <h3>930+</h3>
          <p>PRODUCTS</p>
        </div>
        <div className="item">
          <h3>800+</h3>
          <p>DONE DEALS</p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 2% 3em 2%;
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5em;
    flex-wrap: wrap;
    .item {
      display: flex;
      gap: 10px;
      align-items: center;
      h3 {
        background: var(--gradientBackground);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 2em;
      }
      p {
        color: #808080;
        font-weight: 600;
      }
    }
  }
  @media (max-width: 540px) {
    .items {
      flex-direction: column;
      gap: 1em;
    }
  }
`;

export default Statistics;
