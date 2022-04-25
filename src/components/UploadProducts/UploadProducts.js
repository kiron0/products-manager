import { TextField, Input, Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./UploadProducts.css";

const UploadProducts = () => {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);
    fetch("https://products-manager0.herokuapp.com/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Products added succesfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="product-container">
      <h2 className="py-4">Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Brand Name"
          variant="outlined"
          name="brand"
          required
          onChange={(e) => setBrand(e.target.value)}
        />
        <br />
        <br />
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Phone Name"
          variant="outlined"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Price"
          variant="outlined"
          name="price"
          required
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        />
        <br />
        <br />
        <Input
          sx={{ width: "90%" }}
          accept="image/*"
          name="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />{" "}
        <br />
        <br />
        <Button variant="contained" type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default UploadProducts;
