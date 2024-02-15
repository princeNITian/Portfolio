import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { ArrowRight, GitHub } from "@mui/icons-material";

export default function CustomCard({
  cardNo = "01",
  cardSubtitle = "Frontend",
  technologies = ["React", "JavaScript", "HTML", "CSS"],
  icon = <GitHub />,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        transition: "background-color 0.3s, border-color 0.3s",
        border: "1px solid #00f5d4",
        backgroundColor: "#2b2c28",
        opacity: 0.8,
        color: "white",
        "&:hover": {
          backgroundColor: "#00f5d4",
          borderColor: "#ccc",
          color: "black",
        },
      }}
    >
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography
          variant="h3"
          component="div"
          sx={{ textAlign: "right", paddingRight: "10px" }}
        >
          {`${cardNo}`}
        </Typography>
        <IconButton>{icon}</IconButton>
        <Divider variant="middle" sx={{ my: 1 }}>
          <Typography variant="h6">{`${cardSubtitle}`}</Typography>
        </Divider>
        <Typography variant="body2" component="div">
          <List>
            {technologies.map((tech) => (
              <ListItem key={tech}>
                <ArrowRight />
                <ListItemText primary={tech} />
              </ListItem>
            ))}
          </List>
        </Typography>
      </CardContent>
    </Card>
  );
}
