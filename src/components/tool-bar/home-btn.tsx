import React from "react"
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'

const HomeBtn = () => {

  return(
    <Grid container direction='row' justifyContent='space-around' alignItems='center'
    sx={{ borderRadius: 3.5,
          color: 'primary.dark', backgroundColor: 'white' }}>

        <Grid sx={{ paddingLeft: 2 }}>
          <HomeIcon></HomeIcon>
        </Grid>

        <Grid sx={{ paddingLeft: 2, paddingRight: 2 }}>
          Home
        </Grid>

    </Grid>
  )
}

export default HomeBtn