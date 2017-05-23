import React from 'react';

const Input = (props) => {
	let input_type = props.type;
	
	if( input_type == 'textarea' ) {
		return <textarea id={props.id} name={props.name}>props.value</textarea>
	}
	
	return <input id={props.id} type={props.type} name={props.name} value={props.value} />
}

const Label = (props) => {
	return (
		return <label for={props.id} class={props.class}>{props.value}</label>
	)
}

export default Input;
export default Label;
