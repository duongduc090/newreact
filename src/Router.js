import React from 'react'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';

import Admin from './layout/Admin';
import Client from './layout/Client';
import AddCategory from './pages/pageAdmin/add/addCategory';
import AddCustomer from './pages/pageAdmin/add/addCustomer';
import AddProduct from './pages/pageAdmin/add/addProduct';
import Category from './pages/pageAdmin/Category';
import Contacts from './pages/pageAdmin/Contacts';
import Users from './pages/pageAdmin/Users';
import Dashboard from './pages/pageAdmin/dashboard';
import EditCategory from './pages/pageAdmin/edit/editCategory';
import EditCustomer from './pages/pageAdmin/edit/editCustomer';
import EditProduct from './pages/pageAdmin/edit/editProduct';
import Products from './pages/pageAdmin/Products';
import ViewContact from './pages/pageAdmin/view/viewContact';
import Blog from './pages/pageClient/Blog';
import Contact from './pages/pageClient/Contact';
import HomePage from './pages/pageClient/HomePage';
import ProductDetail from './pages/pageClient/ProductDetail';
import Shop from './pages/pageClient/Shop';
import SignIn from './pages/pageClient/SignIn';
import SignUp from './pages/pageClient/SignUp';

const Routers = (props) => {
    return (
        <Router>
            <Routes>
                <Route path="admin/*" element={<Admin/>}>
                    <Route index element={<Navigate to="dashboard"/>} />
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="products" element={<Products {...props}/>} />
                    <Route path="users" element={<Users {...props}/>} />
                    <Route path="contacts" element={<Contacts {...props}/>} />
                    <Route path="category" element={<Category {...props}/>} />
                    <Route path="category/add" element={<AddCategory {...props} />} />
                    <Route path="category/:id/edit" element={<EditCategory {...props} />} />
                    <Route path="product/add" element={<AddProduct {...props} />} />
                    <Route path="product/:id/edit" element={<EditProduct {...props} />} />
                    <Route path="customer/add" element={<AddCustomer />} />
                    <Route path="customer/:id/edit" element={<EditCustomer {...props} />} />
                    <Route path="contact/:id/view" element={<ViewContact {...props} />} />
                    {/* <Route path="orders" element={<Orders/>} /> */}
                </Route>

                <Route path="/" element={<Client/>}>
                    <Route index element={<HomePage {...props}/>} />
                    <Route path="blog" element={<Blog/>} />
                    <Route path="shop" element={<Shop {...props}/>} />
                    <Route path="signup" element={<SignUp/>} />
                    <Route path="signin" element={<SignIn/>} />
                    <Route path="product/:id" element={<ProductDetail {...props}/>} />
                    <Route path="contact" element={<Contact {...props}/>} />
                </Route>
            </Routes>
        </Router>
    )
}
export default Routers;