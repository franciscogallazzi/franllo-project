import React from 'react';

import {connect} from 'react-redux';

import {
    Redirect
} from 'react-router-dom'


const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const HomeRedirect = ({userInfo}) => {
    const {sincronized, currentBoard} =  userInfo;

    if (!sincronized) {
        return <div>SINCRO USER INFO</div>
    } else if (currentBoard) {
        return <Redirect to={`/board/${currentBoard}`}/>
    } else {
        return  <Redirect to={`/my-boards`}/>
    }

}

export default connect(mapStateToProps)(HomeRedirect);