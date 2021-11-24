import { axiosClient2 } from './axios.js';
import axios from 'axios'

const CategoryAPI = {
    getAll(id, token){
        return axios.get(`http://localhost:4000/api/users/${id}`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    },
    get(id, token, idUser){
        return axios.get(`http://localhost:4000/api/user/${id}`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    },
    update(cate, id, idUser, token){
        return axios.put(`http://localhost:4000/api/user/${id}/${idUser}`, cate,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    },
}
export default CategoryAPI;