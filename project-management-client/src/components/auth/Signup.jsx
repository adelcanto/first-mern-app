import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';



class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: ''};
    this.service = new AuthService();
  }

  // handleChange() and handleSubmit() will be added here

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: "",

        });
        this.props.getUser(response)
      })
      .catch(error => alert(error.response.data.message))
      
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // handleUpload = (e) => {
  //   const uploadData = new FormData();
  //   uploadData.append('picture', e.target.files[0])
  //   this.service.upload(uploadData)
  //   .then(
  //     (data) => {
  //       this.setState({...this.state, picture: data.secure_url})
  //     },
  //     (error) => {
  //       console.error(error)
  //     }
  //   )
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />

          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          

          {/* <input type="file" name="picture" onChange={this.handleUpload}/> */}
          {/* <input type="file" name="picture" value={this.state.picture} onChange={ e => this.handleChange(e)}/> */}

          <input type="submit" value="Signup" />
        </form>
        <p>Already have account?
          <Link to={"/"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default Signup;