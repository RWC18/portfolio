import React from "react";

import classes from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <aside className={classes.sideBar}>
          {/*<aside className={classes.SideBar}> </aside>*/}
          <div className={classes.area}>
            <ul className={classes.circles}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
    </aside>
  )
};

export default SideBar;