import axios from 'axios';

const create = (data) => {
    
    return axios.post(`${process.env.REACT_APP_BACKEND_HOST}/lists`,data) 
}

const updateById = (id, data) => {
    
    return axios.patch(`${process.env.REACT_APP_BACKEND_HOST}/lists/${id}`,data) 
}

export default {
    create,
    updateById
}