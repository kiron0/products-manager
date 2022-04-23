import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  //   console.log(product);
  const { _id, name, price, image } = product;

  const navigateToServiceDetail = (_id) => {
    navigate(`/product/${_id}`);
  };

  return (
    <Container>
      <div className="py-5 product">
        <img src={`data:image/png;base64,${image}`} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <button
          className="details-btn"
          onClick={() => navigateToServiceDetail(_id)}
        >
          Details
        </button>
      </div>
    </Container>
  );
};

export default Product;
