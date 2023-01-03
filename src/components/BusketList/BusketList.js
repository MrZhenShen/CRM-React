import React from 'react';
import './BusketList.scss';

import { Button } from 'react-bootstrap'

import BusketItem from '../BusketItem/BusketItem'

class BusketList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      orders: [],
      comments: JSON.parse(localStorage.getItem('comments')),
      apiLink: 'http://localhost:8000/api',
      clientID: localStorage.getItem('credentials') ? JSON.parse(localStorage.getItem('credentials')).id : 0,
      token: localStorage.getItem('credentials') ? JSON.parse(localStorage.getItem('credentials')).token : 0
    }
  }

  componentDidMount() {
    this.setState({
      orders: JSON.parse(localStorage.getItem('cart'))
    })
  }

  handleOrder() {
    if (localStorage.getItem('credentials') !== "{}") {
      this.state.orders.map((good, i) => {
        fetch(`${this.state.apiLink}/project-create/`, {
          method: 'POST',
          body: JSON.stringify({
            Good: good.id,
            Client: this.state.clientID,
            client_comment: JSON.parse(localStorage.getItem('comments'))[i],
            Status: 1
          }),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + this.state.token
          }
        })
        return null
      })
      localStorage.setItem('comments', JSON.stringify([]))
      localStorage.setItem('cart', JSON.stringify([]))
      this.setState({
        orders: []
      })
    }
    else {

      alert('You should Sign In or Sign Up to order')
    }
  }

  handleRemove(id) {
    let currentOrder = this.state.orders
    currentOrder.splice(id, 1)
    this.setState({
      orders: currentOrder
    })
    localStorage.setItem('cart', JSON.stringify(currentOrder))
  }

  render() {
    return (
      <div className="BusketList">
        {
          this.state.orders.length > 0
          ? <Button onClick={this.handleOrder.bind(this)}>Order</Button>
          : <h1>Here is nothing yet(</h1>
        }
        {
          this.state.orders.map((el, i) =>
            <BusketItem key={i} id={i} good={el} onRemove={this.handleRemove.bind(this)}/>
          )
        }
      </div>
    )
  }
}

export default BusketList;
