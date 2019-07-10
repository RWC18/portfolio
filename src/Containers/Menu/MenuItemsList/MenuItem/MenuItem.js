import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import classes from "../../Menu.module.scss";


const MenuItem = ({to, title}) => {
    return <NavLink to={to} activeClassName={classes.active} >{title}</NavLink>
};

export default MenuItem;