import * as React from 'react'
import TextField from '@mui/material/TextField'

export default function NativePickers() {
  return (
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: 250, backgroundColor:'white'}}
        InputLabelProps={{
          shrink: true,
        }}
      />
  )
}
