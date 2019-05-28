import React from 'react';

import {getAllForMe} from '../redux/actions/board';

import {connect} from 'react-redux';

import BoardList from '../components/board-list/board-list';

import BoardCreate from '../components/board-create/board-create';

import {Container} from 'reactstrap';

import {createAndRedirectToBoard} from '../redux/actions/board';


const mapStateToProps = (state) => {
    return {
        boards: state.boards
    }
}

const mapDispatchToProps = (dispatch, {history}) => {
    return {
        getAllForMe: () => dispatch(getAllForMe()),
        createAndRedirectToBoard: (data) => dispatch(createAndRedirectToBoard(data, history))
    }
  }


class MyBoards extends React.Component {

    componentDidMount() {
        
        if (!this.props.boards.sincronized) {
            this.props.getAllForMe();
        }
        
    }

    render(){
        const {data, sincronized} = this.props.boards;
        if (!sincronized) return null;
        
        return (
            <div style={{height:'90vh'}} className="d-flex justify-content-center align-items-center">
                <Container >
                    <BoardList boards={data}>
                        
                        <BoardCreate 
                            createAndRedirectToBoard={this.props.createAndRedirectToBoard}/>
                        
                    </BoardList>
                </Container>
            </div>
            
        )
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(MyBoards);


