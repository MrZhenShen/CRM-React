import React from 'react';

import './ProjectList.scss';

import ProjectItem from '../../components/ProjectItem/ProjectItem'

class ProjectList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      statuses: [],
      apiLink: 'http://localhost:8000/api'
    }
  }

  componentDidMount() {
    if (localStorage.getItem('credentials') !== "{}" && JSON.parse(localStorage.getItem('credentials')).is_staff === true) {

      fetch("http://127.0.0.1:8000/api/projects/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + JSON.parse(localStorage.getItem('credentials')).token
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({ projects: data })
        })

      fetch("http://127.0.0.1:8000/api/statuses/", {
        method: 'GET'
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({ statuses: data })
        })
    }
  }


  render() {
    if (localStorage.getItem('credentials') !== "{}" && JSON.parse(localStorage.getItem('credentials')).is_staff === true) {
      return (
        <div className="ProjectList row">
          {
            this.state.projects.length > 0
              ? this.state.projects.map((el) => <ProjectItem key={el.id} project={el} statuses={this.state.statuses} />)
              : <center>There are no projects ordered</center>
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
