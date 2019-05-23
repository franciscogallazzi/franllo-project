import activityService from '../../services/activity';

import {
    ACTIVITY_UPDATE,
    ACTIVITY_CREATE
} from '../constants'

export const updateActivity = function(id, data) {
    return function(dispatch) {
        activityService.updateById(id, data)
            .then(response => {
                dispatch({
                    type: ACTIVITY_UPDATE,
                    payload: response.data
                })
            })
    }

}

export const addActivity = function(data) {
    return function(dispatch) {
        activityService.create(data)
            .then(response => {
                dispatch({
                    type: ACTIVITY_CREATE,
                    payload: response.data
                })
            })
    }

}