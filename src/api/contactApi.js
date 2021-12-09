import { axiosClient2 } from './axios.js';
import axios from 'axios'

const ContactApi = {
    getAll(){
        const url = `api/contacts`;
        return axiosClient2.get(url);
    },
    get(id){
        const url = `api/contact/${id}`;
        return axiosClient2.get(url);
    },
    
}
export default ContactApi;