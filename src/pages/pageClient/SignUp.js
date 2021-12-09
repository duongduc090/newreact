import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { signUp } from '../../auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom'
import { schemaSignup } from '../../validate/Schema';

const theme = createTheme();

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaSignup) });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (data) => {
    signUp(data)
      .then(res => {
        if (res.error) {
          setError(res.error)
        } else {
          setError('');
          setSuccess(true);
        }
      })
  };
  const showSuccess = () => {
    return (
      <Box sx={{p: 1, width: '100%'}} style={{ display: success ? 'block' : 'none' }}>
        <span>Sign up successfully. <NavLink to="/signin">Click here to Sign In</NavLink></span>
      </Box>
    )
  }
  const showError = () => {
    return <Box sx={{p: 1, width: '100%', color: 'red'}} style={{ display: error ? 'block' : 'none' }}>
        <span>{error}</span>
      </Box>
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {showSuccess()}
          {showError()}
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  label="Your Name"
                  name="name"
                  autoComplete="name"
                  {...register('name')}
                />
                <Typography variant='caption' sx={{ color: 'red' }}>{errors.name?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register('email')}
                />
                <Typography variant='caption' sx={{ color: 'red' }}>{errors.email?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  {...register('phone')}
                />
                <Typography variant='caption' sx={{ color: 'red' }}>{errors.phone?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  {...register('password')}
                />
                <Typography variant='caption' sx={{ color: 'red' }}>{errors.password?.message}</Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}