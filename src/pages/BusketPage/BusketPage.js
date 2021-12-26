import React from 'react'
import './BusketPage.scss'

import { Container, Row } from 'react-bootstrap'

import PageTitle from '../../components/PageTitle/PageTitle'
import BusketList from '../../components/BusketList/BusketList'
import BusketSummary from '../../components/BusketSummary/BusketSummary'

class Busket extends React.Component {

  render() {
    return (
      <Container className="Busket" >
        <Row>
          <PageTitle title="Busket" />
          <BusketList />
          <BusketSummary />
        </Row>
      </Container>
    )
  }
}

export default Busket;
