import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = (props) => {
  const {arr} = props
  return <div data-testid="products-container">{arr.map((el) => {
    return (
      <div style={{border:"1px solid black",marginBottom:"25px",padding:"20px"}} key={el.id} >
        <img src={el.image} alt="f" />
        <p>{el.title}</p>
        <p>{`₹ ${el.price}`}</p>
        <p>{el.category}</p>
        </div>
      
    )
  })}</div>;
};

// export
export default ProductList;
