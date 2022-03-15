import React from "react"
import { Grid } from "@mui/material"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

const NotificationBtn = () => {

  return(
    <Grid container direction='row' justifyContent='space-around' alignItems='center'
    sx={{ borderRadius: 1,
          color: 'primary.dark', backgroundColor: 'white',
          paddingTop: 0.5, paddingBottom: 0.5
          }}>

        <Grid>
           <NotificationsActiveIcon></NotificationsActiveIcon>
        </Grid>

        <Grid>
          Notification
        </Grid>

    </Grid>
  )
}

export default NotificationBtn