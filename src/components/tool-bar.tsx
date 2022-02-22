import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material"
import HomeBtn from "../components/tool-bar/home-btn"
import NotificationBtn from './tool-bar/notification-btn'
import MessagesBtn from './tool-bar/messages-btn'
import ProfileBtn from './tool-bar/profile-btn'

const ToolBar = ()=> {
  return (
    // <Box
      // sx={{ width: '90%', height: 150, textAlign: 'center',
      //       marginTop:1, paddingTop: 1,
      //       fontSize: '1.2em', fontWeight: '700' }}>

      <Grid container direction='column' justifyContent='flex-start' alignItems='center'>

        <Grid item p={1} sx={{ marginTop: 1}}>
          <HomeBtn></HomeBtn>
        </Grid>

        <Grid item p={1} sx={{ marginTop: 1 }}>
          <NotificationBtn></NotificationBtn>
        </Grid>

        <Grid item p={1} sx={{ marginTop: 1 }}>
          <MessagesBtn></MessagesBtn>
        </Grid>

        <Grid item p={1} sx={{ marginTop: 1 }}>
          <ProfileBtn></ProfileBtn>
        </Grid>
      </Grid>
  )
}

export default ToolBar