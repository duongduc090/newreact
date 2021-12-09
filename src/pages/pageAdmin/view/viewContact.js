import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useParams } from 'react-router';
import ContactApi from '../../../api/contactApi'
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'left',
}));

const ViewContact = () => {
    const { id } = useParams();
    const [contact, setContact] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [contactStatus, setContactStatus] = useState();

    const onHandleSubmit = (data) => {
        console.log(contactStatus)
    }
    const handleChange = (event) => {
        setContactStatus(event.target.value);
    };
    useEffect(() => {
        const getContact = async () => {
            try {
                const { data } = await ContactApi.get(id);
                setContact(data);
                setContactStatus(data.status)
            } catch (error) {
            }
        }
        getContact();
    }, [])

    return (
        <div>
            <Typography variant='h4'>View</Typography>
            <Box sx={{ flexGrow: 1, mt: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={4}>
                                    <Typography variant='subtitle2' >Name</Typography>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <Typography variant='body2' >{contact.name}</Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography variant='subtitle2' >Phone</Typography>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <Typography variant='body2' >0{contact.phone}</Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography variant='subtitle2' >Email</Typography>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <Typography variant='body2' >{contact.email}</Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography variant='subtitle2' >Message</Typography>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <Typography variant='body2' >{contact.message}</Typography>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Box component="form" onSubmit={handleSubmit(onHandleSubmit)} sx={{ mt: 1 }} autoComplete='off'>
                            <FormControl fullWidth margin="normal">
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={contactStatus}
                                label="Status"
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>Not yet</MenuItem>
                                <MenuItem value={1}>Replied</MenuItem>
                            </Select>
                        </FormControl>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Update
                                </Button>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ViewContact
