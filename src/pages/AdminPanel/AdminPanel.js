import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AdminPanel.scss';

const AdminPanel = () => {

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
    <div className="AdminPanel">
      <center><h2>AdminPanel Component</h2></center>
      <div className="container">
        {
          projects.map((el) =>
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
                    <a href="">View client details</a>

                    <button className="btn btn-primary">{el.Status.title}</button>
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
          )}

      </div>

    </div>
  )
};

AdminPanel.propTypes = {};

AdminPanel.defaultProps = {};

export default AdminPanel;
