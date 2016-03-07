import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Link } from 'react-router'
import $ from 'jquery';

import {
  loadDirectory,
  loadFile
} from './../actions';

const connector = connect(function(state, props) {
  return(state);
});

class Wiki extends Component {
  constructor(props){
    super(props);
    const disp = props.dispatch;
    $.getJSON('/wiki', (response) => {
      let data = response.data.filter((fileName) => {
        return(fileName.match(/\.md/gi) && fileName.match(/\.md/gi).length > 0 && !(fileName.match(/^home\.md$/gi) && fileName.match(/^home\.md$/gi).length > 0));
      }).sort();
      data.unshift("Home.md");
      loadDirectory(disp, data);
    });
  }
  componentDidUpdate(){
    const disp = this.props.dispatch;
    const target = typeof this.props.params.splat !== "undefined" && this.props.params.splat.length > 0 ? this.props.params.splat : "Home.md";
    let file = '/file/' + target;
    if(this.props.currentFile.name !== target) {
      $.getJSON(file, (response) => {
        loadFile(disp, {name: target, data: response});
      });
    }
  }
  render(){
    return(
      <div className = "wikiContainer">
        <div className = "content">
          <h1 className = "">{this.props.currentFile.name.replace(/\-/gi, ' ').replace(/\.md/gi, '')}</h1>
          <br/>
          <div className = "col-xs-12">
            <div dangerouslySetInnerHTML = {(() => {return({__html: this.props.currentFile.data});})()}></div>
          </div>
        </div>
        <div className = "menu">
          {this.props.files.map((fileName) => {
            return(
              <Link key = {fileName} to = {"/" + fileName}>
                {fileName.replace(/\-/gi, ' ').replace(/\.md/gi, '')}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connector(Wiki);