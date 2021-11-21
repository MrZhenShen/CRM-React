import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import './ProjectList.scss';

import ProjectItem from '../../components/ProjectItem/ProjectItem'

const ProjectList = () => {

  const apiLink = 'http://localhost:8000/api'

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(`${apiLink}/projects/`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProjects(data)
      })
  }, [projects])

  return (

    <div className="ProjectList">
      <div className="container">
        {
          projects.map((el) =>
            <ProjectItem project={el} />
          )
        }

      </div>
    </div>

  );
}

ProjectList.propTypes = {};

ProjectList.defaultProps = {};

export default ProjectList;
