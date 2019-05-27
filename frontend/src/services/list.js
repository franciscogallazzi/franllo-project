import axios from 'axios';

const create = (data) => {
    
    return axios.post(`${process.env.REACT_APP_BACKEND_HOST}/lists`,data) 
}

export default {
    create
}