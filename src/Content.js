import React from 'react';

const Section = (props) => {
	return (
		<section>{props.children}</section>
	)
}

const Content = (props) => {
  return (
	  	<Section children="This is just a test." />
  );
}

export default Content;