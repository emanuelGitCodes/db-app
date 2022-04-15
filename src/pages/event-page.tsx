import React from "react";
import { store } from "../user-store"
// import ToolBar from "../components/tool-bar";
import { Box } from "@mui/system";
import { Grid, Divider, List } from "@mui/material";
import eventData from "../event-data";
import SingleEventContainer from "../components/event-components/event-single"
import commentsData from "../comments-data";
import AlignItemsList from "../components/comments-components/comment";

const EventPage = () => {
  const manager: any = React.useContext(store)
  const dispatch = manager.dispatch

  console.log(manager.state?.checkingEvent)

  const eventItem = eventData[manager.state.checkingEvent]

  let eventComponent = <SingleEventContainer
    eventLogo={eventItem.eventLogo}
    eventOrg={eventItem.eventOrg}
    eventImage={eventItem.eventImage}
    eventTitle={eventItem.eventTitle}
    eventDescription={eventItem.eventDescription}
    eventTime={eventItem.eventTime}
    eventDate={eventItem.eventDate}
    />

  const commentList = commentsData?.map((item, index)=>{
    return<>
      <AlignItemsList
        key={index}
        name={item.userName}
        image={item.userImage}
        comment={item.userComment}
        date={item.commentDate}
        time={item.commentTime}
      />
      <Divider key={commentsData.length + index} light />
    </>
  })

  return(
    // Box acts like the body of the page
    <Box sx={{width: `100%`}}>
      {/* The outer GRID acts as the controller for how the inner grids are separated */}
      <Grid container direction='row' justifyContent='space-evenly' alignItems='stretch' py={1}>

        {/* Tool Bar Column*/}
        {/* <Grid item xs={2} sm={2} md={2}
        sx={{
          py:1
        }}>
          <ToolBar></ToolBar>
        </Grid> */}

        {/* Events Column*/}
        <Grid item xs={5} sm={5} md={5}
        sx={{}}>
          {eventComponent}
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