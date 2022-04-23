import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Welcome to detail: {id}</h2>
    </div>
  );
};

export default SingleProduct;
