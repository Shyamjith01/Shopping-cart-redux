import React from "react";
import { Container, Grid } from "@mui/material";
import Header from "../../Components/Header/Header";
import TextField from "@mui/material/TextField";
import "./contact.scss";

const Contact = () => {
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
        <div className="contact-header">
          <h1>Contact Us</h1>
          <span>Please fill this form in a decent manner</span>
        </div>
        <div className="contact-form">
          <form>
            <div className="input-div">
              <label htmlFor="">Full Name</label>
              <input type="text" />
            </div>
            <div className="input-div">
              <label htmlFor="">E-mail</label>
              <input type="email" />
            </div>
            <div className="input-div">
              <label htmlFor="">Message</label>
              <textarea rows="4" />
            </div>
          </form>
        </div>
        <div className="footer-btn">
            <button>Submit</button>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
