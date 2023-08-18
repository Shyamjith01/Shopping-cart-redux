/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./bannercard.scss";
const BannerCard = (props) => {
  return (
    <Link to={props.url}>
      <div
        className="banner-card"
        style={{
          backgroundColor: props.backgroundColor,
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>{props.name}</h2>
        <div className="proImg">
          <img src={props.imgSrc} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default BannerCard;
