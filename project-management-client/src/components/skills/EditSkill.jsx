import React, { Component } from 'react';
import axios from 'axios';

class EditSkill extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theSkill.title, 
        description: this.props.theSkill.description
    }
  }

    
  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/skills/${this.props.theSkill._id}`, { title, description }, {withCredentials:true})
    .then( () => {
        this.props.getTheSkill();
        // after submitting the form, redirect to '/Skills'
        this.props.history.push('/skills');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeTitle = (event) => {  
    this.setState({
      title:event.target.value
    })
  }

  handleChangeDesc = (event) => {  
    this.setState({
      description:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit Skill</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditSkill;