import React from "react";
import {Header} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <NavLink exact to="/home">Home</NavLink>   
    )
}

export default NavBar;