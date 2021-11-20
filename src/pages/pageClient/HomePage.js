import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Homepage(props) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Products
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Shop now</Button>
              <Button variant="outlined">About us</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ px: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.productList.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card sx={{ p: 3 }}>
                  <NavLink to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
                    <CardMedia
                      component="img"
                      alt="product img"
                      height="200"
                      image={`http://localhost:4000/api/product/photo/${item._id}`}
                    />
                  </NavLink>
                  <CardContent>
                    <NavLink to={`/product/${item._id}`} style={{ textDecoration: 'none', color: '#000000' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                    </NavLink>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions component={<Grid container alignItems="center" />}>
                    <Grid item xs={6} sx={{ paddingLeft: '10px' }}>
                      Price
                      <Typography component='h5' fontWeight='500'>$ {item.price}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" size='medium' >
                        Add to cart
                      </Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
      {/* End footer */}
    </ThemeProvider>
  );
}
