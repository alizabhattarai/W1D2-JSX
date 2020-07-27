import React from 'react';

class RegistrationForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            FullName: '',
            Password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
      }
    
      handleSubmit(event) {
        console.log(`A fullname [${this.state.fullName}] was submitted with password [${this.state.password}]`);
        event.preventDefault();
      }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
              FullName:
              <input id="FullName" type="text"    value={this.state.fullname} onChange={this.handleChange} />
            </label>
            <br/>
            <label>
            Password:
              <input id="password" type="password" value={this.state.password} onChange={this.handleChange} />
            </label><br/>
            <button type="submit">submit</button>
          </form>


        )
    }
}
export default RegistrationForm;