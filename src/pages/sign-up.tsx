import React, {useEffect, useState} from 'react'
import {
  Box, Button,
  FilledInput, FormControl,
  Grid,
  IconButton, InputAdornment, InputLabel,
  TextField } from '@mui/material'

import { Visibility, VisibilityOff } from '@mui/icons-material'

interface INewUser {
  userName: string,
  password: string,
  firstName: string,
  lastName: string,
  university: string,
  showPassword: boolean
}

const userURL = 'https://ekmqadzwwi.execute-api.us-east-1.amazonaws.com/users?'

const SignUpPage = () => {

  const [newUser, setNewUser] = useState<INewUser> ({
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    university: '',
    showPassword: false,
  })

  const [isSubmit, setSubmit] = useState<Boolean> (false)

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

  async function putUser() {
    const requestOption = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: 9098,
        password: newUser.password,
        first_name: newUser.firstName,
        last_name: newUser.lastName
      })
    }

    const response = await fetch(userURL, requestOption)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    putUser()
  }, [isSubmit])

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
            onClick={() => setSubmit(!isSubmit)}
          >
            Submit
          </Button>
        </Grid>

      </Grid>
    </Box>
  )
} // END of SignUpPage()

export default SignUpPage