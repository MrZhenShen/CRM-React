import React from 'react';
import './BusketList.scss';
import { connect } from 'react-redux'

import BusketItem from '../BusketItem/BusketItem'

class BusketList extends React.Component {

  render() {
    return (
      <div className="BusketList">
        {
          this.props.order.map((el, i) =>
            <BusketItem key={i} id={i} good={el} />
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    order: state.order
  }
}

export default connect(mapStateToProps)(BusketList);
