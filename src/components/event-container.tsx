import React from "react"
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import { Paper } from '@mui/material'
import { Avatar } from '@mui/material'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import EventTitle from "./event-components/event-title"
import EventTime from "./event-components/event-time"
import EventConfirmation from "./event-components/event-confirm"

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const EventContainer = (props: {
  eventTitle:string;
  eventLogo:string;
  eventDescription:string;
  eventTime:string;
  eventDate:string})=> {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, }}>
      <StyledPaper
        sx={{ my: 1, mx: 'auto', p: 2,color: 'white', backgroundColor: 'primary.dark' }}>
        <EventTitle title={props.eventTitle}></EventTitle>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{props.eventLogo}</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{props.eventDescription}</Typography>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='space-evenly' alignItems='stretch'
        sx={{ marginTop: 2.25, marginLeft: 2.2,  paddingBottom: 2 }}>

          <Grid item >
            <EventTime></EventTime>
          </Grid>

          <Grid item sx={{ marginTop: 1.5 }}>
            <Avatar>
              <EventConfirmation></EventConfirmation>
            </Avatar>

          </Grid>

        </Grid>
      </StyledPaper>
    </Box>
  );
}

export default EventContainer