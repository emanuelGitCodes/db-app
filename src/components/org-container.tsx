import React from "react"
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import { Paper } from '@mui/material'
import { Avatar } from '@mui/material'
import { styled } from '@mui/material/styles'
import OrgName from "./org-components/org-name"

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    maxWidth: 500,
    color: theme.palette.text.primary,
  })
)

const OrgContainer = (props: {
    orgName: string,
    orgLogo: string,
    orgLocation: string
  }) => {

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', p: 'auto' }}>
      <StyledPaper
        sx={{
          my: 1, mx: 'auto', p: 2,
          color: 'white', backgroundColor: 'primary.dark'
        }}>
        <Grid container wrap="nowrap" spacing={1.5}>
          <Grid item> <Avatar>{props.orgLogo}</Avatar> </Grid>

          <Grid item>
            <Grid container direction="column">
              <Grid item> <OrgName title={props.orgName} /> </Grid>
              <Grid item> <p>{props.orgLocation}</p> </Grid>
            </Grid>
          </Grid>

        </Grid>
      </StyledPaper>
    </Box>
  )
}

export default OrgContainer