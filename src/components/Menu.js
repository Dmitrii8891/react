import React, {PropTypes, Component } from 'react'

export default class Menu extends Component {
    newTab(e) {
        this.props.getItem(e.target.innerText);
    }
    getArr(e){
        this.props.getTest();
    }
    render() {
        const { item, arr } = this.props;
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{ item }</a>
                    </div>
                    <button onClick={this.getArr.bind(this)}>{arr.length}</button>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a onClick={this.newTab.bind(this)}>Page 1</a></li>
                        <li><a onClick={this.newTab.bind(this)}>Page 2</a></li>
                        <li><a onClick={this.newTab.bind(this)}>Page 3</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
Menu.propTypes = {
    arr: PropTypes.array.isRequired,
    getItem: PropTypes.func.isRequired,
    getTest: PropTypes.func,
};