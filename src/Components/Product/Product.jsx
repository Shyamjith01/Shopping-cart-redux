/* eslint-disable react/prop-types */
import "./product.scss";
import shoe1 from "../../assets/products/shoe1.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import {toast } from 'react-toastify';

const Product = (props) => {
  useEffect(() => {
    console.log(shoe1,"ssisiie ");
    console.log(props.product,"produuuddd");
  }, []);
  const dispatch = useDispatch();

  const handleCart = (product) =>{
    console.log(product,"cart");
    dispatch(addToCart(product));
    toast.success("Product added", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  } 
  
  return (
    <div className="product">
        <div className="pro_img">
            <img src={props.product.imgSrc} alt="shoe1" />
        </div>
        <div className="info">
            <span className="name">{props.product.name}</span>
            <span className="desc">{props.product.desc}</span>
            <span className="price">${props.product.price}</span>
            <button onClick={()=>handleCart(props.product)}>Add to cart</button>
        </div>
    </div>
  )
}

export default Product