import React from 'react'
import Box from '@mui/material/Box'
import { Button, Card } from '@mui/material'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FilledInput from '@mui/material/FilledInput'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Typography from '@mui/material/Typography'

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const SignupForm = () => {

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  return(
    <Card
    sx={{textAlign:'center', width:'100%', height:'100%', display: 'flex', flex: 1,
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant="h5" margin={3}>
        Sign Up
      </Typography>
      <TextField
          required
          id="filled-required"
          label="User Name"
          variant="filled"
          sx={{ m: 1,
            color: '#FFFFFF',
           }}
        ></TextField>
      <FormControl
          variant="filled"
          sx={{ m: 1}}
          >
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end" >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          ></FilledInput>
        </FormControl>
      <Box>
        <Button
          variant="contained"
          sx={{ m: 1, backgroundColor: '#046582', marginBottom: 2 }}>
          Create Account
        </Button>
      </Box>
    </Card>
  )
}

export default SignupForm