import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
	return (
		<header>
			<h1 className='logo'>logo</h1>
			<div className='headList'>
				<ul>
					<li><Link to="/">HOME</Link></li>
					<li><Link to="/AboutME">About Me</Link></li>
					<li><Link to="/portfolio/1">PORTFOLIO</Link></li>
				</ul>
			</div>
			
		</header>
	);
};

export default Header;