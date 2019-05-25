import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-3 fixed-top'>
          <Container>
            <NavbarBrand href='/'>
              <h4>Some Name</h4>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink style={navLinkStyle} tag={Link} to='/'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={navLinkStyle} tag={Link} to='/about'>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const navLinkStyle = {
  fontWeight: 'bold'
};

export default AppNavbar;
