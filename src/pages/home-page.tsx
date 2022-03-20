import React from "react"
import { Box } from "@mui/system"
import { Grid } from "@mui/material"
import ToolBar from "../components/tool-bar"
import EventContainer from "../components/event-container"
import eventData from "../event-data"
import orgData from "../org-Data"
import OrgContainer from "../components/org-container"

const HomePage = () => {

  let eventList = eventData?.map((data, index) => {
    return <EventContainer
    key={index}
    eventLogo={data.eventLogo}
    eventImage={data.eventImage}
    eventTitle={data.eventTitle}
    eventDescription={data.eventDescription}
    eventTime={data.eventTime}
    eventDate={data.eventDate}
    />
  })

  let orgList = orgData?.map((org, index)=>{
    return <OrgContainer
      key={index}
      orgName={org.name}
      orgLogo={org.image}
      />
  })

  return(
    // Box acts like the body of the page
    <Box sx={{width: `100%`}}>
      {/* The outer GRID acts as the controller for how the inner grids are separated */}
      <Grid container direction='row' justifyContent='space-evenly' alignItems='stretch' py={5}>

        {/* Tool Bar Column*/}
        <Grid item xs={2} sm={2} md={2}
        sx={{
          py:1
        }}>
          <ToolBar></ToolBar>
        </Grid>

        {/* Events Column*/}
        <Grid item xs={5} sm={5} md={5}
        sx={{}}>
          {eventList}
        </Grid>

        {/* Group Column */}
        <Grid item xs={4} sm={4} md={4}>
          {orgList}
        </Grid>

      </Grid>
    </Box>
  )
}

export default HomePage