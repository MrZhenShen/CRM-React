import React, { useState } from 'react';

import { Dropdown, Button } from 'react-bootstrap';

import ProjectAboutClientModal from '../../components/ProjectAboutClientModal/ProjectAboutClientModal'

import './ProjectItem.scss';

const ProjectItem = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const el = props.project

  return (
    <div className="ProjectItem col-12" key={el.id}>

      <div className="project-info">
        <img src={el.Good.example_image} width="100" alt="" />
        <div className="card-body">
          <h5 className="card-title">{el.Good.name}</h5>
          <p className="card-text">{el.Good.description}</p>
          <h6>{el.Good.pricing}</h6>
        </div>
      </div>


      <div className="project-info">
        <h5 className="card-title">{el.Client.first_name} {el.Client.last_name}</h5>
        <p className="card-text">id: {el.Client.id}</p>
        <Button variant="primary" onClick={handleShow}>
          View details
        </Button>

        <Dropdown>
          <Dropdown.Toggle variant={el.Status.color} id="dropdown-basic">
            {el.Status.title}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>


      <div className="project-info">
        <h5 className="card-title">Client comment</h5>
        <p className="card-text">{el.client_comment}</p>
      </div>


      <ProjectAboutClientModal onHide={handleClose} show={show} client={el.Client} />
    </div>
  )

};


export default ProjectItem;
