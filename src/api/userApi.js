import { axiosClient2 } from './axios.js';
import axios from 'axios'

const CategoryAPI = {
    getAll(){
        const { token, user } = JSON.parse(localStorage.getItem('auth'));
        return axios.get(`http://localhost:4000/api/users/${user._id}`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    },
    get(id ){
        return axios.get(`http://localhost:4000/api/user/${id}`, 
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    update(user, id, idUser, token){
        return axios.put(`http://localhost:4000/api/user/${id}/${idUser}`, user,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    },
}
export default CategoryAPI;