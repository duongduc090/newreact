import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from 'react-router-dom';

const Shop = (props) => {
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={3} sx={{ border: '1px solid rgba(0, 0, 0, 0.07)' }}>
                    <Box component='div'
                        sx={{
                            borderBottom: '1px solid rgba(0, 0, 0, 0.07)'
                        }}
                    >
                        <Box sx={{ p: 2, fontWeight: 500, pl: 4 }}>Filter</Box>
                        <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.07)' }} />
                        <Box sx={{ p: 2, fontWeight: 500, pl: 4, pt: 3.5, pb: 3, fontSize: '20px' }} component='div' >Categories
                            <FormGroup sx={{ mt: 2 }} >
                                {props.categories.map((item, index) => {
                                    return <FormControlLabel control={<Checkbox size='small' />} key={index} label={item.name} />
                                })}
                            </FormGroup>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.07)' }} />
                        <Box sx={{ p: 2, fontWeight: 500, pl: 4, pt: 3.5, pb: 3, fontSize: '20px' }} component='div' >Price range
                            {/* asdasd */}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Box paddingX='20px' component='div'>
                        <Box container >
                            Sort
                            <ToggleButtonGroup
                                value={alignment}
                                exclusive
                                onChange={handleAlignment}
                                aria-label="text alignment"
                                sx={{ mt: 1, mb: 3, ml: 3 }}
                            >
                                <ToggleButton value="left" aria-label="left aligned" size='small' disableRipple className='custom-toggle-button abcd'>
                                    Relevance
                                </ToggleButton>
                                <ToggleButton value="center" aria-label="centered" disableRipple className='custom-toggle-button abcd'>
                                    Popular
                                </ToggleButton>
                                <ToggleButton value="right" aria-label="right aligned" disableRipple className='custom-toggle-button abcd'>
                                    Most New
                                </ToggleButton>
                                {/* <ToggleButton value="justify" aria-label="justified" disableRipple className='custom-toggle-button'>
                                Price
                            </ToggleButton> */}
                            </ToggleButtonGroup>
                        </Box>
                        <Box>
                            <Grid container spacing={5}>
                                {props.productList.map((item, index) => {
                                    return (
                                        <Grid item xs={4} key={index}>
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
                                                    <NavLink to={`/product/${item._id}`} style={{ textDecoration: 'none',color: '#000000' }}>
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
                                    )
                                })}
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Shop
