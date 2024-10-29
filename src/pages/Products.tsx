import { Component } from "react";
import FormProduct from "../components/FormProduct";

const Products = () => {
    return (
        <div className="container text-left">
            <h1 className="my-3"><i className="bi bi-boxes ms-5 me-5 mt-5"></i>Products</h1>
            <FormProduct />
        </div>
    );
};

export default Products;