import React from 'react'
import {Stack, Typography, Box} from "@mui/material"
import "./pages/style.css"

const styles={
    navbar:{
        backgroundColor: "#000000",
        width: "100%",
        color: "white",
        height: "5vh",
        borderBottom: "0.3px solid gray",
    }, 
    logo:{
        height: "100%",
        width: "20%",
        // backgroundColor: "red",
        display: "flex",
        // justifyContent: "center",
        paddingLeft: "20px",
        alignItems: "center",
    }, 
    
}

const NavBar = () => {
  return (
    <Stack  style={styles.navbar}>
        <Box style={styles.logo}>
            <Typography fontSize="small" fontWeight={600} >Alan news</Typography>
        </Box>
    </Stack>
  )
}

export default NavBar