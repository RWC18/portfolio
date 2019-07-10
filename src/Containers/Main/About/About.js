import React from 'react';

import classes from './About.module.scss';
import {NavLink} from "react-router-dom";

const About = () => {
    document.title = "About | Vahe Minasyan";


    return(
        <div className={classes.About}>
            <h3>Know About Me</h3>
            <h1>About Me</h1>
            <p>
                Hello I'm Vahe. I'm from Armenia and I live in Yerevan. I'm 18 years old.
                I'm student in National Polytechnic University of Armenia. From April 2019 I work in LaravelSoft LLC.
                I use React.js framework.
                My position is Front-end Developer. For future I want to go to China, Vietnam or Thailand.
            </p>
            <table>
                <tr>
                    <td><b>Name : </b>Vahe</td>
                    <td><b>Freelance : </b>Available</td>
                </tr>
                <tr>
                    <td><b>Date of birth : </b>03-10-2000</td>
                    <td><b>Email : </b><a href="mailto:vahe.minasyan.2000.at@gmail.com">vahe.minasyan.2000.at@gmail.com</a></td>
                </tr>
                <tr>
                    <td><b>Phone : </b>+374-94-223-323</td>
                    <td><b>Address : </b>Sport str. 12, Yerevan, Armenia</td>
                </tr>
                <tr>
                    <td><b>Nationality : </b>Armenia</td>
                    <td><b>Gender : </b>Male</td>
                </tr>
                <tr>
                    <td><b>Marital Status : </b>Single</td>
                    <td><b>Work Status : </b>Front-end developer</td>
                </tr>
            </table>
            <div className={classes.links}>
                <NavLink to={"/resume"}>RESUME</NavLink>
                <NavLink to={"/contact"} className={classes.fill}>HIRE ME</NavLink>
            </div>
        </div>
    )
};



export default About;