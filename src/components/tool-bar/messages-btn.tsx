import React from "react"
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import CommentIcon from '@mui/icons-material/Comment';

const MessagesBtn = () => {

  return(
   <Grid container direction='row' justifyContent='space-around' alignItems='center'
    sx={{ borderRadius: 3.5, paddingTop:0.3,
          color: 'primary.dark', backgroundColor: 'white' }}>

        <Grid sx={{ paddingLeft: 2 }}>
          <CommentIcon></CommentIcon>
        </Grid>

        <Grid sx={{ paddingLeft: 2, paddingRight: 2 }}>
          Messages
        </Grid>

    </Grid>
  )
}

export default MessagesBtn