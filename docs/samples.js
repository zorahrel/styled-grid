import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Row, Col } from '../src';

injectGlobal`
  body { margin: 0 }
`;

const SamplesWrapper = styled.div`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 300;
`;

const Content = styled.div`
  padding: 30px;
  background: hsl(${props=>props.hue}, 100%, 87.5%);
`;

const Samples = () => {
  const hue = () => Math.floor(Math.random() * 360);
  return <SamplesWrapper>
    <h3>Standard usage</h3>
    <Row>
      <Col>
        <Content hue={hue}>1/1</Content>
      </Col>

      <Col md={1/2}>
        <Content hue={hue}>1/2</Content>
      </Col>
      <Col md={1/2}>
        <Content hue={hue}>1/2</Content>
      </Col>


      <Col md={1/6}>
        <Content hue={hue}>1/6</Content>
      </Col>
      <Col md={1/6}>
        <Content hue={hue}>1/6</Content>
      </Col>
      <Col md={1/6}>
        <Content hue={hue}>1/6</Content>
      </Col>
      <Col md={1/3}>
        <Content hue={hue}>1/3</Content>
      </Col>
      <Col md={1/6}>
        <Content hue={hue}>1/6</Content>
      </Col>

      <Col md={1/7}>
        <Content hue={hue}>1/7</Content>
      </Col>
      <Col md={2/7}>
        <Content hue={hue}>2/7</Content>
      </Col>
      <Col md={4/7}>
        <Content hue={hue}>4/7</Content>
      </Col>
    </Row>

    <h3>Responsive usage</h3>
    <Row>
      <Col xs={1} sm={1/2} md={1/3} lg={1/4}>
        <Content hue={hue}>xs=1, sm=1/2, md=1/3, lg=1/4</Content>
      </Col>
      <Col xs={1} sm={1/2} md={1/3} lg={1/4}>
        <Content hue={hue}>xs=1, sm=1/2, md=1/3, lg=1/4</Content>
      </Col>
      <Col xs={1} sm={1/2} md={1/3} lg={1/4}>
        <Content hue={hue}>xs=1, sm=1/2, md=1/3, lg=1/4</Content>
      </Col>
      <Col xs={1} sm={1/2} md={1/3} lg={1/4}>
        <Content hue={hue}>xs=1, sm=1/2, md=1/3, lg=1/4</Content>
      </Col>
      <Col xs={1} sm={1/2} md={1/3} lg={1/4}>
        <Content hue={hue}>xs=1, sm=1/2, md=1/3, lg=1/4</Content>
      </Col>
      <Col xs={1} sm={1/2} md={1/3} lg={1/4}>
        <Content hue={hue}>xs=1, sm=1/2, md=1/3, lg=1/4</Content>
      </Col>
      <Col xs={1} sm={1/2} md={1/3} lg={1/4}>
        <Content hue={hue}>xs=1, sm=1/2, md=1/3, lg=1/4</Content>
      </Col>
      <Col xs={1} sm={1/2} md={1/3} lg={1/4}>
        <Content hue={hue}>xs=1, sm=1/2, md=1/3, lg=1/4</Content>
      </Col>
    </Row>
  </SamplesWrapper>;
};

export default Samples;