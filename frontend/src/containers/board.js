import Board from '../components/board/board';

import {connect} from 'react-redux';

import {getById} from '../redux/actions/board';

const mapStateToProps = (state) => {
    return {
        board: state.board
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getById: (boardId) => {
        dispatch(
            getById(getById)
        )
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Board);