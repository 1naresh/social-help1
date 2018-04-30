import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./loginpages.css";
import NavbarSocial from '../navbar/navbar';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
      password: ""
    };
    this.gotoPage=this.gotoPage.bind(this)
  }
  gotoPage(page){
    this.props.history.push(page)
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { phone,password } =this.state;
    this.props.onLogin("a")
    if(phone === "9652" && password === '1234'){
      console.log(77)
    }
  }

  render() {
    return (
      <div className="Login">
       <NavbarSocial gotoPage={(page)=>this.gotoPage(page)} />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="phone" bsSize="large">
            <ControlLabel>Phone</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            // disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          
        </form>
      </div>
    );
  }
}