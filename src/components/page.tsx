import React from 'react'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FilledInput from '@mui/material/FilledInput'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const UserPage = () => {

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
    <Box>
      <Box>
        <TextField
          required
          id="filled-required"
          label="User Name"
          variant="filled"
          sx={{ m: 1,  width: 228, color: '#FFFFFF', backgroundColor: '#BB8082' }}
        ></TextField>
      </Box>
      <Box>
        <FormControl
          variant="filled"
          sx={{ m: 1, backgroundColor: '#6E7582' }}>
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
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ m: 1, backgroundColor: '#046582' }}>
          Sign In
        </Button>
      </Box>
    </Box>
  )
}

export default UserPage