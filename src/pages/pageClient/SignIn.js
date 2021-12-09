import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { signIn, auth } from '../../auth';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignin } from '../../validate/Schema';
import { NavLink } from 'react-router-dom'

const theme = createTheme();

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaSignin) });
  const [admin, setAdmin] = useState(false);
  let navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = (data) => {
    signIn(data)
      .then(res => {
        if (res.error) {
          setError(res.error)
        } else {
          auth(res, () => {
            setAdmin(true);
          })
        }
      })
  };
  const checkUser = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (admin) {
      if (auth.user.role == 1) {
        return navigate('/admin')
      } else {
        return navigate('/')
      }
    }
  }
  const showError = () => {
    return <Box sx={{p: 1, width: '100%', color: 'red'}} style={{ display: error ? 'block' : 'none' }}>
        <span>{error}</span>
      </Box>
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {showError()}
            {checkUser()}
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    sx={{width: '550px'}}
                    {...register('email')}
                  />
                  <Typography variant='caption' sx={{ color: 'red' }}>{errors.email?.message}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    sx={{width: '550px'}}
                    {...register('password')}
                  />
                  <Typography variant='caption' sx={{ color: 'red' }}>{errors.password?.message}</Typography>
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                  </Link>
                </Grid>
                <Grid item>
                  <NavLink to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}