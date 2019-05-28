import {
    AUTH_REQUEST_LOGIN,
    AUTH_SUCCESS_LOGIN,
    AUTH_FAILED_LOGIN,
    AUTH_VALID_TOKEN,
    AUTH_INVALID_TOKEN
} from '../constants';

import {setToken} from '../../services/global-config';

const initialState = {
    isTokenVerified: false,
    isAuthenticated: false,
    requestLogin: false,
    token: null,
    userId: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
           
        case AUTH_REQUEST_LOGIN:
            return Object.assign({}, state,{
                requestLogin: true
            })

        case AUTH_SUCCESS_LOGIN:

            localStorage.setItem("token", action.payload.id);
            localStorage.setItem("userId", action.payload.userId);
            setToken(action.payload.id)

            return Object.assign({}, state, {
                userId: action.payload.userId,
                token: action.payload.id,
                requestLogin: false,
                isAuthenticated: true
              })
        
        case AUTH_FAILED_LOGIN:
            return initialState;  
            
        case AUTH_VALID_TOKEN:
            setToken(localStorage.getItem("token"));
            return Object.assign({}, state, {
                isAuthenticated: true,
                isTokenVerified: true,
                userId: localStorage.getItem("userId"),
                token: localStorage.getItem("token")
            })
        
        case AUTH_INVALID_TOKEN:
            return Object.assign({}, state, {
                isAuthenticated: false,
                isTokenVerified: true,
                userId: null,
                token: null
            })

        default:
            return state;
    }
}