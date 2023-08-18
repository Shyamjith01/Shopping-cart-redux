import Header from "../../Components/Header/Header";
import { Container, Grid } from "@mui/material";
import "./cart.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotal,
  removeCartItem,
  updateQuantity,
} from "../../Redux/cartSlice";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

const Cart = () => {
  const cart = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);
 
  const dispatch = useDispatch();

  const handleRemoveItem = (product) => {
    dispatch(removeCartItem(product));
  };

  const handleCheckout = () =>{
    toast.success("Order placed", {
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

  const handleQuantityChange = (product, type) => { 
    dispatch(updateQuantity({ type: type, product: product }));
  };
  return (
    <div>
      <Header />
      <Container
        maxWidth="xl"
        className="header-contianer"
        style={{
          background: "#ffff",
          color: "black",
          padding: "0px 6rem",
          marginTop: "6rem",
        }}
      >
        <h1 className="header">Cart</h1>
        {cart.cartItems?.map((data, i) => {
          return (
            <div className="cart-product" key={i}>
              <div className="left">
                <div className="pro-img">
                  <img src={data.imgSrc} alt="" />
                </div>
                <div className="info">
                  <span className="name">{data.name}</span>
                  <span className="price">
                    ${data.price * data.productQuantity}
                  </span>
                  <div className="count">
                    <div
                      onClick={() => handleQuantityChange(data, "increment")}
                    >
                      <KeyboardArrowUpIcon />{" "}
                    </div>
                    <div className="num">{data.productQuantity}</div>
                    <div
                      onClick={() => handleQuantityChange(data, "decrement")}
                    >
                      <KeyboardArrowDownIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <button style={{background:'none',cursor:'pointer'}} onClick={()=>{handleRemoveItem(data)}}>
                  <DeleteIcon color="error" />
                </button>
              </div>
            </div>
          );
        })}
        {cart.cartItems.length == 0 ? (
          <div className="no-cart"> No Item found </div>
        ) : (
          <Grid container className="footer-checkout">
            <Grid item xs={12} lg={4} md={3} className="checkout">
              <div className="row">
                <span>Subtotal</span>
                <span>${cart.cartTotalAmount}</span>
              </div>
              <div>
                <button style={{cursor:'pointer'}} onClick={handleCheckout}>Check out</button>
              </div>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Cart;
