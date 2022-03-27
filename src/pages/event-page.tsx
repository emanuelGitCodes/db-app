import React from "react";
import ResponsiveAppBar from "../components/app-bar";
import ToolBar from "../components/tool-bar";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import eventData from "../event-data";
import SingleEventContainer from "../components/event-components/event-single"
import commentsData from "../comments-data";
import AlignItemsList from "../components/comments-components/comment";
import List from '@mui/material/List';
import { red } from "@mui/material/colors";

const bgColor = 'info.main'


const EventPage = () => {

  let eventItem = <SingleEventContainer
    eventLogo={eventData[0].eventLogo}
    eventOrg={eventData[0].eventOrg}
    eventImage={eventData[0].eventImage}
    eventTitle={eventData[0].eventTitle}
    eventDescription={eventData[0].eventDescription}
    eventTime={eventData[0].eventTime}
    eventDate={eventData[0].eventDate}
    />

  const commentList = commentsData?.map((item, index)=>{
    return <AlignItemsList
      key={index}
      name={item.userName}
      image={item.userImage}
      comment={item.userComment}
      date={item.commentDate}
      time={item.commentTime}
    />
  })

  return(
    // Box acts like the body of the page
    <Box sx={{width: `100%`}}>
      <ResponsiveAppBar/>
      {/* The outer GRID acts as the controller for how the inner grids are separated */}
      <Grid container direction='row' justifyContent='space-evenly' alignItems='stretch' py={1}>

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
          {eventItem}
        </Grid>

        {/* Comments Column */}
        <Grid item xs={4} sm={4} md={4} py={1}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor:'primary.dark', }}>
            {commentList}
          </List>
        </Grid>

      </Grid>
    </Box>
  )
}

export default EventPage