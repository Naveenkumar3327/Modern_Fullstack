import React, { useState } from "react";
import "./Home.css";

const Home = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);

        // Clear form after submit
        setProduct({ name: "", price: "", description: "" });
    };

    return (
        <div className="home-container">
            <h1 className="hero-text">
                <span className="floating"></span>
            </h1>

            <form className="product-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    value={product.price}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Product Description"
                    value={product.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Add Product</button>
            </form>

            <div className="image-container">

            </div>
        </div>
    );
};

export default Home;
