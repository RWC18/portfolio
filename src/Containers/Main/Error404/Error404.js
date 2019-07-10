import React from 'react';
import classes from "./Error404.module.scss";

const Error404 = () => {
    document.title = "Error 404 | Vahe Minasyan";


    return (
        <div className={classes.Error}>
            <i className="fas fa-bomb"></i>
            <p>Error 404</p>
            <p>Page Not Found</p>
        </div>
    );
};

export default Error404;