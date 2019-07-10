import React from 'react';

import MenuItemsList from "./MenuItemsList/MenuItemsList";

import classes from "./Menu.module.scss";

const Menu = () => {
    let menu = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About Me",
            link: "/about"
        },
        {
            title: "Resume",
            link: "/resume"
        },
        {
            title: "Portfolio",
            link: "/portfolio"
        },
        {
            title: "Contact",
            link: "/contact"
        },
    ];

    return(
        <div className={classes.Menu}>
            <MenuItemsList MenuItems={menu}/>
        </div>
    );
};

export default Menu;