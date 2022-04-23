import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, price, image, brand } = product;

  const navigateToProductDetail = (_id) => {
    navigate(`/product/${_id}`);
  };

  return (
    <Container>
      <div className="py-5 product">
        <img src={`data:image/png;base64,${image}`} alt="" />
        <h3>{name}</h3>
        <h3>{brand}</h3>
        <p>Price: ${price}</p>
        <button
          className="details-btn"
          onClick={() => navigateToProductDetail(_id)}
        >
          Details
        </button>
      </div>
    </Container>
  );
};

export default Product;
