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
import { useParams } from 'react-router';
import productAPI from '../../../api/productApi';
import { NavLink } from 'react-router-dom';

const theme = createTheme();

export default function EditProduct({editProduct, categories}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [cate, setCate] = useState('');
    const [shipping, setShipping] = useState('');
    const [status, setStatus] = useState('');
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await productAPI.get(id);
                setProduct(data);
                reset(data);
                setCate(data.category)
                let ship = data.shipping ? 1 : 0;
                setShipping(ship);
                let state = data.status ? 1 : 0;
                setStatus(state)
            } catch (error) {
            }
        }
        getProduct();
    }, [reset, id])

    const handleChange = (event) => {
        setCate(event.target.value);
    };
    const handleChange2 = (event) => {
        setShipping(event.target.value);
    };
    const handleChange3 = (event) => {
        setStatus(event.target.value);
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
        formData.append('status', data.status);
    
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
                    <Box component="form" onSubmit={handleSubmit(onHandleSubmit)} sx={{ mt: 1 }} autoComplete='off'>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="name"
                            label="Name Product"
                            name="name"
                            autoFocus
                            defaultValue={product.name}
                            {...register('name')}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="price"
                            label="Price"
                            name="price"
                            defaultValue={product.price}
                            {...register('price')}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="photo"
                            type='file'
                            name="photo"
                            {...register('photo')}
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cate}
                                label="Category"
                                onChange={handleChange}
                            >
                                {categories.map((item,index) => {
                                    return <MenuItem value={item._id} key={index}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="quantity"
                            label="Quantity"
                            name="quantity"
                            defaultValue={product.quantity}
                            {...register('quantity')}
                        />
                        <FormControl component="fieldset" margin="normal">
                            <FormLabel component="legend">Shipping</FormLabel>
                            <RadioGroup row aria-label="shipping" name="row-radio-buttons-group"  value={shipping}  onChange={handleChange2}>
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
                            defaultValue={product.description}
                            {...register('description')}
                        />
                        <FormControl component="fieldset" margin="normal">
                            <FormLabel component="legend">Publish</FormLabel>
                            <RadioGroup row aria-label="publish" name="publish" value={status}  onChange={handleChange3}>
                                <FormControlLabel value="1" control={<Radio />} label="Yes" autoComplete="1" {...register('status')} />
                                <FormControlLabel value="0" control={<Radio />} label="No" autoComplete="0" {...register('status')}/>
                            </RadioGroup>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                        <NavLink to="/admin/products" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" fullWidth  style={{ marginBottom: 10 }}>
                                List
                            </Button>
                        </NavLink>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
