import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      phone:"",
      email:"",
      password:"",
      confirmPassword:"",
      sent_otp:"",
      entered_otp:"",
      isLoading: false,
      otp_sent:false,
      otp_err:false
    };
  }
  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }
  validateForm = e => {
    return (
      this.state.name.length >0 &&
      this.state.phone.length >= 10 &&
      this.state.email.length >5 &&
      this.state.password.length > 5 &&
      this.state.password === this.state.confirmPassword
    )
  }
  handleSubmit = async event => {
    event.preventDefault();
    const otp =Math.round(Math.random()*1000000)
    // const { name,phone,email,password,confirmPassword } = this.state
    // fetch('/users/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({name,phone,email,password,confirmPassword,otp})
    // })
    console.log(otp)
    this.setState({ isLoading: true,otp_sent:true,sent_otp:otp });
    this.props.otpSent()
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();
    const { sent_otp,entered_otp } = this.state
    if( parseInt(entered_otp ,10) === sent_otp){
      this.setState({otp_success:true})
      this.props.otpSuccess()
    }else{
      this.setState({otp_err:true})
    }
    this.setState({ isLoading: true });
  }


  render() {
    if(this.state.otp_sent){
      return (
        <div>
          <FormGroup  bsSize="large">
            <ControlLabel>otp</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              name="entered_otp"
              onChange={this.handleChange}
              value={this.state.entered_otp}
            />
            { this.state.otp_err && 
             <p>you entered wrong otp</p> }
            <button onClick={this.handleConfirmationSubmit}>submit</button>
          </FormGroup>
        </div>
      )
    }
    return (
      
      <div className="signup">
      {/* <NavbarSocial /> */}
        <form onSubmit={this.handleSubmit}>
        <FormGroup  bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </FormGroup>
          <FormGroup  bsSize="large">
            <ControlLabel>phone NO</ControlLabel>
            <FormControl
              autoFocus
              type="number"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </FormGroup>
          <FormGroup  bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup  bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup  bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            name="confirmPassword"
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
          <Button
            block
            bsSize="large"
            // disabled={!this.validateForm()}
            type="submit"
            onClick={this.handleSubmit}
        
          >signup
          </Button>
       
    
        </form>
      </div>
    );
  }
}