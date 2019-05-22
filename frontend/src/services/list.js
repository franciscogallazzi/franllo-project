import axios from 'axios';

const apiBasePath = "http://localhost:3001/api";

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
    return axios.get(`${apiBasePath}/boards/${id}`,{params}) 
}

export default {
    getById
}