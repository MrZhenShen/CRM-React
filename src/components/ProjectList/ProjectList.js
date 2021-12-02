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

  postData(url = '') {
    const response = fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token f32ccbd308386ffb816782ffe852f5a982b35268'
      }
    })
    return response
  }


  componentDidMount() {
    // this.postData(`${this.state.apiLink}/projects/`)
    //   .then((data) => {
    //     console.log(data);
    //   });

    fetch(`${this.state.apiLink}/projects/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token f32ccbd308386ffb816782ffe852f5a982b35268'
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
