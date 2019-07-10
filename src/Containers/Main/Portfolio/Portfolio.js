import React, {useState} from 'react';

import classes from "./Portfolio.module.scss";
import Tabs from "./Tab/Tab";

const Portfolio = () => {
    document.title = "Portfolio | Vahe Minasyan";

    return (
        <div className={classes.Portfolio}>
            <h3>My Featured Works</h3>
            <h1>Portfolio</h1>
            <Tabs/>


        </div>
    )
};

export default Portfolio;