import axios from 'axios';

const apiBasePath = proccess.env.BACKEND_HOST + "/api";

const login = (email, password) => {
    return axios.post(`${apiBasePath}/users/login`, { email, password})
}

const verifyToken = (userId, token) => {
    return axios.get(`${apiBasePath}/users/${userId}`, {
        headers: {
            authorization: token
        }
    })
}

export default { login, verifyToken }