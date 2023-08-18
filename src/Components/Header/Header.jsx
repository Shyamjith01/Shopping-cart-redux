// eslint-disable-next-line no-unused-vars
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./header.scss";
import cartSvg from "../../assets/cart.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const pages = [
  { name: "Home", url: "/" },
  { name: "Shoes", url: "/products/shoes" },
  { name: "Backpack", url: "/products/bag" },
  { name: "Contact", url: "/contact-us" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const value = useSelector((state) => {
    return state.cart.cartItems;
  });
  return (
    <AppBar position="fixed">
      <Container
        maxWidth="xl"
        className="header-contianer"
        style={{ background: "#ffff", color: "black", padding: "0px 6rem" }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="center">
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page,i) => (
                  <Link to={page.url} key={i}>
                    <MenuItem key={page.name}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button color="inherit" href="/">
                Home
              </Button>
              <Button color="inherit" href="/products/shoes">
                Shoes
              </Button>
              <Button color="inherit" href="/products/bag">
                Backpack
              </Button>
              <Button color="inherit" href="/contact-us">
                Contact
              </Button>
            </Box>
          </div>
          <div className="right">
            <Badge badgeContent={value?.length} color="primary">
              <Link to={"/cart"}>
                <img src={cartSvg} alt="" />
              </Link>
            </Badge>
          </div>
        </header>
      </Container>
    </AppBar>
  );
}

export default Header;
