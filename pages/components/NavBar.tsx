import React from "react";
import Link from "next/link";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { createStyles } from "@mui/styles";

const classes:<{navlinks, logo, link}> = createStyles((theme: Theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
          <div className={classes.navlinks}>
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/about" className={classes.link}>
              About
            </Link>
            <Link href="/contact" className={classes.link}>
              Contact
            </Link>
            <Link href="/faq" className={classes.link}>
              FAQ
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

