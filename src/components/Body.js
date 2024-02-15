import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import CustomCard from "./Card"; // Assume Card is a component you've created
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";

const Body = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "#131515", padding: "60px", opacity: 0.9 }}
    >
      <Grid item xs={12}>
        <Typography
          style={{ color: "gray", display: "flex", justifyContent: "center" }}
          variant="body2"
        >
          SERVICES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          What &nbsp;<span style={{ color: "#00f5d4" }}>I do</span>.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomCard
          cardNo="01"
          cardSubtitle="<Frontend>"
          technologies={["JavaScript", "HTML & CSS", "React.js"]}
          icon={<LaptopMacOutlinedIcon />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomCard
          cardNo="02"
          cardSubtitle="<Backend>"
          technologies={["Node.js", "Express.js", "MongoDB"]}
          icon={<EngineeringOutlinedIcon />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomCard
          cardNo="03"
          cardSubtitle="<Testing>"
          technologies={["Unit Testing", "Integration Testing", "API Testing"]}
          icon={<SettingsOutlinedIcon />}
        />
      </Grid>
    </Grid>
  );
};

export default Body;
