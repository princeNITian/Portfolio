import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  CardMedia,
  Box,
  styled,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";

const useStyles = styled(({ theme }) => ({
  card: {
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

const projects = [
  {
    title: "BlogVista",
    description:
      "BlogVista is your go-to web application, crafted to empower you in managing and organizing your unique collection of blogs. Experience the freedom to store, categorize, rate, and summarize your favorite reads based on your personal journey.",
    usage: [
      "- Easily add, edit, and delete blogs, tailoring them to suit your preferences and experiences.",
      "- Organize your blogs efficiently with an intuitive tagging system for easy categorization.",
      "- Rate and share your thoughts on each blog, contributing to a community-driven evaluation of reading experiences.",
    ],
    image:
      "https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exploreLink: "https://blog-vista-rho.vercel.app/",
  },
  {
    title: "Chat App",
    description:"This real-time chat app lets users join a chat room and chat with themselves instantly. Built with Node.js and Socket.IO for real-time messaging, it uses HTML, CSS, and jQuery for the frontend, offering a basic yet interactive chat interface. Messages typed in the chat room are instantly displayed, demonstrating WebSocket technology for real-time communication, making it a foundation for more advanced chat apps.",
    usage: [
      "Collaborative Note-Taking: Users can collaborate in real-time during meetings or brainstorming sessions, sharing ideas and creating a document together.",
      "Customer Support: Businesses can offer real-time customer support, allowing customers to chat with agents for instant assistance or access automated responses for common queries.",
      "Online Events: The app can host webinars or virtual conferences, enabling attendees to interact with speakers and each other in real-time.",
    ],
    image:
      "https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=600",
    exploreLink: "https://github.com/princeNITian/node-chat-app",
  },
  // Add more projects as needed
];

const Featured = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} id="featured">
      {projects.map((project, index) => (
        <Grid item xs={12} key={index}>
          <Card className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="400"
                  image={project.image}
                  alt={project.title}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {project.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" component="div" gutterBottom>
                    Usage:
                  </Typography>
                  <List>
                    {project.usage.map((use, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={use} />
                      </ListItem>
                    ))}
                  </List>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.exploreLink}
                    >
                      Explore
                    </Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Featured;
