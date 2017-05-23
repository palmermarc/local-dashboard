import React from 'react';
import Header from './Header';
//import Content from './Content';
import CreateInstall from './CreateInstall';
import './App.css';

const App = (props) => {
  return (
  	<div>
	  	<Header />
	  	<section>
	  		<CreateInstall />
			</section>
    </div>
  );
}

export default App;