import React, { useEffect, useState } from 'react';

import './ProjectList.scss';

import ProjectItem from '../../components/ProjectItem/ProjectItem'

class ProjectList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      apiLink: 'http://localhost:8000/api'
    }
  }

  componentDidMount() {
    if(localStorage.getItem('token') !== "{}") {
      
      fetch(`${this.state.apiLink}/projects/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token')).token
        }
      })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ projects: data })
      })
    }
  }


  render() {
    if (localStorage.getItem('token') !== "{}") {
      return (
        <div className="ProjectList">
          <div className="container">
            {
              this.state.projects.map((el) =>
                <ProjectItem key={el.id} project={el} />
              )
            }
          </div>
        </div>
      )
    } else {
      return (
        <div className="ProjectList" >
          <div className="container">
            <div className="row">
              <h3>Here is not projects</h3>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default ProjectList;
