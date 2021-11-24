import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Routers from './Router';
import productApi from './api/productApi';
import categoryApi from './api/categoryApi';
import userApi from './api/userApi';
import axios from 'axios'

function App() {
  const [products, setProduct] = useState([]);
  const [categories, setCategory] = useState([]);
  const [contact, setContact] = useState([]);
  const [users, setUser] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data: products } = await productApi.getAll();
        // console.log(products.data);
        setProduct(products.data)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos();
    const getTodos2 = async () => {
      try {
        const { data: cates } = await categoryApi.getAll();
        setCategory(cates.data)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos2();
    const getTodos3 = async () => {
      try {
        const { data: contact } = await axios.get('http://localhost:4000/api/contacts')
        setContact(contact.data)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos3();
    const getTodos4 = async () => {
    const { token, user } = JSON.parse(localStorage.getItem('auth'));
      try {
        const { data: userdata } = await userApi.getAll(user._id,token);
        setUser(userdata.data)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos4();
  }, [])

  const onHandleAdd = async (product, id, token) => {
    try {
      await productApi.add(product, id, token);
      const { data: newProducts } = await productApi.getAll();
      setProduct(newProducts.data);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleUpdate = async (id, product, iduser, token) => {
    try {
      await productApi.update(id, product, iduser, token);
      const { data: newProducts } = await productApi.getAll();
      setProduct(newProducts.data);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleDelete = async (id, iduser, token) => {
    try {
      await productApi.remove(id, iduser, token);
      const newProducts = products.filter(product => product._id !== id);
      setProduct(newProducts);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleAdd2 = async (cate, id, token) => {
    try {
      await categoryApi.add(cate, id, token);
      setCategory([
        ...categories,
        cate
      ]);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleUpdate2 = async (id, cate, iduser, token) => {
    try {
      await categoryApi.update(cate, id, iduser, token);
      const { data: newCategorys } = await categoryApi.getAll();
      setCategory(newCategorys.data);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleDelete2 = async (id, iduser, token) => {
    try {
      await categoryApi.remove(id, iduser, token);
      const newCategorys = categories.filter(cate => cate._id !== id);
      setCategory(newCategorys);
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleDelete3 = async (id, iduser, token) => {
    try {
      await axios.delete(`http://localhost:4000/api/contact/${id}/${iduser}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const newContact = contact.filter(cate => cate._id !== id);
      setContact(newContact);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <Routers productList={products} onAdd={onHandleAdd} onAdd2={onHandleAdd2} categories={categories}
      editCate={onHandleUpdate2} editProduct={onHandleUpdate} onDelete2={onHandleDelete2} onDelete={onHandleDelete}
      userList={users}/>
    </div>
  );
}

export default App;
