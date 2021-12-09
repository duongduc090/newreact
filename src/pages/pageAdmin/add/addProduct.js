import * as React from 'react';
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
import { NavLink, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaProduct } from '../../../validate/Schema';

const theme = createTheme();

export default function AddProduct({ onAdd, categories }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaProduct) });
    const [cate, setCate] = React.useState('');
    let navigate = useNavigate()

    const handleChange = (event) => {
        setCate(event.target.value);
    };
    const onHandleSubmit = (data) => {

        const { token, user } = JSON.parse(localStorage.getItem('auth'));
        const imgproduct = data.photo[0];

        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('photo', imgproduct);
        formData.append('category', cate);
        formData.append('quantity', data.quantity);
        formData.append('shipping', data.shipping);
        formData.append('description', data.description);
        formData.append('status', data.status);

        onAdd(formData, user._id, token);
        setTimeout(() => {
            navigate('/admin/products')
        }, 700)

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
                        Add product
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
                        <Typography variant='caption' sx={{ color: 'red' }}>{errors.name?.message}</Typography>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="price"
                            label="Price"
                            name="price"
                            autoComplete="price"
                            {...register('price')}
                        />
                        <Typography variant='caption' sx={{ color: 'red' }}>{errors.price?.message}</Typography>
                        <TextField
                            margin="normal"
                            fullWidth
                            type='file'
                            name="photo"
                            {...register('photo')}
                        />
                        {/* <Typography variant='caption' sx={{ color: 'red' }}>{errors.photo?.message}</Typography> */}
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cate}
                                label="Category"
                                onChange={handleChange}
                            >
                                {categories.map((item, index) => {
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
                            autoComplete="quantity"
                            {...register('quantity')}
                        />
                        <Typography variant='caption' sx={{ color: 'red' }}>{errors.quantity?.message}</Typography>
                        <FormControl component="fieldset" margin="normal" fullWidth>
                            <FormLabel component="legend">Shipping</FormLabel>
                            <RadioGroup row aria-label="shipping" name="shipping" defaultValue="0">
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
                        <Typography variant='caption' sx={{ color: 'red' }}>{errors.description?.message}</Typography>
                        <FormControl component="fieldset" margin="normal" fullWidth>
                            <FormLabel component="legend">Publish</FormLabel>
                            <RadioGroup row aria-label="publish" name="publish" defaultValue="0">
                                <FormControlLabel value="1" control={<Radio />} label="Yes" autoComplete="1" {...register('status')} />
                                <FormControlLabel value="0" control={<Radio />} label="No" autoComplete="0" {...register('status')} />
                            </RadioGroup>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add
                        </Button>
                        <NavLink to="/admin/products" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" fullWidth style={{ marginBottom: 10 }}>
                                List
                            </Button>
                        </NavLink>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
