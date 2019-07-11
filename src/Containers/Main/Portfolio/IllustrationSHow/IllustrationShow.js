import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import Graffitti_M from "../../../../images/illustrations/Graffitti_M.svg";
import Graffiti_T from "../../../../images/illustrations/Graffiti_T.svg";
import Graffitii_A from "../../../../images/illustrations/Graffitii_A.svg";
import Graffitti_V from "../../../../images/illustrations/Graffitti_V.svg";
import LogoForBeautySalon from "../../../../images/illustrations/LogoForBeautySalon.png";
import spider_man from "../../../../images/illustrations/spider_man.svg";
import forest from "../../../../images/illustrations/forest.png";
import DreaMI from "../../../../images/illustrations/DreaMI.png";
import mountain from "../../../../images/illustrations/mountain.png";


import classes from "./IllustrationShow.module.scss";

const IllustrationShow = (props) => {
    let [currImg, SetImg] = useState(null);

    let images = [
        Graffitti_M,
        Graffiti_T,
        Graffitii_A,
        Graffitti_V,
        LogoForBeautySalon,
        spider_man,
        forest,
        DreaMI,
        mountain
    ];

    useEffect(() => {
        let img = images.map((item) => {
            if (item.includes(props.match.params.name)) {
                return <img src={item}/>
            }
        });

        SetImg(img);
    }, [props]);

    return (
        <div className={classes.ShowImage}>
            <NavLink to="/portfolio">
                <i className="fas fa-chevron-left"></i> BACK
            </NavLink>
            <div>
                {currImg}
            </div>
        </div>
    );
};

export default IllustrationShow;