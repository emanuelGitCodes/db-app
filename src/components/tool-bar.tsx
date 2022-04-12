import * as React from 'react'
import { Grid } from "@mui/material"
import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import HomeBtn from "../components/tool-bar/home-btn"
import NotificationBtn from './tool-bar/notification-btn'
import MessagesBtn from './tool-bar/messages-btn'
import ProfileBtn from './tool-bar/profile-btn'

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  maxWidth: 500,
  color: theme.palette.text.primary,
}));

const ToolBar = ()=> {
  return (
      <StyledPaper
        sx={{
          my: 'auto', mx: 'auto', p: 2,
          color: 'white', backgroundColor: 'primary.dark'
        }}>
        <Grid container direction={'column'} justifyContent={'flex-start'} spacing={1.5}>
          <Grid item>
            <HomeBtn />
          </Grid>

          <Grid item>
            <NotificationBtn />
          </Grid>

          <Grid item>
            <MessagesBtn />
          </Grid>

          <Grid item>
            <ProfileBtn />
          </Grid>

        </Grid>
      </StyledPaper>
  )
}

export default ToolBar