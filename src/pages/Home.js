import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import './home.css';
import NewFeed from '../components/NewFeed';
import Navbar from '../components/Navbar';
import Tag from '../components/Tag';


export default class Home extends Component {
  render() {
    return (
      <Row>
        <Col >
          <Navbar />



          <Row className="background-web" type="flex" justify="center" >
            <Col span={16} style={{ backgroundColor: "white", marginTop: "33px" }}>
              <Row style={{ height: "300px", backgroundColor: '#3C3963' }} >
                <Carousel autoplay>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
              </Row>
              
              <Row type="flex" justify="space-between" className="background-web" style={{ backgroundColor: '#3C3963' }}>
                <Col className="content" span={17} style={{ backgroundColor: "white" }}>
                  <NewFeed />

                </Col>


                <Col className="content" span={6} style={{ color: "#c7c7c7", backgroundColor: "#2c2a49" }}>
                  <Tag />
                </Col>

              </Row>
            </Col>
          </Row>

        </Col>
      </Row >
    )
  }
}
