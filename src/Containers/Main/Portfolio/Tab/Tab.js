import React from 'react';
import "./Tab.scss";
import {NavLink} from 'react-router-dom';
import classes from '../Portfolio.module.scss';

let website = [
    {
        text: "Burger Builder (react.js, redux, firebase)",
        link: "https://burger--builder.herokuapp.com/",
        git: "https://github.com/RWC18/BurgerBuilder_WithReact",
    },
    {
        text: "Single page card-website  (react.js, node.js)",
        link: "",
        git: "https://github.com/RWC18/DM-DreaMi",
    },
    {
        text: "Computer service-shop website (HTML5, CSS3, MySQL, PHP)",
        link: "https://vahe-minasyan.herokuapp.com/",
        git: "https://github.com/RWC18/ArcCert_webPage_withReact",
    },
    {
        text: "Calculator (react.js, redux)",
        link: "https://calculator-redux.herokuapp.com/",
        git: "https://github.com/RWC18/calculator_react-redux",
    },
    {
        text: "Blog (react.js)",
        link: "",
        git: "https://github.com/RWC18/simple_react_app",
    },
];

let webdesign = [
    {
        text: "Design for card website",
        link: "../../../OtherFiles/onepage.xd",
    },
    {
        text: "Design for hotel",
        link: "../../../OtherFiles/hotel.xd",
    },
];


let illustration = [
    {
        text: "Graffiti letter 'A'",
        link: "images/illustrations/Graffitii_A",
    },
    {
        text: "Graffiti letter 'M'",
        link: "images/illustrations/Graffitti_M",
    },
    {
        text: "Graffiti letter 'V'",
        link: "images/illustrations/Graffitti_V",
    },
    {
        text: "Graffiti letter 'T'",
        link: "images/illustrations/Graffiti_T",
    },
    {
        text: "Montain",
        link: "images/illustrations/mountain",
    },
    {
        text: "Forest",
        link: "images/illustrations/forest",
    },
    {
        text: "Spider-Man | Banner",
        link: "images/illustrations/spider_man",
    },
    {
        text: "Logo for beauty salon",
        link: "images/illustrations/LogoForBeautySalon",
    },
];




let data = [
    {
        name: 'All',
            text: <>
                <h4>Websites</h4>
                {
                website.map((item) => {
                return (
                    <li>
                        <div>
                            {
                                item.link !== "" ?
                                    <a href={item.link} target="_blank">
                                        <i className="fas fa-eye"> </i>
                                    </a>
                                    :
                                    <a style={{cursor: 'not-allowed'}} target="_blank">
                                        <i className="fas fa-eye-slash"> </i>
                                    </a>
                            }

                            <a href={item.git} target="_blank">
                                <i className="fas fa-code"> </i>
                                {/*<i className="fab fa-github"> </i>*/}
                            </a>
                        </div>
                        {item.text}
                    </li>
                )
            })
        }

        <h4>Webpage design</h4>
                {
                    webdesign.map((item) => {
                        return (
                            <li>
                                <div>
                                    <a href={item.link} download className={classes.download}>
                                        <i className="fas fa-file-download"> </i>
                                    </a>
                                </div>
                                {item.text}
                            </li>
                        )
                    })
                }

                <h4>Illustrations</h4>
                {
                    illustration.map((item) => {
                        return (
                            <li>
                                <div>
                                    <NavLink to={item.link} className={classes.download}>
                                        <i className="fas fa-file-image"> </i>
                                    </NavLink>
                                </div>
                                {item.text}
                            </li>
                        )
                    })
                }
        </>
    },
    {
        name: 'Website',
        text: website.map((item) => {
            return (
                <li>
                    <div>
                        {
                            item.link !== "" ?
                                <a href={item.link} target="_blank">
                                    <i className="fas fa-eye"> </i>
                                </a>
                                :
                                <a style={{cursor: 'not-allowed'}} target="_blank">
                                    <i className="fas fa-eye-slash"> </i>
                                </a>
                        }

                        <a href={item.git} target="_blank">
                            <i className="fas fa-code"> </i>
                            {/*<i className="fab fa-github"> </i>*/}
                        </a>
                    </div>
                    {item.text}
                </li>
            )
        })
    },
    {
        name: 'Web design',
        text: webdesign.map((item) => {
            return (
                <li>
                    <div>
                        <a href={item.link} download className={classes.download}>
                            <i className="fas fa-file-download"> </i>
                        </a>
                    </div>
                    {item.text}
                </li>
            )
        })
    },
    {
        name: 'Illustration',
        text: illustration.map((item) => {
            return (
                <li>
                    <div>
                        <NavLink to={item.link} className={classes.download}>
                            <i className="fas fa-file-image"> </i>
                        </NavLink>
                    </div>
                    {item.text}
                </li>
            )
        })
    },
];

class Tabs extends React.Component {
    constructor() {
        super();

        this.state = {
            activeTab: 0,
            data: data
        }

        this.changeTabOnClick = this.changeTabOnClick.bind(this);
    }

    changeTabOnClick(index) {
        this.setState({
            activeTab: index
        });
    }

    render() {
        return (
            <div className="tabs-body">
                <TabHeader data={this.state.data}
                           click={this.changeTabOnClick}
                           activeId={this.state.activeTab} />
                <TabContent data={this.state.data}
                            activeId={this.state.activeTab} />
            </div>
        )
    }
}

class TabHeader extends React.Component {
    doClick(index, event) {
        this.props.click(index);
    }

    render() {
        let activeClass = this.props.activeId;

        let tabs = this.props.data.map((item, index) => {
            return <li className={(activeClass === index ? 'active' : '')}>
                <a onClick={this.doClick.bind(this, index)} ><span>{item.name}</span></a>
            </li>
        });

        return (
            <ul className="tabs-header">{tabs}</ul>
        )
    }

}

class TabContent extends React.Component {
    render() {
        let activeClass = this.props.activeId;

        let content = this.props.data.map((item, index) => {
            return <div  className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} ><ol className={classes.lists}>{item.text}</ol></div>
        });

        return (
            <div className="tabs-content">{content}</div>
        );
    }
}


export default Tabs;