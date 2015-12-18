import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/home" title="About Me">Rainer Oviir</a>
			    <small>Full Stack Web Developer based in Seattle</small>
  			  <a style={{paddingLeft: '1em', marginRight: '0.2em'}} href="https://github.com/raineroviir"><i className="fa fa-github 5"></i></a>
          <a style={{color: 'rgba(0,119,181,1)', marginRight: '0.2em'}} href="https://www.linkedin.com/in/raineroviir"><i className="fa fa-linkedin 5"></i></a>
          <a style={{color: '#55acee'}} href="https://twitter.com/raineroviir"><i className="fa fa-twitter 5"></i></a>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;
