import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'
import CategoryAPI from '../../../api/categoryApi';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCategory } from '../../../validate/Schema';

const theme = createTheme();

const EditCategory = ({ onHandleUpdate2 }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: yupResolver(schemaCategory)});
  const [category, setCategory] = useState({})
  const { id } = useParams();
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await CategoryAPI.get(id);
        setCategory(data);
        reset(data);
      } catch (error) {
      }
    }
    getCategory();
  }, [])

  const onHandleSubmit = (data) => {

    const { token, user } = JSON.parse(localStorage.getItem('auth'));

    onHandleUpdate2(data, user._id, token);
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
            Edit category
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onHandleSubmit)} sx={{ mt: 1 }} autoComplete='off'>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              // value={category.name}
              label="Name Category"
              name="name"
              autoComplete="name"
              autoFocus
              {...register('name')}
            />
            <Typography variant='caption' sx={{color: 'red'}}>{errors.name?.message}</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
            <NavLink to="/admin/category" style={{ textDecoration: 'none' }}>
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

export default EditCategory
