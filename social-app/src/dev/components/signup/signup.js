import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./signup.css";
import NavbarSocial from '../navbar/navbar'
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      phone:"",
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
    this.gotoPage=this.gotoPage.bind(this)
  }
  gotoPage(page){
    this.props.history.push(page)
  }
  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { name,phone,email,password } =this.state
    let user={name,phone,email,password}
    fetch('/users/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }


  render() {
    return (
      <div className="signup">
        <NavbarSocial gotoPage={(page)=>this.gotoPage(page)} />
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="phone" bsSize="large">
            <ControlLabel>phone NO</ControlLabel>
            <FormControl
              autoFocus
              type="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
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
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            signup
          </Button>
        </form>
      </div>
    );
  }
}