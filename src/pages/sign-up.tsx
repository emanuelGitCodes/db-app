import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box, Button,
  FilledInput, FormControl,
  Grid,
  IconButton, InputAdornment, InputLabel} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { store } from '../user-store'

interface INewUser {
  userId: number,
  userName: string,
  password: string,
  firstName: string,
  lastName: string,
  university: string,
  showPassword: boolean
}

interface IUserData {
  logIn: boolean,
  userName: string,
  firstName: string,
  last_name: string
}
interface IContextType {
  state: IUserData,
  dispatch: React.Dispatch<{type: string, value: any}>
}

const userURL: string = 'https://ekmqadzwwi.execute-api.us-east-1.amazonaws.com/users'

const SignUpPage = () => {

  const manager: any = React.useContext(store)
  const dispatch = manager.dispatch

  const navigate = useNavigate()
  const [isSubmit, setSubmit] = useState<boolean> (false)
  const [newUser, setNewUser] = useState<INewUser> ({
    userId: 0,
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    university: '',
    showPassword: false,
  })

  useEffect(() => {
    if (isSubmit) putUser()

      dispatch({
        type: 'update_user', value: {
          userName: newUser.userName,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          userId: newUser.userId
        }
      })

  }, [isSubmit])

  const handleChange =
    (prop: keyof INewUser) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewUser({ ...newUser, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setNewUser({ ...newUser, showPassword: !newUser.showPassword })
  }

  const handleMouseDownPassword =
    (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const putUser = async () => {

    // Pushing data to the server using POST or PUT returns ERROR: CORS | Access-Control-Allow-Origin
    try {
      const responseOption: any = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: newUser.userId,
          password: newUser.password,
          first_name: newUser.firstName,
          last_name: newUser.lastName
        })
      }

      const response: any = await fetch(userURL, responseOption)

      if (!response.ok){
        const message = `Error Status Code: ${response}`
        throw new Error(message)
      }

      navigate(`/home/${newUser.userId}`)

    } catch (error) {
      console.log(`putUser Error: ${error}`)
    }
  } // END of putUser

  return (
    <Box py='10rem' >
      <Grid
        container
        autoComplete='off'
        component='form'
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{
          py: '5rem',
          color: 'white',
          backgroundColor: 'primary.main',
          borderRadius: '2'
        }}
      >

        <Grid item>
          <h1>Sign Up</h1>
        </Grid>

        <Grid item>
          <FormControl fullWidth sx={{ m: 1.5, width: '25ch' }} variant="filled">
            <InputLabel htmlFor='filled-first-name'>First Name</InputLabel>
            <FilledInput
              id='filled-first-name'
              value={newUser.firstName}
              onChange={handleChange('firstName')}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1.5, width: '25ch' }} variant="filled">
            <InputLabel htmlFor='filled-last-name'>Last Name</InputLabel>
            <FilledInput
              id='filled-last-name'
              value={newUser.lastName}
              onChange={handleChange('lastName')}
            />
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl fullWidth sx={{ m: 1.5, width: '25ch' }} variant="filled">
            <InputLabel htmlFor='filled-university'>University</InputLabel>
            <FilledInput
              id='filled-university'
              value={newUser.university}
              onChange={handleChange('university')}
            />
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl fullWidth sx={{ m: 1.5, width: '25ch' }} variant="filled">
            <InputLabel htmlFor='filled-user-name'>User Name</InputLabel>
            <FilledInput
              id='filled-user-name'
              value={newUser.userName}
              onChange={handleChange('userName')}
            />
          </FormControl>

          <FormControl sx={{ m: 1.5, width: '25ch' }} variant="filled">
            <InputLabel htmlFor='filled-password'> Password </InputLabel>
            <FilledInput
              id='filled-password'
              type={newUser.showPassword ? 'text' : 'password'}
              value={newUser.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {newUser.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>

        <Grid item py='2rem'>
          <Button variant='contained'
            sx={{color:'blue', backgroundColor: 'white'}}
            onClick={() => {
              setNewUser({ ...newUser, userId: Math.floor(Math.random() * 1000)})
              setSubmit(true)
            }}
          >
            Submit
          </Button>
        </Grid>

      </Grid>
    </Box>
  )
} // END of SignUpPage()

export default SignUpPage