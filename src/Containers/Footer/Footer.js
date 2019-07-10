import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
    const links = [
        {
            link: 'https://www.facebook.com/vahe.minasyan.2233',
            title: <i className="fab fa-facebook-square"> </i>,
            className: classes.fb,
        },
        {
            link: 'https://www.linkedin.com/in/%D5%BE%D5%A1%D5%B0%D5%A5-%D5%B4%D5%AB%D5%B6%D5%A1%D5%BD%D5%B5%D5%A1%D5%B6-4a034916a/',
            title: <i className="fab fa-linkedin"> </i>,
            className: classes.ld,
        },
        {
            link: 'https://www.pinterest.com/vimi2233/',
            title: <i className="fab fa-pinterest-square"> </i>,
            className: classes.pt,

        },
        {
            link: 'https://stackoverflow.com/users/11208642/vahe',
            title: <i className="fab fa-stack-overflow"> </i>,
            className: classes.st,

        },
        {
            link: 'https://github.com/RWC18',
            title: <i className="fab fa-github-square"> </i>,
            className: classes.git,

        },
    ];

    return (
        <footer className={classes.Footer}>
            <p>Find me: </p>
            {
                links.map((items) => {
                    return(
                        <a href={items.link} key={items.link} className={items.className} target="_blank">{items.title}</a>
                    )
                })
            }
        </footer>
    )
};

export default Footer;