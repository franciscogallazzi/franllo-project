import axios from 'axios';

const login = (email, password) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_HOST}/users/login`, { email, password})
}

const verifyToken = (userId, token) => {

    return axios.get(`${process.env.REACT_APP_BACKEND_HOST}/users/${userId}`, {
        include:'userInfo',
        headers: {
            authorization: token
        }
    })
}

export default { login, verifyToken }