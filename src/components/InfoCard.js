import React from "react";
import { Typography, Box } from "@mui/material";

const InfoCard = () => {
  return (
    <Box sx={{ width: "80%", height: "100%", backgroundColor: "#111111", borderRadius: "10px",
    boxShadow: "rgba(200, 200, 200, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",

    }}>
      <Typography color="white" color="pink">
          Sample Commands
      </Typography>

      <Box style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around",alignItems: "center"}}>
      <Typography color="white" textAlign="left">
            Try saying ' What is your name..... '
        </Typography>
        <Typography color="white">
            Try saying ' Give the news from BBC Sports..... '
        </Typography>
        <Typography color="white">
            Try saying ' Give the news from ABC News..... '
        </Typography>
        <Typography color="white">
            Try saying ' Give the news from Buzz Feed..... '
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
