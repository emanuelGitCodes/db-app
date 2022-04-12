import React from "react"
import { Box } from "@mui/material"
import SignInComponents from '../components/singIn-components'
import {Paper, Card} from "@mui/material"
import './signinBG.css'

const SignInPage = () => {
  return(
      <div
        style={{
        width: "inherit", height: "100",
        display: "flex", justifyContent: "center",
        marginTop: "20%"
        }}>
          
          <div>
            <Card>
              <SignInComponents></SignInComponents>
            </Card>
          </div>
        
      </div>

    

  )
}

export default SignInPage