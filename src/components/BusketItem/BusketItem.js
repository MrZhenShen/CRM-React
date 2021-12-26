import React from 'react';
import './BusketItem.scss';
import { connect } from 'react-redux'

import { Col, Card, Button } from 'react-bootstrap'

class BusketItem extends React.Component {

  handleRemoveClick() {
    this.props.order.splice(this.props.id, 1)
    this.props.dispatch({type: 'SET_CART', cart: this.props.order})
  }

  render() {
    return (
      <Col className="BusketItem" lg={12}>
        <h1>{this.props.id + 1}</h1>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={this.props.good.example_image} />
          <Card.Body>
            <Card.Title>{this.props.good.name}</Card.Title>
            <Card.Text>
            {this.props.good.description}<br/>
            {this.props.good.pricing}
            </Card.Text>
            <Button className="w-100" variant="outline-danger" onClick={this.handleRemoveClick.bind(this)}>Remove</Button>
          </Card.Body>
        </Card>
        <div className="comment-order">
          <textarea cols="30" rows="10" placeholder="Please enter your comment for this project"></textarea>
        </div>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return {
    order: state.order
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusketItem);
