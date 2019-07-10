import React from 'react';
import "./Tab.scss";
import classes from '../Portfolio.module.scss';

let website = [
    {
        text: "Burger Builder (react.js, redux, firebase)",
        link: "https://burger--builder.herokuapp.com/",
        git: "https://github.com/RWC18/BurgerBuilder_WithReact",
    },
    {
        text: "Burger Builder (react.js, redux, firebase)",
        link: "https://burger--builder.herokuapp.com/",
        git: "https://github.com/RWC18/BurgerBuilder_WithReact",
    },
    {
        text: "Burger Builder (react.js, redux, firebase)",
        link: "https://burger--builder.herokuapp.com/",
        git: "https://github.com/RWC18/BurgerBuilder_WithReact",
    },
    {
        text: "Burger Builder (react.js, redux, firebase)",
        link: "https://burger--builder.herokuapp.com/",
        git: "https://github.com/RWC18/BurgerBuilder_WithReact",
    },
    {
        text: "Burger Builder (react.js, redux, firebase)",
        link: "https://burger--builder.herokuapp.com/",
        git: "https://github.com/RWC18/BurgerBuilder_WithReact",
    },
    {
        text: "Burger Builder (react.js, redux, firebase)",
        link: "https://burger--builder.herokuapp.com/",
        git: "https://github.com/RWC18/BurgerBuilder_WithReact",
    },
];



let data = [
    {
        name: 'All',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
    },
    {
        name: 'Website',
        text: website.map((item) => {
            return (
                <li>
                    <div>
                        <a href={item.link} target="_blank">
                            <i className="fas fa-eye"> </i>
                        </a>
                        <a href={item.git} target="_blank">
                            <i className="fab fa-github"> </i>
                        </a>
                    </div>
                    {item.text}
                </li>
            )
        })
    },
    {
        name: 'Web design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
    },
    {
        name: 'Illustration',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
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