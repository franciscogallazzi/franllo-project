import axios from 'axios';

const getAllByBoardId = (boardId) => {
    const params = {
        filter: {
        include: {
            relation:'lists',
            scope: {
                include: {
                    relation:'activities'
                }

            }
            
        }}
    }
    return axios.get(`${process.env.REACT_APP_BACKEND_HOST}/boards/${id}`,{params}) 
}

export default {
    getById
}