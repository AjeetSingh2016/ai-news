import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import "./style.css";
import NavBar from "../NavBar";
import InfoCard from "../InfoCard";

const Home = () => {
  return (
    <Box style={styles.mainContainer}>
      <NavBar />
      <Box style={styles.container}>
        <Box
          sx={{
            height: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop:{xs:"0px", lg:"20px"},
            width:{xs:"100%", md:"60%"}
          }}
        >
          <Stack
          spacing={3}
            sx={{
              padding:{xs: "5px", lg:"45px"},
              display: "flex",
              alignItems: "space-between",
            }}
          >
            <Box>
              <Typography  className="text" sx={styles.text}>
                Hi, I'm Alan
              </Typography>
              <Typography className="text" sx={styles.text}>
                Your magician is ready!
              </Typography>
              <Typography  className="text" sx={styles.text}>
                Get your top headlines easily
              </Typography>
            </Box>

            <Typography className="textParagraph" variant="h7" color="#BEBEBE">
                Here you can get the top headlines from various sources by just
                giving voice command for example "Give the news from BBC SPORTS"
                and for the more information and commands go to "How to use"
                section.
              </Typography>

            <Box style={{display: 'flex', justifyContent: 'space-between', width: '100%', height: "50px"}}>

              <button className="buttonOne"  >
                How To Use
              </button>
              <button className="buttonTwo">
                Watch Video
              </button>
            </Box>
          </Stack>
          <Box 

          sx={{
          marginTop:{xs:"55px", lg:"0px"},
          display: "flex",
          width: '100%',
          height: "30%",
          alignItems:"center",
          flexWrap: "true",
          justifyContent:"space-around",
          }}>
            <InfoCard />

          </Box>
          
        </Box>

        <Box
          sx={{
            width: "40%",
            height: "100%",
            justifyContent: "center",
            backgroundColor: "transparent",
            alignItems: "center",
          }}
          className="container"
        >
          <Box
            className="image"
            sx={{
              backgroundColor: "transparent",
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "90%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  mainContainer: {
    className: "main",
    width: "100%",
    height: "95vh",
    minHeight: "100%",
    maxHeight: "100%",
    backgroundColor: "#000000",

  },
  container: {
    position: "relative",
    height: "100%",
    display: "flex",
    backgroundColor: "#000000",
  },
  text:{
    fontSize:{xs:"2.6rem", sm:"3rem", lg:"3rem"},
    color: "white",
  }
};

export default Home;
