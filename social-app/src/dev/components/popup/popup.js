import React from 'react';
import Modal from 'react-responsive-modal';
import './popup.css';
import Login from '../../containers/login.container';
import Signup from '../signup/signup';

export default class CustomModal extends React.Component {
  state = {
    open: false,
    show_login_page:true,
    show_signup_page:false,
    show_buttons:true,
  };

  onOpenModal = () => {
    this.setState({ open: true }); 
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  login = () => {
      this.setState({show_login_page:true,show_signup_page:false})
  }
  signup = () => {
      this.setState({show_login_page:false,show_signup_page:true})
  }
  otpSent = () => {
      this.setState({show_buttons:false})
  }
  otpSuccess = () => {
    this.setState({show_login_page:true,show_signup_page:false,show_buttons:true})
  }
  isLoggedIn = () => {
    this.setState({open:false})
  }
  logout = () => {
    delete localStorage.token
    this.setState({user:null})
  }
  render() {
    const { token } = localStorage
    const { open } =  this.state;
    return (
      <div className="example">
        
        {!token && 
          <button className="btn btn-action" onClick={this.onOpenModal}>
            Login/signup
          </button> }
        { token &&
        <span>
          <button >{token}</button>
          <button onClick={this.logout} >logout</button> 
        </span> }
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000}
        >
        { this.state.show_buttons && <div>
         <button className="btn btn-primary" onClick={this.login} >login</button> 
         <button className="btn btn-primary" onClick={this.signup}>signup</button> 
         </div> }
        { this.state.show_login_page && 
          <Login isLoggedIn={this.isLoggedIn} /> }
        { this.state.show_signup_page && 
          <Signup otpSent={this.otpSent}
                  otpSuccess={this.otpSuccess} /> }
          
        </Modal>
      </div>
    );
  }
}