import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Container, TextField, Typography,Button, Link, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react'

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = ()=>{
    setShowPassword(!showPassword)
  }
  return (
    <Container maxWidth="xs">
      <Box>
        <Typography 
          variant='h5'
          component='h1'
          textAlign='center'
        >
          Sign In
        </Typography>
        <TextField
          margin = "normal"
          required
          fullWidth
          autoFocus

          label="Email"
          id='email' 
          name='email'
          type='email'
          
        />
        <TextField
          margin = "normal"
          required
          fullWidth
          autoFocus

          label="Password"
          id='password' 
          name='password'
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment:(
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge='end'>
                  {showPassword ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            ),
          }}  
        />
        <Button
          fullWidth
          variant='contained'     
        >
          SIGN IN
        </Button>
        <Box 
        display='flex'
        justifyContent='space-between'
        mt='10px'
        >
          <Link
            underline='none'
            href='#'
          >
          Forgot Password?
          </Link>
          <Link
            underline='none'
            href='#'
          >
            Sign up
          </Link>
        </Box>
      </Box>
    </Container>
  )
}
