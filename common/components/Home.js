import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {
    const currentTechnologies = ['React', 'Redux', 'Relay', 'MongoDB', 'RethinkDB', 'GraphQL', 'Node', 'Express', 'Mocha', 'Webpack'];
    return (
      <container className="posts">
        <h3>About Me</h3>
        <p>I have been developing web sites for almost 1 year. I currently focus on JavaScript web application development.</p>
        <p>I ventured into software development after getting inspired creating functions in Excel</p>
        <div className="post banner">
        </div>
        <div className="post clearfix">
          <h2>Technologies I currently use:</h2>
            {currentTechnologies.map((tech) => {
              return (
                <div className="skill-item clearfix" style={{fontSize: '1.2em'}}><em>{tech}</em></div>
              );
            })
            }
        </div>
        <h3><a href="/portfolio">Take me back to the portfolio</a></h3>
      </container>
    );
  }
}

export default Home;
