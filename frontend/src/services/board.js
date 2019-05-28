import axios from 'axios';

const getById = (id) => {
    const params = {
        filter: {
        include: {
            relation:'lists',
            scope: {
                include: {
                    relation:'activities'
                }

            }
            
        }}
    }
    return axios.get(`${process.env.REACT_APP_BACKEND_HOST}/boards/${id}`,{params}) 
}


const getAllForMe = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_HOST}/boards/for-me`) 
}

const create = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_HOST}/boards`,data) 
}

export default {
    getById,
    getAllForMe,
    create
}