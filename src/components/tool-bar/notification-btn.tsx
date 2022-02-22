import React from "react"
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

const NotificationBtn = () => {

  return(
    <Grid container direction='row' justifyContent='space-around' alignItems='center'
    sx={{ borderRadius: 3.5, paddingTop:0.3,
          color: 'primary.dark', backgroundColor: 'white' }}>

        <Grid sx={{ paddingLeft: 2 }}>
           <NotificationsActiveIcon></NotificationsActiveIcon>
        </Grid>

        <Grid sx={{ paddingLeft: 2, paddingRight: 2 }}>
          Notification
        </Grid>

    </Grid>
  )
}

export default NotificationBtn