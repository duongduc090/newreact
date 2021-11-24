import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import CategoryIcon from '@mui/icons-material/Category';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from 'react-router-dom';

export const mainListItems = (
  <div>
    <NavLink to="/admin/dashboard" style={{ textDecoration: 'none', color: '#424242'}}>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
    </NavLink>
    <NavLink to="/admin/orders" style={{ textDecoration: 'none', color: '#424242'}}>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
    </NavLink>
    <NavLink to="/admin/users" style={{ textDecoration: 'none', color: '#424242'}}>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItem>
    </NavLink>
    <NavLink to="/admin/products" style={{ textDecoration: 'none', color: '#424242'}}>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
        </ListItem>
    </NavLink>
    <NavLink to="/admin/category" style={{ textDecoration: 'none', color: '#424242'}}>
        <ListItem button>
            <ListItemIcon>
                <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Categories" />
        </ListItem>
    </NavLink>
    <NavLink to="/admin/contacts" style={{ textDecoration: 'none', color: '#424242'}}>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
        </ListItem>
    </NavLink>
  </div>
);
