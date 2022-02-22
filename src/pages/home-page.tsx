import React from "react"
import { Box } from "@mui/system"
import { Grid } from "@mui/material"
import TestBox from "../components/test-box"
import ToolBar from "../components/tool-bar"
import EventContainer from "../components/event-container"

const HomePage = () => {

  return(
    // Box acts like the body of the page
    <Box sx={{width: `100%`}}>
    {/* The outer GRID acts as the controller for how the inner grids are separated */}
      <Grid container direction='row' justifyContent='space-evenly' alignItems='stretch'>
{/* Tool Bar Column*/}
        <Grid item xs={2} sm={2} md={2}
        sx={{ backgroundColor:'primary.dark', borderRadius: 1}}>
          <ToolBar></ToolBar>
        </Grid>

{/* Events Column*/}
        <Grid item xs={5} sm={5} md={5}
        sx={{}}>
          <EventContainer></EventContainer>
        </Grid>

{/* Group Column */}
        <Grid item xs={4} sm={4} md={4}
        sx={{color:'white', backgroundColor:'primary.dark'}}>
          <TestBox></TestBox>
        </Grid>

      </Grid>
    </Box>
  )
}

export default HomePage