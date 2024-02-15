import React from "react";
import { Grid, Typography, Paper, Stack, IconButton } from "@mui/material";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Header = () => {
  return (
    <Paper
      id="home"
      elevation={3}
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Stack
        direction="row"
        style={{ backgroundColor: "#000", opacity: 0.8, padding: "30px" }}
      >
        <Grid container spacing={3} style={{ marginBottom: "32px" }}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              style={{ color: "white", marginTop: "48px" }}
            >
              Hi, I am{" "}
              <span
                className="animated-span"
                style={{ color: "#00f5d4", fontFamily: "Dancing, cursive" }}
              >
                Prince Raj
              </span>
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              style={{ color: "gray", marginBottom: "24px" }}
            >
              A seasoned{" "}
              <span style={{ color: "#00f5d4" }}>Fullstack Developer</span>{" "}
              transforming ideas into stunning<br></br> digital experiences.
              Let's create something amazing!
            </Typography>
            <Stack spacing={2} direction="row" justifyContent="center">
              <IconButton
                href="https://github.com/princeNITian"
                sx={{ color: "white" }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/iamprinceraj"
                sx={{ color: "white" }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://twitter.com/im_princeraj"
                sx={{ color: "white" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://instagram.com/carelessraj"
                sx={{ color: "white" }}
              >
                <Instagram />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default Header;
