import authService from '../../services/auth';
import {getUserInfo} from '../actions/user';
import{
    AUTH_SUCCESS_LOGIN,
    AUTH_FAILED_LOGIN,
    AUTH_VALID_TOKEN,
    AUTH_INVALID_TOKEN
} from '../constants';

export const requestLogin = function(email, password, history) {
    return function(dispatch, state) {
        authService.login(email, password)
            .then(response => {
                dispatch(successLogin(response.data))
                dispatch(getUserInfo(response.data.userId))
            })
            .catch(err => {
                console.log("err", err);
            })
    }

}

export const successLogin = function(payload){
    return {
        type: AUTH_SUCCESS_LOGIN,
        payload
    }
}

export const failedLogin = function(payload){
    return {
        type: AUTH_FAILED_LOGIN,
        payload

    }
}

export const verifyToken = function(userId, token) {
    return function(dispatch){
        authService.verifyToken(userId, token)
            .then(response => {
                dispatch(validToken(response.data))
                dispatch(getUserInfo(userId))
            })
            .catch(err => {
                dispatch(invalidToken())
            })
    }
}

export const validToken = function (payload){
    return {
        type: AUTH_VALID_TOKEN,
        payload
    }
}

export const invalidToken = function(){
    return {
        type: AUTH_INVALID_TOKEN
    }
}
