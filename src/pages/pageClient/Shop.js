import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
// import Divider from '@mui/material/Divider';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

const Shop = (props) => {
    //    const [data, setData] = useState([]);

    //    const filterData = (e) => {
    //     console.log(e.target.value)
    //    }

    //    useEffect(() => {
    //        const getProduct = async () => {
    //         try {
    //             setData(props.productList);
    //         } catch (error) {
    //             }   
    //         }
    //         getProduct();
    //    }, [data])

    const { id } = useParams();
    const products = props.productList;
    const newProducts = products.filter(product => product.category == id);

    return (
        <>
            <Grid container spacing={2}>
                {/* <Grid xs={3} sx={{ border: '1px solid rgba(0, 0, 0, 0.07)' }}>
                    <Box component='div'
                        sx={{
                            borderBottom: '1px solid rgba(0, 0, 0, 0.07)'
                        }}
                    >
                        <Box sx={{ p: 2, fontWeight: 500, pl: 4 }}>Filter</Box>
                        <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.07)' }} />
                        <Box sx={{ p: 2, fontWeight: 500, pl: 4, pt: 3.5, pb: 3, fontSize: '20px' }} component='div' >Categories
                            <FormGroup sx={{ mt: 2 }}>
                                {props.categories.map((item, index) => {
                                    return <FormControlLabel  control={<Checkbox size='small' value={item._id} onChange={filterData} />} key={index} label={item.name} />
                                })}
                            </FormGroup>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.07)' }} />
                        <Box sx={{ p: 2, fontWeight: 500, pl: 4, pt: 3.5, pb: 3, fontSize: '20px' }} component='div' >Price range
                        </Box>
                    </Box>
                </Grid> */}
                <Grid item xs={12}>
                    <Box paddingX='20px' component='div'>
                        <Typography gutterBottom variant="h3" component="div">
                            Products List
                        </Typography>
                        <Box>
                            <Grid container spacing={5}>
                                {newProducts.map((item, index) => {
                                    return (
                                        <Grid item xs={3} key={index}>
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
