import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

//import top level compoents
import Wiki from './Wiki';

class ContentProvider extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/*" component={Wiki}>
          <Route path="/:fileId" component={Wiki}>
          </Route>
        </Route>
      </Router>
    )
  }
}

export default ContentProvider;
