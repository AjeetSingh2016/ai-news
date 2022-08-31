import React from "react";
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
      style={{ backgroundColor: "#111111", cursor: "pointer" }}
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
          <Typography variant="body2" component="h2" color="	#BEBEBE">
            {new Date(publishedAt).toDateString()}
          </Typography>

          <Typography variant="body2" color="	#BEBEBE" component="h2">
            {source.name}
          </Typography>
        </Box>

        <Box style={{ padding: "0 10px" }}>
          <Typography gutterBottom variant="h5" color="white">
            {title}
          </Typography>

          <Typography variant="body2" color="white" component="h2">
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
          <Typography variant="h5" color="white">
            {i + 1}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default NewsCard;


