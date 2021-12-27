import React from 'react';
import './BusketSummary.scss';
import { connect } from 'react-redux';

import { Col, Table, Button } from 'react-bootstrap'

class BusketSummary extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      comments: JSON.parse(localStorage.getItem('comments')),
      apiLink: 'http://localhost:8000/api',
      clientID: JSON.parse(localStorage.getItem('credentials')).id
    }
  }

  handleOrder() {
    this.props.order.map((good, i) => {
      fetch(`${this.state.apiLink}/projects-create/`, {
        method: 'POST',
        body: JSON.stringify({
          Good: good.id,
          Client: this.state.clientID,
          client_comment: JSON.parse(localStorage.getItem('comments'))[i],
          Status: 1
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          // if (data.error !== "Wrong Credentials") {
          //   this.props.dispatch({ type: 'LOG_IN' })
          //   data.is_staff ? this.props.dispatch({ type: 'IS_STAFF' }) : this.props.dispatch({ type: 'IS_NOT_STAFF' })
          //   localStorage.setItem("credentials", JSON.stringify(data))
          //   this.setState({
          //     email: "",
          //     password: ""
          //   })
        })
    })
  }

  render() {
    return (
      <Col className="BusketSummary" lg={12}>
        <div className="summary-wrapper">
          <h2>Order Summary</h2>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Avarage Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.order.map((el, i) => {
                    return (<tr key={i}>
                      <td>{i + 1}</td>
                      <td>{el.name}</td>
                      <td>{el.pricing}</td>
                    </tr>)
                  })
                }
                <tr>
                  <td>
                    <Button onClick={this.handleOrder.bind(this)}>Order</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
    order: state.order
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusketSummary);
