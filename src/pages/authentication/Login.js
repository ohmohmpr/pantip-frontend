import React, { Component } from 'react'
import { Row, Col } from 'antd'
// import Axios from '../../config/axios.setup'
// import jwtDecode from 'jwt-decode'
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
  

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const username = this.state.username
  //   const password = this.state.password
  //   Axios.post('/loginUser', { username, password })
  //     .then(result => {
  //       console.log(result.data)
  //       // const token = localStorage.setItem("ACCESS_TOKEN", result.data.token)


  //       // const user = jwtDecode(token)
  //       // localStorage.setItem("User", user)
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }

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
