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
        <Row>
          <Col xl>search box goes here</Col>
        </Row>
        <Row>
          <Col xl>poll and stats goes here</Col>
        </Row>
        <Row>
          <Col xl>footer goes here</Col>
        </Row>
      </Container>
    )
  }
}