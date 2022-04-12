import React from "react"
import { Box } from "@mui/material"

const OrgName = (props: {title:string}) => {

  return(
    <Box sx={{ fontSize: 25, fontWeight:'700'}}>
      {props.title}
    </Box>
  )
}

export default OrgName