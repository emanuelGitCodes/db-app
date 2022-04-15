import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box, Button,
  FilledInput, FormControl,
  Grid,
  IconButton, InputAdornment, InputLabel} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { store } from '../user-store'

interface ILogIn {
  userId: number,
  userName: string,
  password: string,
  firstName: string,
  lastName: string,
  university: string,
  showPassword: boolean
}

const logInURL: string = 'https://ekmqadzwwi.execute-api.us-east-1.amazonaws.com/users?user_id='

const SignUpPage = () => {

  const manager: any = React.useContext(store)
  const dispatch = manager.dispatch

  const navigate = useNavigate()
  const [isSubmit, setSubmit] = useState<boolean> (false)
  const [logInUser, setLogInUser] = useState<ILogIn> ({
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
          userName: logInUser.userName,
          firstName: logInUser.firstName,
          lastName: logInUser.lastName,
          userId: logInUser.userId
        }
      })

  }, [isSubmit])

  const handleChange =
    (prop: keyof ILogIn) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLogInUser({ ...logInUser, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setLogInUser({ ...logInUser, showPassword: !logInUser.showPassword })
  }

  const handleMouseDownPassword =
    (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const putUser = async () => {
    let position = Math.floor(Math.random() * 20)
    const response = await fetch(`${logInURL}${position}`)
    const logInData = await response.json()
    console.log(logInData)

    dispatch({
      type: 'update_user', value: {
        firstName: logInData.first_name,
        lastName: logInData.last_name,
        userId: position
      }
    })

    navigate(`/home/${position}`)
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
          <h1>Log In</h1>
        </Grid>

        <Grid item>
          <FormControl fullWidth sx={{ m: 1.5, width: '25ch' }} variant="filled">
            <InputLabel htmlFor='filled-user-name'>User Name</InputLabel>
            <FilledInput
              id='filled-user-name'
              value={logInUser.userName}
              onChange={handleChange('userName')}
            />
          </FormControl>

          <FormControl sx={{ m: 1.5, width: '25ch' }} variant="filled">
            <InputLabel htmlFor='filled-password'> Password </InputLabel>
            <FilledInput
              id='filled-password'
              type={logInUser.showPassword ? 'text' : 'password'}
              value={logInUser.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {logInUser.showPassword ? <VisibilityOff /> : <Visibility />}
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
              // setNewUser({ ...logInUser, userId: Math.floor(Math.random() * 20)})
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