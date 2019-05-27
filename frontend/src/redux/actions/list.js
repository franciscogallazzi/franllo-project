import listService from '../../services/list';

import {
    LIST_CREATE
} from '../constants'


export const addList = function(data) {
    return function(dispatch) {
        listService.create(data)
            .then(response => {
                dispatch({
                    type: LIST_CREATE,
                    payload: response.data
                })
            })
    }

}