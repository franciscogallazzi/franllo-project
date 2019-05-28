import boardService from '../../services/board';

import {
    BOARD_REQUEST_BYID,
    BOARD_SUCCESS_BYID,
    BOARD_FAILED_BYID,
    BOARD_GET_FOR_ME,
    BOARD_CREATE,
    BOARD_CREATE_AND_REDIRECT_TO_BOARD,
    LIST_GET_ALL,
    ACTIVITY_GET_ALL
} from '../constants';

export const resetCurrentBoard = function() {
    return function(dispatch){
        dispatch(successGetById({}));
        dispatch(listsGetAll([]));
        dispatch(activitiesGetAll([]));
    }
}

export const getById = function (id) {
    return function(dispatch) {
        dispatch({
            type:BOARD_REQUEST_BYID
        })
        boardService.getById(id)
            .then(response => {
                let board = {
                    id: response.data.id,
                    name: response.data.name
                }
                let activities = [];

                let lists = response.data.lists.map(list => {
                    activities = activities.concat(list.activities.map(activity => {
                        return {
                            id: activity.id,
                            title: activity.title,
                            listId: activity.listId
                        }
                    }));
                    return {
                        id: list.id,
                        name: list.name,
                        boardId: list.boardId
                    }
                })

                dispatch(successGetById(board));
                dispatch(listsGetAll(lists));
                dispatch(activitiesGetAll(activities));


            })
            .catch(err => dispatch(failedGetById()))
    }
}

export const getAllForMe = function(){
    return function(dispatch){
        boardService.getAllForMe()
            .then(response => dispatch({
                type: BOARD_GET_FOR_ME,
                payload: response.data
            }))
    }
}

export const create = function(data){
    return function(dispatch){
        boardService.create(data)
            .then(response => dispatch({
                type: BOARD_CREATE,
                payload: response.data
            }))
    }
}

export const createAndRedirectToBoard = function(data, history){
    return function(dispatch){
        boardService.create(data)
            .then(response => {
                dispatch({
                    type: BOARD_CREATE,
                    payload: response.data
                })
                history.push(`/board/${response.data.id}`)
            })
    }
}

function successGetById(payload) {
    return {
        type: BOARD_SUCCESS_BYID,
        payload
    }
}

function failedGetById() {
    return {
        type: BOARD_FAILED_BYID
    }
}

function listsGetAll(payload) {
    return {
        type: LIST_GET_ALL,
        payload
    }
}

function activitiesGetAll(payload) {
    return {
        type: ACTIVITY_GET_ALL,
        payload
    }
}