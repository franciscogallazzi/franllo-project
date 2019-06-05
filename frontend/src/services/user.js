import axios from 'axios';

const userInfo = (id) => {
    
    return axios.get(`${process.env.REACT_APP_BACKEND_HOST}/users/${id}/userInfo`) 
}

const create = (data) => {
    
    return axios.post(`${process.env.REACT_APP_BACKEND_HOST}/users`,data) 
}

export default {
    userInfo,
    create
}