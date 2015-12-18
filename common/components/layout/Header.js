import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 style={{display: 'flex', justifyContent: 'space-between'}} className="masthead-title">
			    <a style={{color: '#505050'}} href="/home" title="About Me">Rainer Oviir</a>
			    <p style={{opacity: '0.5', fontSize: '1em'}}>Full Stack Web Developer based in Seattle</p>
  			  <div>
            <a style={{padding: '0.1em 0.1em 0.1em 0.1em', color: 'black'}} href="https://github.com/raineroviir"><i className="fa fa-github 5"></i></a>
            <a style={{padding: '0.1em 0.1em 0.1em 0.1em', color: 'rgba(0,119,181,1)'}} href="https://www.linkedin.com/in/raineroviir"><i className="fa fa-linkedin 5"></i></a>
            <a style={{padding: '0.1em 0.1em 0.1em 0.1em', color: '#55acee'}} href="https://twitter.com/raineroviir"><i className="fa fa-twitter 5"></i></a>
          </div>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;
