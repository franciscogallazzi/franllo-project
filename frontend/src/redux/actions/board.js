import boardService from '../../services/board';

import {
    BOARD_REQUEST_BYID,
    BOARD_SUCCESS_BYID,
    BOARD_FAILED_BYID,
    LIST_GET_ALL,
    ACTIVITY_GET_ALL
} from '../constants';

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