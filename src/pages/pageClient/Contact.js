import React, {useState} from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaContact } from '../../validate/Schema';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const theme = createTheme();

const Contact = () => {
    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schemaContact)});
    const [success, setSuccess] = useState(false);

    const onHandleSubmit = async (data) => {
      await axios.post('http://localhost:4000/api/contact',data,{
        headers:{
            'Content-Type': 'application/json'
        }
      })
      .then( () => {
          setSuccess(true);
      })
      };
      const showSuccess = () => {
        return (
            <Box sx={{background: '#91ff35',p:2,width: '100%',mb:2,borderRadius: '10px' }} style={{display: success ? 'block' : 'none'}}>
                <span>Send your contact successfully. <NavLink to="/">Click here to went Home</NavLink></span>
            </Box>
        )
    }
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" sx={{width: '800px'}}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 25.9
              }}
            >
                {showSuccess()}
              <Typography component="h1" variant="h5">
               Contact
              </Typography>
              <Box component="form" onSubmit={handleSubmit(onHandleSubmit)} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="name"
                      fullWidth
                      label="Your name"
                      {...register('name')}
                    />
                    <Typography variant='caption' sx={{color: 'red'}}>{errors.name?.message}</Typography>
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      {...register('lastName')}
                    />
                    <Typography variant='caption' sx={{color: 'red'}}>{errors.lastName?.message}</Typography>
                  </Grid> */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id=""
                      label="Title email"
                      name="title"
                      {...register('title')}
                    />
                    <Typography variant='caption' sx={{color: 'red'}}>{errors.title?.message}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="phone"
                      label="Phone"
                      name="phone"
                      autoComplete="phone"
                      {...register('phone')}
                    />
                    <Typography variant='caption' sx={{color: 'red'}}>{errors.phone?.message}</Typography>
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
                    <Typography variant='caption' sx={{color: 'red'}}>{errors.email?.message}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      type="textarea"
                      id="textarea"
                      multiline
                      minRows={2}
                      maxRows={5}
                      {...register('message')}
                    />
                    <Typography variant='caption' sx={{color: 'red'}}>{errors.message?.message}</Typography>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
}

export default Contact
