import React from "react"
import { Box } from "@mui/material"

const EventDescription = (props: {description:string}) => {

  return(
    <Box sx={{ marginTop: 2, marginLeft: 5, fontSize: 16}}>
      {props.description}
    </Box>
  )
}

export default EventDescription