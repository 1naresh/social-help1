import React, { Component } from 'react';
import './navbar.css';
import { MenuItem,Nav,NavItem,Navbar,NavDropdown
 } from 'react-bootstrap';

class NavbarSocial extends Component {
  constructor(props){
    super(props)
    this.gotoPage=this.gotoPage.bind(this)
  }
  gotoPage(page){
    this.props.gotoPage(page)
  }
  render() {
    return (
      <div> 
        <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            link
          </NavItem>
          <NavItem eventKey={2} onClick={()=>this.gotoPage("/") }>
            home
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={()=>this.gotoPage("/signup") } >
            signup 
          </NavItem>  
          <NavItem eventKey={2} onClick={()=>this.gotoPage("/login") }>
            Login
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
        {/* <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/events">events</Link>
        <Link to="/contribute">contribute</Link>
        <Link to="/contact">contact</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link> */}
      </div>
    );
  }
}

export default NavbarSocial;