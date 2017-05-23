// header.js

import React from 'react';
import logo from './logo.png';

const Image = (props) => {
	return(
		<img src={props.src} alt={props.alt} title={props.title} />
	)
}

const Header = (props) => {
    return (
    	<header>
    		<nav>
    			<Image src={logo} />
    			<ul>
    				<li><a href="#">Create Install</a></li>
						<li><a href="#">Manage Domains</a></li>
						<li><a href="#">Update Websites</a></li>
						<li><a href="#">Update Plugin(s)</a></li>
    			</ul>
    		</nav>
    	</header>
    );
}

export default Header;