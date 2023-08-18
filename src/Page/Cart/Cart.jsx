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
} from "../../Components/Redux/cartSlice";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const cart = useSelector((state) => {
    console.log(state.cart, "Staaateee2344 ");
    return state.cart;
  });

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  console.log(cart, "Cartitem1245");

  const dispatch = useDispatch();

  const handleRemoveItem = (product) => {
    dispatch(removeCartItem(product));
  };

  const handleQuantityChange = (product, type) => {
    console.log(product, "proooo");
    dispatch(updateQuantity({ type: type, product: product }));
  };
  console.log(cart, "cart items");
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
                <button style={{background:'none'}} onClick={()=>{handleRemoveItem(data)}}>
                  <DeleteIcon color="error" />
                </button>
              </div>
            </div>
          );
        })}
        {cart.cartItems.length == 0 ? (
          <div> No Item found </div>
        ) : (
          <Grid container className="footer-checkout">
            <Grid item xs={12} lg={4} md={3} className="checkout">
              <div className="row">
                <span>Subtotal</span>
                <span>${cart.cartTotalAmount}</span>
              </div>
              <div>
                <button>Check out</button>
              </div>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Cart;