import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/system"
import { Grid } from "@mui/material"
// import ToolBar from "../components/tool-bar"
import EventContainer from "../components/event-container"
import eventData from "../event-data"
import OrgContainer from "../components/org-container"
import {store} from '../user-store'

interface IUniversity {
  u_id: number,
  name: string,
  location: string,
  description: string
}

const url = 'https://e7iize5d6c.execute-api.us-east-1.amazonaws.com/universities'

const HomePage = () => {
  const manager: any = React.useContext(store)
  const dispatch = manager.dispatch

  const navigate = useNavigate()
  const [listUniversities, setListUniversities] = useState <IUniversity[] | undefined> (undefined)

  let eventList = eventData?.map((data, index) => {
    return <div key={index} onClick={() => {
      navigate(`/event/${index}`) // update index to event index
    }}>
      <EventContainer
      key={index}
      eventLogo={data.eventLogo}
      eventOrg={data.eventOrg}
      eventImage={data.eventImage}
      eventTitle={data.eventTitle}
      eventDescription={data.eventDescription}
      eventTime={data.eventTime}
      eventDate={data.eventDate}
      />
    </div>
  })

  // returns a list of cards displaying a Universities name and logo
  let displayListUniversities = listUniversities?.map((org, index)=>{
    const result = org.name.trim()
      .split(/(?=[A-Z])/)
      .map(element => element.trim())

    const lettersCommas = result.map(element => element[0])

    let completeLogo = ''
    lettersCommas.join()
      .split(',')
      .map( element => completeLogo += element)

    return <OrgContainer
      key={index}
      orgName={org.name}
      orgLogo={completeLogo}
      orgLocation={org.location}
    />
  }) // end of displayListUniversities

  const getUniversities = async () => {
    const response = await fetch(url)
    const universities = await response.json()
    setListUniversities(universities)
  }

  useEffect(() => {
    getUniversities()
  }, [])

  useEffect(()=> {

  }, [listUniversities])

  return(
    // Box acts like the body of the page
    <Box sx={{width: `100%`}}>

      {/* The outer GRID acts as the controller for how the inner grids are separated */}
      <Grid container direction='row' justifyContent='space-evenly' alignItems='stretch' py={1}>

        {/* Tool Bar Column
        <Grid item xs={2} sm={2} md={2} sx={{ py:1 }}>
          <ToolBar/>
        </Grid> */}

        {/* Events Column*/}
        <Grid item xs={5} sm={5} md={5} sx={{}} >
          {eventList}
        </Grid>

        {/* Group Column */}
        <Grid item xs={4} sm={4} md={4}>
          {displayListUniversities}
        </Grid>

      </Grid>
    </Box>
  )
}

export default HomePage