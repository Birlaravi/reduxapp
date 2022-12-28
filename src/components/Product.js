import React, { useEffect, useState } from "react";
import "./Product.css";
import { add } from "../reducers/cartslice";
import { useDispatch } from "react-redux";


export const Product = () => {
  const [Product, setProduct] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((result) => {
      result.json().then((data) => {
        setProduct(data);
      });

      console.log(Product);
    });
    // eslint-disable-next-line
  }, []);

  const handleAdd=(data)=>{
     dispatch(add(data))
  }
  return (
    <>
      <h1 className="headStyle">React-redux Cart system</h1>
      <div className="products">
        {Product.map((data) => (
          <div className="product-container" key={data.id}>
            <h3>{data.title}</h3>
            <div className="ProductImage">
              <img src={data.image} alt="" />
            </div>
            <h3>Price $ {data.price}</h3>
            <p>{data.description}</p>
            <button style={{ marginBottom: "5px" }} onClick={()=>handleAdd(data)}>AddTocart</button>
          </div>
        ))}
      </div>
    </>
  );
};
