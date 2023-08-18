import { Grid } from "@mui/material";
import "./Banner.scss";
import BannerGameImg from "../../assets/banner_gameImg.png";
import BannerCard from "../Banner-card/BannerCard";
import watchImg from "../../assets/watch.png";
import bag from "../../assets/Bag.png";
import shoe from "../../assets/shoe.png";

const Banner = () => {
  return (
    <>
      <Grid container className="Banner">
        <Grid item xs={12} md={6} lg={7} className="left">
          <h1>X-box For Your Living Room</h1>
          <span>
            Contrary to populate belief,Lorem Ipsum is not simply random text.it
            has roots in a piece of classical latin literature.
          </span>
          <span className="price">$600</span>
          <button>Buy Now</button>
        </Grid>
        <Grid item xs={12} md={6} lg={5} className="right">
          <img src={BannerGameImg} alt="" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} >
          <BannerCard backgroundColor={'#FDB624'} imgSrc={watchImg} name={'Watch'} url={'/products/watch'} />
        </Grid>
        <Grid item xs={12} md={4} >
          <BannerCard backgroundColor={'#FB3D8A'} imgSrc={bag} name={'Bag'} url={'/products/bag'} />
        </Grid>
        <Grid item xs={12} md={4} >
          <BannerCard backgroundColor={'#1EC9DB'} imgSrc={shoe} name={'Shoe'} url={'/products/shoes'} />
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
