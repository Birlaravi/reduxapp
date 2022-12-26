import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { remove } from "../reducers/cartslice";
import { useSelector } from "react-redux";

function CartItem() {
  const cartProduct=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const handleRemove=(data)=>{
      dispatch(remove(data));
  }
  return (
    <>
      <h1 className="headStyle">React-redux Cart system</h1>
      <div className="products">
        {cartProduct.map((data) => (
          <div className="product-container" key={data.id}>
            <h3>{data.title}</h3>
            <div className="ProductImage">
              <img src={data.category.image} alt="" />
            </div>
            <h3>Price $ {data.price}</h3>
            <p>{data.description}</p>
            <button style={{ marginBottom: "5px" }} onClick={()=>handleRemove(data)}>RemoveTocart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CartItem;
