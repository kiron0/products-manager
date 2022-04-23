import { TextField, Input, Button } from "@mui/material";
import React, { useState } from "react";

const UploadProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("image", image);
    fetch("https://products-manager0.herokuapp.com/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Products added succesfully")
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2 className="py-4">Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          sx={{ width: "50%" }}
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
        <TextField
          sx={{ width: "50%" }}
          id="outlined-basic"
          label="Rating"
          name="rating"
          variant="outlined"
          required
          onChange={(e) => setRating(e.target.value)}
          type="number"
        />{" "}
        <br />
        <br />
        <Input
          sx={{ width: "50%" }}
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
      <span className="text-success mt-4">{success}</span>
    </div>
  );
};

export default UploadProducts;
