import React, { useState } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  createTheme,
  Avatar,
  Dialog,
  DialogContent,
  Box,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import { ThemeProvider } from "@emotion/react";
import { Document, Page } from "react-pdf";
import pdf from "../PrinceRaj_MERN_Stack.pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export const Navbar = () => {
  const [variant, setVariant] = useState("text");
  const [openDoc, setOpenDoc] = useState(false);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const handleResumeClick = () => {
    setOpenDoc(true);
  };

  const handleClose = () => {
    setOpenDoc(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            <div
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                <ListItemButton href="#home" key="Home">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton href="#about" key="About">
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>
                <ListItemButton
                  href="mailto:praj.nitskm@gmail.com"
                  key="Contact"
                >
                  <ListItemIcon>
                    <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItemButton>
                <ListItemButton href="#featured" key="Projects">
                  <ListItemIcon>
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
                </ListItemButton>
                <ListItemButton onClick={handleResumeClick} key="Resume">
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary="Resume" />
                </ListItemButton>
              </List>
            </div>
          </Drawer>
          <Avatar
            alt="Prince Raj"
            src="https://pbs.twimg.com/profile_images/1753673834467921920/I1aB0ypI_400x400.jpg"
            sx={{ marginRight: "10px" }}
          />
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Dancing Script",
            }}
          >
            {"_Raj :>"}
          </Typography>

          <Button
            variant={variant}
            color="inherit"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              "&:hover": {
                backgroundColor: "#00f5d4",
                borderColor: "#ccc",
                color: "black",
              },
            }}
            href="#home"
          >
            Home
          </Button>
          <Button
            variant={variant}
            color="inherit"
            sx={{
              display: { xs: "none", sm: "block", md: "block" },
              "&:hover": {
                backgroundColor: "#00f5d4",
                borderColor: "#ccc",
                color: "black",
              },
            }}
            href="#featured"
          >
            Featured projects
          </Button>
          <Button
            variant={variant}
            color="inherit"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              "&:hover": {
                backgroundColor: "#00f5d4",
                borderColor: "#ccc",
                color: "black",
              },
            }}
            href="#about"
          >
            About me
          </Button>
          <Button
            variant={variant}
            color="inherit"
            href="mailto:praj.nitskm@gmail.com"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              "&:hover": {
                backgroundColor: "#00f5d4",
                borderColor: "#ccc",
                color: "black",
              },
            }}
          >
            Contact me
          </Button>
          <Button
            onClick={handleResumeClick}
            variant={variant}
            color="inherit"
            sx={{
              display: { xs: "none", sm: "inline-flex", md: "inline-flex" },
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "#00f5d4",
                borderColor: "#ccc",
                color: "black",
              },
            }}
          >
            View Resume
            <BusinessCenterIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={openDoc} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <Document
            file={pdf}
            onLoadError={(error) => alert("Failed to load PDF file")}
          >
            <Page pageNumber={1} />
          </Document>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};
