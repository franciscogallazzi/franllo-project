import React from 'react';

import Header from './header';
import List from './list';

import {Button} from 'reactstrap'

const style = {
    userSelect: 'none',
    whiteSpace: 'nowrap',
    marginBottom: '8px',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingBottom: '8px',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top:115
}


class Board extends React.Component {

    render(){
        return (
            <div>
                <Header title={this.props.board.name} />
                <div style={style}>
                    {this.props.lists.map(list => (
                        <List data={list} activities={this.props.activities.filter(activity => activity.listId == list.id)}/>
                    )) }
                </div>
            </div>
        )
    }
}

export default Board;
