import React from 'react';

import { Dropdown, Button } from 'react-bootstrap';

import ProjectAboutClientModal from '../../components/ProjectAboutClientModal/ProjectAboutClientModal'

import './ProjectItem.scss';

class ProjectItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      status: this.props.project.Status,
      apiLink: 'http://localhost:8000/api'
    }
  }

  handleChangeStatus(status) {
    this.setState({
      status: status
    })

    fetch(`${this.state.apiLink}/project-edit/${this.props.project.id}/`, {
      method: 'PATCH',
      body: JSON.stringify({
        Status: status.id
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + JSON.parse(localStorage.getItem('credentials')).token
      }
    })
      .then((response) => response.json())
  }

  render() {
    const el = this.props.project

    return (
      <div className="ProjectItem col-12" key={el.id} >

        <div className="project-info">
          <img src={el.Good.example_image} width="100" alt="" />
          <div className="card-body">
            <h5 className="card-title">{el.Good.name}</h5>
            <p className="card-text">{el.Good.description}</p>
            <h6>{el.Good.pricing}$</h6>
          </div>
        </div>


        <div className="project-info">
          <h5 className="card-title">{el.Client.first_name} {el.Client.last_name}</h5>
          <p className="card-text">id: {el.Client.id}</p>
          <Button variant="primary" onClick={() => this.setState({ show: true })}>
            View details
          </Button>

          <Dropdown className="w-100">
            <Dropdown.Toggle variant={this.state.status.color} id="dropdown-basic">
              {this.state.status.title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {
                this.props.statuses.map((status) =>
                  <Dropdown.Item variant={status.color} key={status.id} onClick={() => this.handleChangeStatus(status)}>{status.title}</Dropdown.Item>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
        </div>


        <div className="project-info">
          <h5 className="card-title">Client comment</h5>
          <p className="card-text">{el.client_comment}</p>
        </div>


        <ProjectAboutClientModal onHide={() => this.setState({ show: false })} show={this.state.show} client={el.Client} />
      </div>
    )
  }

}


export default ProjectItem;
