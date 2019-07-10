import React from 'react';
import {
    Route,
    Switch,
    Redirect, NavLink
} from 'react-router-dom';


import Portfolio from "../Main/Portfolio/Portfolio";
import About from "../Main/About/About";
import Error404 from "../Main/Error404/Error404";
import Home from "../Main/Home/Home";
import Contact from "../Main/Contact/Contact";
import Menu from "../Menu/Menu";
import SideBar from "../Main/SideBar/SideBar";
import Resume from "../Main/Resume/Resume";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";



const Root = () => {
    return (
        <>
            <Menu/>
            <Main/>
            <Footer/>
        </>
    )
};

export default Root;