import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./loginpages.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
      password: "",
      credentials_err:false
    };
  }

  validateForm() {
    return this.state.phone.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    let user ={phone:9652,password:'abcd',name:"naresh"}
    const {phone,password } =this.state
    if( parseInt(phone ,10) === user.phone && password === user.password ){
      this.props.isLoggedIn()
      localStorage.token="naresh"
      this.props.onLogin({is_logged_in:true})
    }else{
      this.setState({credentials_err:true})
    }
    event.preventDefault(); 
  }

  render() {
    return (
      <div className="Login">
        <form >
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>phone</ControlLabel>
            <FormControl
              autoFocus
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          { this.state.credentials_err && 
            <p> you entered wrong phone number or password </p> }
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.handleSubmit}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}