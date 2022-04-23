import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch(`https://products-manager0.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  return (
    <Container>
      <div className="py-5 single-product">
        <div>
          <img src={`data:image/png;base64,${products.image}`} alt="" />
        </div>
        <div className="product-info">
          <h3>{products.name}</h3>
          <h3>{products.brand}</h3>
          <p>Price: ${products.price}</p>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
