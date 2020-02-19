import React, { Component } from 'react';
import './Landing.css';
import { Searchbox } from '../searchbox/Searchbox';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export class Landing extends Component {
  render() {
    return (
      <Container>
        <section id='section1'>
          <h1 id="heroTitle">Mix. Drink. Repeat.</h1>
          <Row className='justify-content-md-center section1'>
            <Col md="auto">
              <Searchbox />
            </Col>
          </Row>
        </section>
        <section id='section2'>
          <Row className='justify-content-md-center section2'>
            <Col md="auto">
              footer goes here
          </Col>
          </Row>
        </section>
        <section id='section3'>
          <Row className='justify-content-md-center section3'>
            <Col md="auto">
              footer goes here
          </Col>
          </Row>
        </section>
      </Container>
    )
  }
}