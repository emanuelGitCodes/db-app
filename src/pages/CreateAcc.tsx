import React from "react"
import SignupForm from '../components/signup_components'
import Card from '@mui/material/Card'
import './signUpBG.css'


const CreateAccPage = () => {
    return(

        <div
            style={{
            width: "inherit", height: "100",
            display: "flex", justifyContent: "center",
            marginTop: "20%"
        }}>
          
          <div>
            <Card>
              <SignupForm></SignupForm>
            </Card>
          </div>
        
      </div>

    )
}

export default CreateAccPage