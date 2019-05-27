import React from 'react';

import Board from '../components/board/board';

import {connect} from 'react-redux';

import {getById} from '../redux/actions/board';

import {addList} from '../redux/actions/list';

import {
    updateActivity, 
    addActivity
} from '../redux/actions/activity';


const mapStateToProps = (state) => {
    console.log("state board", state);
    return {
        board: state.board,
        lists: state.lists,
        activities: state.activities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getById: (boardId) => {
            dispatch(getById(boardId))
        },
        editActivity: (id, data) => {
            dispatch(updateActivity(id, data))
        },
        addActivity: (data) => {
            dispatch(addActivity(data))
        },
        addList: (data) => {
            dispatch(addList(data))
        }
    }
}

class CurrentBoard extends React.Component {
    
    componentDidMount(){
        this.props.getById(1);
    }

    render(){
        if (!this.props.board) return null;
        
        return(
            <Board {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBoard);