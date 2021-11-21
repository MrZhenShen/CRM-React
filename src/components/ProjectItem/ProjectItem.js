import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Button } from 'react-bootstrap';

import ClientInfoModal from '../../components/ClientInfoModal/ClientInfoModal'

import './ProjectItem.scss';

const ProjectItem = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const el = props.project

  return (
    <div className="ProjectItem">
      <div className="row" key={el.id}>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card w-18">
            <img src={el.Good.example_image} width="100" alt="Example image" />
            <div className="card-body">
              <h5 className="card-title">{el.Good.name}</h5>
              <p className="card-text">{el.Good.description}</p>
              <h6>{el.Good.pricing}</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card w-18">
            <div className="card-body">
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
          </div>
        </div>



        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card w-18">
            <div className="card-body">
              <h5 className="card-title">Client comment</h5>
              <p className="card-text">{el.client_comment}</p>
            </div>
          </div>
        </div>
      </div>

      <ClientInfoModal onClickClose={handleClose} show={show} client={el.Client}/>
    </div>
  )

};

ProjectItem.propTypes = {};

ProjectItem.defaultProps = {};

export default ProjectItem;
