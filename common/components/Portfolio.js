import React, { Component } from 'react';
import { getPortfolio } from '../api/portfolio';
import classNames from 'classnames';

class Portfolio extends Component {

  render() {

  	const portfolio = getPortfolio();
	const RoleRows = (roles, row) => {
		return roles.map((role) => {
			return (
				<div key={role.title} className="role_wrapper clearfix">
          <a className='role' href={row.link} target="_blank">Visit Demo Site</a>
					<p className="role_title">{role.title}<br />
					<span className="role_skills">{role.skills}</span></p>
				</div>
			);
		});
	}

    const PortfolioRows = portfolio.map((row) => {
      return (
        <container key={row.title}>
          <div className='portfolio_item'>
            <a href={row.link} target="_blank">
            <p style={{fontWeight: 'bold', fontSize: '2em', textAlign: 'center'}}>{row.title}</p>
            <div key={row.title} className={row.classname}>
            <h2></h2>
            <h2></h2>
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
