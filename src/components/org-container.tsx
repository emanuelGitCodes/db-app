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
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const OrgContainer = (props: {
  orgName:string;
  orgLogo:string;
  })=> {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, }}>
      <StyledPaper sx={{
        my: 1, mx: 'auto', p: 2,
        color: 'white', backgroundColor: 'primary.dark'
        }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{props.orgLogo}</Avatar>
          </Grid>
          <Grid item xs>
            <OrgName title={props.orgName}></OrgName>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}

export default OrgContainer