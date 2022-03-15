import React from "react"
import { Grid } from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const ProfileBtn = () => {

  return(
    <Grid container direction='row' justifyContent='space-around' alignItems='center'
    sx={{ borderRadius: 1,
          color: 'primary.dark', backgroundColor: 'white',
          paddingTop: 0.5, paddingBottom: 0.5
          }}>

        <Grid>
          <AccountBoxIcon></AccountBoxIcon>
        </Grid>

        <Grid>
          Profile
        </Grid>

    </Grid>

  )
}

export default ProfileBtn