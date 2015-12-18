import React, { Component } from 'react';
import { getPortfolio } from '../api/portfolio';
import classNames from 'classnames';

class Portfolio extends Component {

  render() {

  	const portfolio = getPortfolio();
	const RoleRows = (roles, row) => {
		return roles.map((role) => {
			return (
				<div key={role.title} style={{borderBottom: '1px dotted #ccc'}} className="role_wrapper clearfix">
          <a className='role' href={row.link} target="_blank">Visit Demo Site</a>
					<p>Technologies: <span className="role_skills">{role.skills}</span></p>
				</div>
			);
		});
	}

    const PortfolioRows = portfolio.map((row) => {
      return (
        <container key={row.title}>
          <div style={{left: 'right', margin: '0 0 20px 0', padding: '20px 20px 0 20px', boxShadow: '1px 2px 2px #eaeaea', border: '1px solid #eaeaea'}}>
            <a href={row.link} target="_blank">
            <p style={{fontWeight: 'bold', fontSize: '2em', textAlign: 'center'}}>{row.title}</p>
            <div key={row.title} className={row.classname}>
            <h2 style={{paddingTop: '500px'}}></h2>
      			</div>
            </a>
            {RoleRows(row.roles, row)}
          </div>
        </container>
      );
    });

    return (
        <div className="posts">
        	{PortfolioRows}
        </div>
    );

  }
}

export default Portfolio;
