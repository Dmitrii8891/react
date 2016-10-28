import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../style/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import User from '../components/User'
import Page from '../components/Page'
import Menu from '../components/Menu';
import * as pageActions from '../actions/PageActions'
import * as menuActions from '../actions/MenuAction'

class App extends Component {
  render() {
      const { user, page, menu } = this.props;
      const { getPhotos } = this.props.pageActions;
      const { getItem, getTest } = this.props.menuActions;
    return (
      <div className="App container">
        <div className="App-header">
            <Menu item={menu.item} arr={menu.arr}  getItem = { getItem } getTest={getTest}/>
            <div className="col-md-12">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
          <h2>Welcome to React it is Good this user { name }</h2>
        </div>
          <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
          <User name={user.name} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page,
        menu: state.menu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        menuActions: bindActionCreators(menuActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
