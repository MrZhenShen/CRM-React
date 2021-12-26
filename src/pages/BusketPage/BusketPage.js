import React from 'react';
import './BusketPage.scss';
import { connect } from 'react-redux'

import { Container, Row } from 'react-bootstrap';

import PageTitle from '../../components/PageTitle/PageTitle'
import BusketList from '../../components/BusketList/BusketList'
import BusketSummary from '../../components/BusketSummary/BusketSummary'

class Busket extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      goodsInCart: []
    }
  }

  componentDidMount() {
    this.setState({
      goodsInCart: JSON.parse(localStorage.getItem(localStorage.key("cart")))
    })
  }

  removeFromCart(id) {
    console.log(id)

    let newCart = this.state.goodsInCart.splice(id, 1)

    this.setState({ goodsInCart: newCart })
    localStorage.setItem("cart", JSON.stringify(this.state.goodsInCart))
  }

  render() {
    return (
      <Container className="Busket" >
        <Row>
          <PageTitle title="Busket" />
          <BusketList goodsInCart={this.state.goodsInCart} onRemoveItem={() => this.removeFromCart.bind(this)} />
          <BusketSummary />
        </Row>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Busket);
