import React from 'react';
import './LandingPage.scss';

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import PageTitle from '../../components/PageTitle/PageTitle'

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
    localStorage.setItem('cart', JSON.stringify(goodToStorage))

    let commentsStorage = JSON.parse(localStorage.getItem("comments"))
    commentsStorage.unshift("")
    localStorage.setItem('comments', JSON.stringify(commentsStorage))
  }

  render() {
    return (
      <Container className="LandingPage" >
        <PageTitle title="Goods" />
        <Row>
          {this.state.goods.map(el =>
            <Col lg={4} key={el.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img src={el.example_image} alt="" />
                <Card.Body >
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>
                    <p className="card-text">{el.description}</p>
                    <h6>{el.pricing}</h6>
                  </Card.Text>
                  <Button variant="warning" style={{width: '100%'}} onClick={this.addToCard.bind(this, el)}>Order</Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    )
  }
}

export default LandingPage;
