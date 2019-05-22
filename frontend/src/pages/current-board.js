import React from 'react';

import Board from '../components/board/board';

import {connect} from 'react-redux';

import {getById} from '../redux/actions/board';

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
        dispatch(
            getById(boardId)
        )
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