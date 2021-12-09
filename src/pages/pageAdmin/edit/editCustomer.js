import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'
import UserAPI from '../../../api/userApi';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const theme = createTheme();

const EditCustomer = ({updateUser}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [user, setUser] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await UserAPI.get(id);
        setUser(data);
        reset(data);
      } catch (error) {
      }
    }
    getUser();
  }, [reset,id])

  const onHandleSubmit = (data) => {

    const { token, user } = JSON.parse(localStorage.getItem('auth'));
    updateUser(id, data, user._id, token)
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
            alignItems: 'left',
          }}
        >
          <Typography component="h1" variant="h5">
            Edit user
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onHandleSubmit)} sx={{ mt: 1 }} autoComplete='on'>
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              {...register('name')}
            />
            <TextField
              margin="normal"
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              {...register('phone')}
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              {...register('email')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            <NavLink to="/admin/users" style={{ textDecoration: 'none' }}>
              <Button variant="contained" fullWidth style={{ marginBottom: 10 }}>
                List
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default EditCustomer
