import listService from '../../services/list';

import {
    LIST_CREATE,
    LIST_UPDATE
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

export const updateList = function(id, data) {
    return function(dispatch) {
        listService.updateById(id,data)
            .then(response => {
                dispatch({
                    type: LIST_UPDATE,
                    payload: response.data
                })
            })
    }

}

export const itemPreview = function(internarId, data) {

}

export const itemPreviewAbort = function(internalId, data){
    
}