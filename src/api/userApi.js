import { axiosClient2 } from './axios.js';
import axios from 'axios'

const CategoryAPI = {
    getAll(){
        const url = `api/users`;
        return axiosClient2.get(url);
    },
    get(id){
        const url = `api/user/${id}`;
        return axiosClient2.get(url);
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