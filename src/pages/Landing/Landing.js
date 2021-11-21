import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Landing.scss';

const Landing = () => {

  const [goods, setGoods] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/goods/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setGoods(data)
      })
  }, [goods])

  return (

    <div className="Landing">
      <center><h2>Landing Component</h2></center>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <h3>Goods</h3>
          </div>

          {goods.map(el =>
            <div className="col-4" key={el.id}>
              <div className="card w-18">
                <img src={el.example_image} alt="Example image" />
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.description}</p>
                  <h6>{el.pricing}</h6>
                  <button className="btn btn-primary">Order</button>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
