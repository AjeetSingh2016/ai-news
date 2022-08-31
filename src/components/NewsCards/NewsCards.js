import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow} from '@mui/material';

const NewsCards = ({articles, activeArticle}) => {

  return (
    <Grow in>
      
      <Grid style={{
        padding: "0 5%",
        backgroundColor: "#000000",
        width: "100%",
        margin: "0",
      }}  container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3}
          style={{display: 'flex'}}>

            <NewsCard article={article} i={i} activeArticle={activeArticle}/>

          </Grid>
        ))}
      </Grid>

    </Grow>
  )
}



export default NewsCards