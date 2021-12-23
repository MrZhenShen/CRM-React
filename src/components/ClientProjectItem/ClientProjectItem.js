import React from 'react'
import './ClientProjectItem.scss'

import {  Card, Button } from 'react-bootstrap'

class ClientProjectList extends React.Component {

  render() {
    return (
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={this.props.project.Good.example_image} />
          <Card.Body>
            <Card.Title>{this.props.project.Good.name}</Card.Title>
            <Card.Text>
              <b>Your comment</b><br/>
              {this.props.project.client_comment}
            </Card.Text>
            <Button className="status" style={{width: '100%'}}variant={this.props.project.Status.color}>{this.props.project.Status.title}</Button>
          </Card.Body>
        </Card>
    )
  }
}

export default ClientProjectList;
