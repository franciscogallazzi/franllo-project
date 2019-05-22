import React from 'react';

import {
    Navbar,
    NavbarBrand
} from 'reactstrap'

const AppNavBar = () => (
    <Navbar style={{backgroundColor:"#393e46", color:"white"}} expand="md">
        <NavbarBrand style={{color:'#eeeeee'}} href="/">Franllo</NavbarBrand>
        
    </Navbar>

)

export default AppNavBar;