import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import SkillList from './components/skills/SkillList';
import EditUser from './components/auth/EditUser'
import Navbar from './components/navbar/Navbar';
import SkillDetails from './components/skills/SkillDetails';
import Signup from './components/auth/Signup';
import AuthService from './components/auth/auth-service';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/protected-route';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}  />
          <Switch>
            <ProtectedRoute user={this.state.loggedInUser} path='/skills/:id' component={SkillDetails} />
            <ProtectedRoute user={this.state.loggedInUser} path='/skills' component={SkillList} />
            <ProtectedRoute user={this.state.loggedInUser} getUser={this.getTheUser} path='/:id' component={EditUser} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}  />
          <Switch>
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
            <Route exact path='/' render={() => <Login getUser={this.getTheUser} />} />
            <ProtectedRoute user={this.state.loggedInUser} path='/skills/:id' component={SkillDetails} />
            <ProtectedRoute user={this.state.loggedInUser} path='/skills' component={SkillList} />
            <ProtectedRoute userInSession={this.state.loggedInUser} path='/:id' component={EditUser} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
