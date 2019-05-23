import axios from 'axios';

const updateById = (id, data) => {
    
    return axios.patch(`${process.env.REACT_APP_BACKEND_HOST}/activities/${id}`,{...data}) 
}

const create = (data) => {
    
    return axios.post(`${process.env.REACT_APP_BACKEND_HOST}/activities`,{...data}) 
}

export default {
    updateById,
    create
}