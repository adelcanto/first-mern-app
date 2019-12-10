import React, { Component } from 'react';
import axios from 'axios';


class AddSkill extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "", category: "", skillPicture:""};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const category = this.state.category;
    const skillPicture = this.state.skillPicture
    // const {title, description, category} = this.state
    axios.post("http://localhost:5000/api/skills", { title, description, category, skillPicture}, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({title: "", description: "", category: "" , skillPicture:""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <br/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          <br/>
          <label>Category:</label>
          <textarea name="category" value={this.state.category} onChange={ e => this.handleChange(e)} />
          <br/>
          <label>Picture:</label>
          <input type="file" name="picture" value={this.state.skillPicture} onChange={ e => this.handleChange(e)}/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddSkill;
