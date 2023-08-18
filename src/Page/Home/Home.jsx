// import React from 'react'
import { Container, Grid } from "@mui/material";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Product from "../../Components/Product/Product";
import "./home.scss";
import Footer from "../../Components/Footer/Footer";
import { products } from "../../dummy-data/Products";

const Home = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        className="contianer"
        style={{
          background: "#ffff",
          color: "black",
          padding: "0px 6rem",
          marginTop: "6rem",
        }}
      >
        <Banner />
        <h1>Shoes</h1>
        <Grid container spacing={2}>
          {products.shoes.map((data, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Product product={data} />
              </Grid>
            );
          })}
        </Grid>
        <h1>Backpack</h1>
        <Grid container spacing={2}>
          {products.bag.map((data, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Product product={data} />
              </Grid>
            );
          })} 
        </Grid>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
