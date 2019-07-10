import React from "react";

import {Switch, Route} from "react-router-dom"

import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";
import Error404 from "./Error404/Error404";
import SideBar from "./SideBar/SideBar";

import classes from './Main.module.scss';

const Main = () => {
    return (
        <main className={classes.Main}>
            <SideBar />
            <div className={classes.content}>
                <Switch>
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/resume" component={Resume} />
                    <Route component={Error404} />
                </Switch>
            </div>

        </main>
    )
}

export default Main;