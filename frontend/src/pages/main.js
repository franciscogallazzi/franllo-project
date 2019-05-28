import React from 'react';

import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";


import AppNavBar from '../components/nav-bar/nav-bar';

import Boards from './boards';
import CurrentBoard from './current-board';


export default (props) => (
    <div>
        <AppNavBar />
        <Router>
            <div>
                <Route path="/" exact component={CurrentBoard} />
                <Route path="/boards" component={Boards} />
            </div>
        </Router>
    </div>
)