import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import FormForSignUp from '../components/FormForSignUp'
import { Row, Col } from 'antd'

export default class SignUp extends Component {
    render() {
        return (
            <>
        <Row>
          <Col style={{ backgroundColor: "#3C3963" }}>

            <Row>
              <Col>
                <Navbar />
              </Col>
            </Row>

            <Row type="flex" justify="center">
              <Col span={12} style={{ height: '100vh' }}>
                <FormForSignUp />
              </Col>
            </Row>

          </Col>
        </Row>
      </>
        )
    }
}
