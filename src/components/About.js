import React from "react";
import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";

const About = () => {
  return (
    <Card sx={{ backgroundColor: "#0f62fe" }} id="about">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          About Me
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="LTIMindtree"
              secondary={
                <Stack direction="column" spacing={0}>
                  <Typography variant="body1">Software Engineer</Typography>
                  <Typography variant="caption">
                    December 2021 - December 2023
                  </Typography>
                  <Typography variant="body2">
                    Created Portal for Customer Dashboard
                    <br /> Developed UI for Statement generation
                    <br /> Added MFA in Authentication/Authorization
                    <br /> Integrated real-time chat in existing product
                    <br />
                    Involved in Unit Testing
                  </Typography>
                </Stack>
              }
            />
          </ListItem>
          {/* Add more work experience items as needed */}
        </List>

        <List>
          <ListItem>
            <ListItemText
              primary="Burning Glass Technologies"
              secondary={
                <Stack direction="column" spacing={0}>
                  <Typography variant="body1">Intern</Typography>
                  <Typography variant="caption">
                    January 2021 - April 2021
                  </Typography>
                  <Typography variant="body2">
                    Deployed the LENS Xray( A Burning Glass Technologies
                    Product) on AWS EC2 <br />
                    Created a CI/CD pipeline using Teamcity to automate the
                    manual creation of AMI
                  </Typography>
                </Stack>
              }
            />
          </ListItem>
          {/* Add more internship items as needed */}
        </List>

        <List>
          <ListItem>
            <ListItemText
              primary="Bachelor of Technology"
              secondary={
                <Stack direction="column" spacing={0}>
                  <Typography variant="body1">NIT Sikkim</Typography>
                  <Typography variant="caption">
                    Graduated in August 2021
                  </Typography>
                  <Typography variant="body2">
                    Successfully earned a bachelor's degree in CSE
                  </Typography>
                </Stack>
              }
            />
          </ListItem>
          {/* Add more education items as needed */}
        </List>
      </CardContent>
    </Card>
  );
};

export default About;
