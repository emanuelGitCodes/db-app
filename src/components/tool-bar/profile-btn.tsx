import React from "react"
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const ProfileBtn = () => {

  return(
    <Grid container direction='row' justifyContent='space-around' alignItems='center'
    sx={{ borderRadius: 3.5,
          color: 'primary.dark', backgroundColor: 'white' }}>

        <Grid sx={{ paddingLeft: 2 }}>
          <AccountBoxIcon></AccountBoxIcon>
        </Grid>

        <Grid sx={{ paddingLeft: 2, paddingRight: 2 }}>
          Profile
        </Grid>

    </Grid>

  )
}

export default ProfileBtn