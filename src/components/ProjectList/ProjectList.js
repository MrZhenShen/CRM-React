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
    if (localStorage.getItem('token') !== "{}" && JSON.parse(localStorage.getItem('token')).is_staff === true) {

      // fetch(`${this.state.apiLink}/projects/`, {
      fetch("http://127.0.0.1:8000/api/projects/", {
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
          console.log(data)
        })
    }
  }


  render() {
    if (localStorage.getItem('token') !== "{}" && JSON.parse(localStorage.getItem('token')).is_staff === true) {
      return (
        <div className="ProjectList row">
          {
            this.state.projects.map((el) =>
              <ProjectItem key={el.id} project={el} />
            )
          }
        </div>
      )
    } else {
      return (
        <div className="ProjectList" >
          <div className="row">
            <ul>
              <h2>Issue due to:</h2>
              <li>You are not authenticated</li>
              <li>You are not staff</li>
            </ul>
          </div>
        </div>
      )
    }
  }
}


export default ProjectList;
