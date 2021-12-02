import React, { useEffect, useState } from 'react';

import './ProjectList.scss';

import ProjectItem from '../../components/ProjectItem/ProjectItem'

class ProjectList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      apiLink: 'http://localhost:8000/api',
      token: JSON.parse(localStorage.getItem('token')),
    }
  }

  componentDidMount() {

    fetch(`${this.state.apiLink}/projects/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+this.state.token.token
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ projects: data })
      })
  }

  render() {
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

    );
  }
}


export default ProjectList;
