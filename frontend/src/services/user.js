import axios from 'axios';

const userInfo = (id) => {
    
    return axios.get(`${process.env.REACT_APP_BACKEND_HOST}/users/${id}/userInfo`) 
}

export default {
    userInfo
}