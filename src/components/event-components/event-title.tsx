import React from "react"
import { Box } from "@mui/material"

const EventTitle = (props: {title:string}) => {

  return(
    <Box sx={{ fontSize: 25, fontWeight:'700', paddingBottom: 1.2}}>
      {props.title}
    </Box>
  )
}

export default EventTitle