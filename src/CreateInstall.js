// createinstall.js

import React, {Component} from 'react';

class CreateInstall extends Component {
	constructor(props){
    super(props)
    this.state = {
      inputVal: props.inputValue
    }
    // preserve the initial state in a new object
    this.baseState = this.state 
  }
  
  resetForm = () => {
    this.setState(this.baseState)
  }
  
	handleChange(event) {
    this.setState({value: event.target.value});
  }
  
	handleSubmit(event) {
		event.preventDefault();
		console.log(event);
    
  }
	
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<table cellPadding="3" cellSpacing="3">
					<tbody>
						<tr>
							<td><label>Website Name</label></td>
							<td><input onChange={this.handleChange} id="webfolder" type="text" name="webfolder" value={this.state.value} /></td>
						</tr>
						<tr>
							<td><label>Server Admin's Email Address</label></td>
							<td><input onChange={this.handleChange}  id="serveradmin" type="email" name="serveradmin" value={this.state.value} /></td>
						</tr>
						<tr>
							<td><label>Which folder will this be installed in?</label></td>
							<td>
								<select name="parentfolder">
									<option value="">Select One...</option>
									<option value="2060digital">2060 Digital</option>
									<option value="hubbard">Hubbard</option>
									<option value="stlclients">STL Clients</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><label>Check this box to create a database</label></td>
							<td><input id="createdb" type="checkbox" name="createdb" value="1" /></td>
						</tr>
						<tr>
							<td><label>Check this box to import an existing database</label></td>
							<td><input id="importdb" type="checkbox" name="importdb" value="1" /></td>
						</tr>
						<tr>
							<td><label>Upload your database file</label></td>
							<td><input id="dbfile" type="file" name="dbfile" value="" /></td>
						</tr>
						<tr>
							<td colSpan="2">
								<input type="submit" name="Create Install" />
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		)
	}
}

export default CreateInstall;
