import React from "react"
import { Grid } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'

const HomeBtn = () => {

  return(
    <Grid container direction='row' justifyContent='space-around' alignItems='center'
    sx={{ borderRadius: 1,
          color: 'primary.dark', backgroundColor: 'white',
          paddingTop: 0.5, paddingBottom: 0.5
          }}>

        <Grid>
          <HomeIcon></HomeIcon>
        </Grid>

        <Grid>
          Home
        </Grid>

    </Grid>
  )
}

export default HomeBtn