import React from "react";
import styled from "styled-components";
import { MdPrecisionManufacturing, MdHighQuality } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Guarantees = () => {
  return (
    <Container>
      <h2>
        <span>Our</span> Guarantees
      </h2>
      <div className="items">
        <div className="item">
          <MdPrecisionManufacturing className="icon" />
          <h3>Manufacturer's Warranty</h3>
          <p>
            You can provide information about the manufacturer's warranty that
            comes with the phones you sell. This typically covers defects in
            materials or workmanship for a specific period of time.
          </p>
        </div>
        <div className="item">
          <GiReturnArrow className="icon" />
          <h3>Return Policy</h3>
          <p>
            Offer a clear and customer-friendly return policy. Specify the
            conditions under which customers can return or exchange a phone if
            they are not satisfied or have any problems.
          </p>
        </div>
        <div className="item">
          <MdHighQuality className="icon" />
          <h3>Quality Assurance</h3>
          <p>
            Assure customers that the phones you sell are genuine and authentic.
            Mention that you source your phones from reliable and authorized
            suppliers, and provide information about any quality.
          </p>
        </div>
        <div className="item">
          <RiSecurePaymentLine className="icon" />
          <h3>Secure Payment</h3>
          <p>
            Emphasize the security measures you have implemented for online
            transactions. Mention the use of encryption technology, secure
            payment gateways, and much more.
          </p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 5%;
  margin-bottom: 10em;
  h2 {
    text-align: center;
    font-size: 3em;
    font-weight: 400;
    span {
      color: var(--primaryColor);
    }
  }
  .items {
    margin-top: 2em;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    .item {
      background-color: var(--secondaryBackgroundColor);
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      max-width: 270px;
      padding: 20px 10px;
      border-radius: 20px;
      :nth-child(1) {
        margin-top: 4em;
      }
      :nth-child(3) {
        margin-top: 4em;
      }
      h3 {
        color: var(--primaryColorDark);
        font-weight: 400;
      }
      .icon {
        font-size: 3em;
      }
      p {
        text-align: center;
      }
    }
  }
  @media (max-width: 610px) {
    .items {
      .item {
        max-width: 90%;
        :nth-child(1) {
          margin-top: 0;
        }
        :nth-child(3) {
          margin-top: 0;
        }
      }
    }
  }
`;

export default Guarantees;
