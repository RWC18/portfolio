import React from 'react';

import classes from "../Menu.module.scss";
import {NavLink} from "react-router-dom";

const MenuItemsList = ({MenuItems}) => {
    return (
           <ul>
                {
                    MenuItems.map(({title, link})=>{
                        return (
                            <li key={title}>
                                <NavLink to={link} exact activeClassName={classes.active}>
                                    {title}
                                </NavLink>
                            </li>
                        )
                    })
                }
           </ul>
    )
};

export default MenuItemsList;

