import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className = "headerContainer">
        <div className = "mast">
          <h1>
            Wiki-O-Matic
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;