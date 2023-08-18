import Header from '../../Components/Header/Header';
import { Container, Grid } from "@mui/material";
import { useParams } from 'react-router-dom';
import { products } from "../../dummy-data/Products";
import Product from '../../Components/Product/Product';
const Products = () => {

  const {product} = useParams();
 
  return (
    <div>
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
        <h1>{product}</h1>
        <Grid container spacing={2}>
          {products[product].map((data, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Product product={data} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default Products