import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import "./style.css";
import NavBar from "../NavBar";

const Home = () => {
  return (
    <Box style={styles.mainContainer}>
      <NavBar />
      <Box style={styles.container}>
        <Box style={styles.details}>
          <Stack
            spacing={4}
            style={{
              padding: "45px",
            //   backgroundColor: "white",
              display: "flex",
              alignItems: "space-between",
            }}
          >
            <Box>

              <Typography className="text" variant="h2">
                Hi, I'm Alan
              </Typography>
              <Typography className="text" variant="h2">
                Your magician is ready!
              </Typography>
              <Typography className="text" variant="h2">
                Get your top headlines easily
              </Typography>

            </Box>

            <Box>

              <Typography variant="h7" color="gray">
                  Here you can get the top headlines from various sources by just giving voice command for example "Give the news from BBC SPORTS" and for the more information and commands go to "How to use" section.
              </Typography>

            </Box>

            <Box>

              <Button style={styles.button} variant="contained" >How to use</Button>

            </Box>

          </Stack>
        </Box>

        <Box style={styles.imageContainer}>
          <Box className="image" style={styles.image} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  mainContainer: {
    className: "main",
    width: "100%",
    height: "100vh",
    minHeight: "100%",
    maxHeight: "100%",
  },
  container: {
    // position: "relative",
    // backgroundColor: "red",
    height: "90%",
    display: "flex",
  },
  details: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    // backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  imageContainer: {
    // backgroundColor: "white",
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // backgroundColor: "white",
    width: "80%",
    height: "90%",
  },
  button:{
      borderRadius: "12px",
  }
};

export default Home;
