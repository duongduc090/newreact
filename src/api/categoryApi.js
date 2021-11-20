import { axiosClient2 } from './axios.js';
import axios from 'axios'

const CategoryAPI = {
    getAll(){
        const url = `api/categories`;
        return axiosClient2.get(url);
    },
    get(id){
        const url = `api/category/${id}`;
        return axiosClient2.get(url);
    },
    add(cate, id, token){
        return axios.post(`http://localhost:4000/api/category/${id}`, cate,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    },
    update(cate, id, idUser, token){
        return axios.put(`http://localhost:4000/api/category/${id}/${idUser}`, cate,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    },
    remove(id, idUser, token){
        return axios.delete(`http://localhost:4000/api/category/${id}/${idUser}`,
        {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}
export default CategoryAPI;