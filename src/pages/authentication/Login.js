import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Navbar from '../../components/Navbar'
import FormForLogin from '../../components/FormForLogin'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

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
                <FormForLogin />
              </Col>
            </Row>

          </Col>
        </Row>
      </>
    )
  }
}
