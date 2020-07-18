import React from 'react';

import 'test.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
         };
    }

    handleSubmit = () => {

    }

    handleChange = e => {
        const { value, name} = e.target;

        this.setState({name: value});
    }
    render() { 
        return (
            <div>
                <form onClick={this.handleSubmit}>
                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
                    <label>Email</label>
                    <input name="password" 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleSubmit}
                    required/>
                    <label>Password</label>

                    <input type="submit" value="Submit form"/>
                </form>
            </div>
          );
    }
}
 
export default SignIn;