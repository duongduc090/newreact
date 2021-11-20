import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'


const theme = createTheme();

export default function AddCategory({onAdd2}) {
    const {register, handleSubmit, formState: { errors }} = useForm();
 
    const onHandleSubmit = (data) => {

        const { token, user } = JSON.parse(localStorage.getItem('auth'));
      console.log(token, user)
        console.log(data)
        onAdd2(data, user._id, token);
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
            Add category
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onHandleSubmit)}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name Category"
              name="name"
              autoComplete="name"
              autoFocus
              {...register('name')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
