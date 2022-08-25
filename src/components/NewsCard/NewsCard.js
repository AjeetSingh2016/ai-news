import React, {useState, useEffect} from "react";
import { Button, Typography, Stack, Box } from "@mui/material/";
import classNames from "classnames";
import "./style.css";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage }, i,
activeArticle,
}) => {


  

  return (
    <Box
      className={classNames("card", activeArticle === i ? "activecard" : null)}
      style={{ backgroundColor: "white", cursor: "pointer" }}
    >
      <Stack style={{ height: "100%", justifyContent: "space-between" }}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: "100%",
          }}
          alt="The house from the offer."
          src={urlToImage}
        />

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0px 10px 0px 10px",
            // backgroundColor: "red"
          }}
        >
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </Box>

        <Box style={{ padding: "0 10px" }}>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="h2">
            {description}
          </Typography>
        </Box>

        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10px",
            marginBottom: "5px",
          }}
        >
          <Button size="small" color="primary">
            Learn more
          </Button>
          <Typography variant="h5" color="textSecondary">
            {i + 1}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default NewsCard;

{
  /* <CardActionArea style={{display: "flex", flexDirection: "column",justifyContent: "space-around"}}>
        <CardMedia
          style={{
            height: 250,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          image={
            urlToImage ||
            "https://www.pngarts.com/files/3/URL-Chain-Link-PNG-Image-Background.png"
          }
        />


          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" color="textSecondary" component="h2">
              {new Date(publishedAt).toDateString()}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="h2">
              {source.name}
            </Typography>
          </div>

          <CardContent style={{backgroundColor: "pink"}}>
            
          </CardContent>

          <CardActions
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "yellow",
              paddingLeft: "10px 1",
            }}
          >
            <Button size="small" color="primary">
              Learn more
            </Button>
            <Typography variant="h5" color="textSecondary">
              {i + 1}
            </Typography>
          </CardActions>
      </CardActionArea> */
}
