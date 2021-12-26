import React from 'react';
import './LandingPage.scss';

import { connect } from 'react-redux'

class LandingPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      goods: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/goods/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ goods: data })
      })
  }

  addToCard(good) {
    let goodToStorage = JSON.parse(localStorage.getItem("cart"))
    goodToStorage.unshift(good)
    this.props.dispatch({type: 'SET_CART', cart: goodToStorage})
  }

  render() {
    return (
      <div className="LandingPage" >
        <center><h2>Landing Component</h2></center>
        <div className='container'>
          <div className="row">
            <div className="col-12">
              <h3>Goods</h3>
            </div>

            {this.state.goods.map(el =>
              <div className="col-4" key={el.id}>
                <div className="card w-18">
                  <img src={el.example_image} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{el.name}</h5>
                    <p className="card-text">{el.description}</p>
                    <h6>{el.pricing}</h6>
                    <button className="btn btn-primary" onClick={this.addToCard.bind(this, el)}>Order</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapDispatchToProps)(LandingPage);
