import { axiosClient } from './axios.js';
import axios from 'axios';

const ProductApi = {
    getAll(){
        const url = `api/products`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `api/product/${id}`;
        return axiosClient.get(url);
    },
    async add(product,id,token){
        return axios.post(`http://localhost:4000/api/product/${id}`, product ,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
          
    },
    async update(id, product, iduser, token){
        return axios.put(`http://localhost:4000/api/product/${id}/${iduser}`, product ,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            
    },
    async remove(id, iduser, token){
        return axios.delete(`http://localhost:4000/api/product/${id}/${iduser}`,
        {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            
    }
}
export default ProductApi;