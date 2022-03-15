import React from "react"
import { Grid } from "@mui/material"
import CommentIcon from '@mui/icons-material/Comment';

const MessagesBtn = () => {

  return(
    <Grid container direction='row' justifyContent='space-around' alignItems='center'
    sx={{ borderRadius: 1,
          color: 'primary.dark', backgroundColor: 'white',
          paddingTop: 0.5, paddingBottom: 0.5
          }}>

        <Grid>
          <CommentIcon></CommentIcon>
        </Grid>

        <Grid>
          Messages
        </Grid>

    </Grid>
  )
}

export default MessagesBtn