import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material'
import { Box, grid } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router';
import productAPI from '../../api/productApi';
import Rating from '@mui/material/Rating';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductDetail = () => {
    const {id} = useParams();
    const [value, setValue] = useState(2);
  
    const [product, setProduct] = useState({})

    const [alignment, setAlignment] = useState('left');
    const [alignment2, setAlignment2] = useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    const handleAlignment2 = (event, newAlignment) => {
        setAlignment2(newAlignment);
      };
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await productAPI.get(id);
                // console.log(data);
                setProduct(data);
            } catch (error) {

            }
        }
        getProduct();
    }, [])

    return (
        <>
        <Box sx={{ width: '80%', mx: 'auto'}}>
            <Grid container spacing={3} width='md'>
                <Grid item xs={7}>
                    <CardMedia 
                    component="img"
                    sx={{
                        height: '100%'
                    }}
                    image={`http://localhost:4000/api/product/photo/${id}`}
                    alt="random"/>
                </Grid>
                <Grid item xs={5} style={{paddingTop:50, paddingLeft: 30}}>
                    <Typography variant="h4" gutterBottom component="div" fontWeight='700'>{product.name}</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                    <Typography variant="body1" gutterBottom component="div" fontWeight='400' mt='15px'>{product.description}</Typography>
                    <Typography component="legend" fontWeight='400' variant="h6" mt='20px'>Color</Typography>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{mt: 1, mb: 3}}
                        >
                        <ToggleButton value="left" aria-label="left aligned" disableRipple className='custom-toggle-button'>
                            Red
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered" disableRipple className='custom-toggle-button'>
                            Black
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned" disableRipple className='custom-toggle-button'>
                            Yellow
                        </ToggleButton>
                        <ToggleButton value="justify" aria-label="justified" disableRipple className='custom-toggle-button'>
                            Gray
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Typography component="legend" fontWeight='400' variant="h6">Size</Typography>
                    <ToggleButtonGroup
                        value={alignment2}
                        exclusive
                        onChange={handleAlignment2}
                        aria-label="text alignment"
                        sx={{mt: 1, mb: 9}}
                        >
                        <ToggleButton value="left" aria-label="left aligned" disableRipple className='custom-toggle-button'>
                            37
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered" disableRipple className='custom-toggle-button'>
                            39
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned" disableRipple className='custom-toggle-button'>
                            40
                        </ToggleButton>
                        <ToggleButton value="justify" aria-label="justified" disableRipple className='custom-toggle-button'>
                            41
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Box sx={{borderTop:'1px solid #ddd', borderBottom: '1px solid #ddd', p:2}}>
                        <Grid container spacing={3} width='md' alignItems="center">
                            <Grid item xs={6}>
                                <Typography component="legend" fontWeight='400' variant="h5">$ {product.price}</Typography>
                            </Grid>
                            <Grid item xs={6} textAlign='right'>
                                <Button variant="contained" size='large' startIcon={<AddShoppingCartIcon />}>
                                    ADD TO CART
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default ProductDetail
