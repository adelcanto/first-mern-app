import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddSkill from './AddSkill'; // <== !!!

class SkillList extends Component {
  constructor(){
      super();
      this.state = { listOfSkills: [] };
  }

  getAllSkills = () =>{
    axios.get(`http://localhost:5000/api/skills`, {withCredentials:true})
    .then(responseFromApi => {
      this.setState({
        listOfSkills: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllSkills();
  }

  render(){
    return(
      <div>
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfSkills.map( skill => {
            return (
              <div key={skill._id}>
                <Link to={`/skills/${skill._id}`}>
                  <h3>{skill.title}</h3>
                </Link>
                {/* <p style={{maxWidth: '400px'}} >{skill.description} </p> */}
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddSkill getData={() => this.getAllSkills()}/> {/* <== !!! */}
        </div>
      </div>
    )
  }
}

export default SkillList;