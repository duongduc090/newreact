import React from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Badge, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from '../auth';
import categoryApi from '../api/categoryApi';

const HeaderClient = () => {
    const { pathname } = useLocation();
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [logged, setLogged] = React.useState(false);
    const [category, setCategory] = React.useState([]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setTimeout(() => { setAnchorEl(null); }, 200)
    };
    let user = JSON.parse(localStorage.getItem('auth'));

    React.useEffect(() => {
        if (user == null) {
            return false
        } else {
            setLogged(true);
            if (user.user.role == 1) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        }
    }, [pathname, logged])
    React.useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await categoryApi.getAll();
                // console.log(data);
                setCategory(data.data);
            } catch (error) {

            }
        }
        getCategory();
    }, [])
    const headerAuth = () => {
        return (
            <>
                {(pathname !== '/login' && logged) ? (
                    <>
                        <label htmlFor="icon-button-favorite">
                            <IconButton color="primary" aria-label="favorite" component="span" >
                                <Badge badgeContent={0} color="error">
                                    <FavoriteBorderIcon />
                                </Badge>
                            </IconButton>
                        </label>
                        <label htmlFor="icon-button-user">
                            <IconButton color="primary" aria-label="user" component="span" id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {isAdmin && (
                                    <NavLink to='/admin' style={{ textDecoration: 'none', color: '#000000de' }}><MenuItem onClick={handleClose} >Admin</MenuItem></NavLink>
                                )}
                                <MenuItem onClick={() => signOut(() => { setTimeout(() => { navigate('/signin'); }, 1000) })}>Logout</MenuItem>
                            </Menu>
                        </label>
                        <label htmlFor="icon-button-cart">
                            <IconButton color="primary" aria-label="cart" component="span">
                                <Badge badgeContent={0} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </label>
                    </>
                ) : (
                    <label htmlFor="icon-button-user">
                        <IconButton color="primary" aria-label="user" component="span" id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <AccountCircleIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <NavLink to='/signin' style={{ textDecoration: 'none', color: '#000000de' }}><MenuItem onClick={handleClose} >Sign In</MenuItem></NavLink>
                            <NavLink to='/signup' style={{ textDecoration: 'none', color: '#000000de' }}><MenuItem onClick={handleClose} >Sign Up</MenuItem></NavLink>
                        </Menu>
                    </label>
                )}

            </>
        )
    }
    return (
        <>
            <Container maxWidth="xl" >
                <Box sx={{
                    bgcolor: 'background.paper',
                    p: 1.5,
                    height: '60px'
                }}>
                    <Grid container spacing={3} >
                        <Grid item xs={2}>
                            <NavLink to="/" style={{ textDecoration: 'none' }}><Typography component="div"><Box sx={{ letterSpacing: 6, fontWeight: 'bold', fontSize: 20 }}>REACT-er</Box></Typography> </NavLink>
                        </Grid>
                        <Grid item xs={7} >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    bgcolor: 'background.paper',
                                }}
                            >
                                <NavLink to="/" style={{ textDecoration: 'none', marginRight: 10 }}><Button
                                    id="fade-button"
                                    aria-controls="fade-menu"
                                    aria-haspopup="true"
                                    className='blacka'
                                >
                                    Home
                                </Button></NavLink>
                                {category.map((item,index) => {
                                    return (
                                        <NavLink to={`/shop/${item._id}`} style={{ textDecoration: 'none', marginRight: 10 }} key={index}><Button
                                        id="fade-button"
                                        aria-controls="fade-menu"
                                        aria-haspopup="true"
                                        className='blacka'
                                    >
                                        {item.name}
                                    </Button></NavLink>
                                    )
                                })}
                               
                                {/* <NavLink to="/blog" style={{ textDecoration: 'none', marginRight: 10 }}><Button
                                    id="fade-button"
                                    aria-controls="fade-menu"
                                    aria-haspopup="true"
                                    className='blacka'
                                >
                                    Blog
                                </Button></NavLink> */}
                                <NavLink to="/contact" style={{ textDecoration: 'none', marginRight: 10 }}><Button
                                    id="fade-button"
                                    aria-controls="fade-menu"
                                    aria-haspopup="true"
                                    className='blacka'
                                >
                                    Contact
                                </Button></NavLink>
                            </Box>
                        </Grid>
                        <Grid item xs={3} style={{ textAlign: 'right', paddingTop: '22px' }}>
                            {headerAuth()}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default HeaderClient
