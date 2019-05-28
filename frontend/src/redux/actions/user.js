import userService from '../../services/user';

import {
    USER_GET_USER_INFO
} from '../constants';

export const getUserInfo = function (userId) {
    return function(dispatch) {
        userService.userInfo(userId)
            .then(response => dispatch({
                type: USER_GET_USER_INFO,
                payload: response.data
            }))
    }
}