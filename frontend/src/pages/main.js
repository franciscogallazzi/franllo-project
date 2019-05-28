import React from 'react';

import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";


import AppNavBar from '../components/nav-bar/nav-bar';

import Boards from './boards';
import BoardDetail from './board-detail';
import homeRedirect from './home-redirect';


export default (props) => (
    <div>
        <AppNavBar />
        <Router>
            <div>
                <Route path="/" exact component={homeRedirect} />
                <Route path="/my-boards" component={Boards} />
                <Route path="/board/:boardId" component={BoardDetail} />
            </div>
        </Router>
    </div>
)