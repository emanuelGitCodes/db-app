  import React from "react"
  import { Box } from "@mui/material"
  import SignInComponents from '../components/singIn-components'

  const SignInPage = () => {

    return(
      <Box
        component='div'
        sx={{
          backgroundColor: '#F39189',
          paddingTop:'5em', paddingBottom: '5em',
          height:'56em', width:'25.875em',
          overflowY:'hidden'}}>
          <SignInComponents></SignInComponents>
      </Box>
    )
  }

  export default SignInPage
