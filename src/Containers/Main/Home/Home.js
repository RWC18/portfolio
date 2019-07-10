import React, {useEffect, useState} from 'react';
import classes from "./Home.module.scss";
import TypistCycle from './TypistCicle/TypistCycle';

const Home = () => {
    document.title = "Home | Vahe Minasyan";

    return (
        <div className={classes.Home}>
           <h2>Hello,</h2>
            <h2>I am Vahe Minasyan</h2>
                <span>
                    <TypistCycle
                        content={[
                            <span><span className={classes.otherSpan}>Web</span> Developer</span>,
                            <span><span className={classes.otherSpan}>React.js</span> Developer</span>,
                            <span><span className={classes.otherSpan}>Javascript</span> Developer</span>,
                            <span><span className={classes.otherSpan}>Front-end</span> Developer</span>,
                        ]}
                        numberOfCycles={-1}
                        segmentDelay={1}
                        // ms={2000}
                    />
                </span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a href="../../../OtherFIles/Vahe_Minasyan_CV.pdf" download target="_blank">
                DOWNLOAD MY CV
            </a>
        </div>
    );
};

export default Home;