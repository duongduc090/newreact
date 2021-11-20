import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useForm } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import { useParams } from 'react-router';
import productAPI from '../../../api/productApi';

const theme = createTheme();

export default function EditProduct({editProduct, categories}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [cate, setCate] = useState('');
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await productAPI.get(id);
                setProduct(data);
                reset(data);
                setCate(data.category)
            } catch (error) {
            }
        }
        getProduct();
    }, [reset])

    const handleChange = (event) => {
        setCate(event.target.value);
    };

    const onHandleSubmit = (data) => {

        const { token, user } = JSON.parse(localStorage.getItem('auth'));

        const imgproduct = data.photo[0];

        const formData = new FormData();
        
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('photo',  imgproduct);
        formData.append('category', cate);
        formData.append('quantity', data.quantity);
        formData.append('shipping', data.shipping);
        formData.append('description', data.description);
    
        editProduct(id, formData, user._id, token);
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
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
                        Edit product
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onHandleSubmit)} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="name"
                            label="Name Product"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            {...register('name')}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="price"
                            label="Price"
                            name="price"
                            autoComplete="price"
                            {...register('price')}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="photo"
                            type='file'
                            name="photo"
                            autoComplete="photo"
                            {...register('photo')}
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <NativeSelect
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cate}
                                label="Category"
                                defaultValue={product.category}
                                onChange={handleChange}
                            >
                                {categories.map((item,index) => {
                                    return <><option value={item._id} key={index} >{item.name}</option> </>
                                })}
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="quantity"
                            label="Quantity"
                            name="quantity"
                            autoComplete="quantity"
                            {...register('quantity')}
                        />
                        <FormControl component="fieldset" margin="normal">
                            <FormLabel component="legend">Shipping</FormLabel>
                            <RadioGroup row aria-label="shipping" name="row-radio-buttons-group" defaultValue={product.shipping ? 1 : 0} >
                                <FormControlLabel value="1" control={<Radio />} label="Yes" autoComplete="1" {...register('shipping')} />
                                <FormControlLabel value="0" control={<Radio />} label="No" autoComplete="0" {...register('shipping')} />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="description"
                            label="Description"
                            name="description"
                            autoComplete="description"
                            {...register('description')}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
