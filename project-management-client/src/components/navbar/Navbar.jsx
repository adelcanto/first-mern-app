import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';

import NavBar from './NavbarStyles'


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);
      })
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <NavBar>
            <ul>
              <li><Link to='/dashboard'>Panel de Usuario</Link></li>
              <li>Welcome, {this.state.loggedInUser.username}</li>
              <li><Link to='/new/skill' style={{ textDecoration: 'none' }}>Añadir Habilidad</Link></li>
              <li><Link to={`/${this.state.loggedInUser._id}`} style={{ textDecoration: 'none' }}>Editar Usuario</Link></li>
              <li>
                <Link to='/'>
                  <button onClick={() => this.logoutUser()}>Logout</button>
                </Link>
              </li>
            </ul>
        </NavBar>

      )
    } else {
      return (
        <NavBar>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>
        </NavBar>
      )
    }
  }
}

export default Navbar;