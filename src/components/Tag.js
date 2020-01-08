import React, { Component } from 'react'
import Axios from '../config/api.service'
import { Row } from 'antd'
import {
  NavLink,
} from "react-router-dom";
// import PostList from '../pages/PostList'

export default class Tag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: ["Sports", "Siam", "Fiance"],
      sports: '',
      siam: '',
      finance: '',
    }
  }

  componentDidMount() {
    Axios.get('/count-tag-sports').then((response) => {
      // console.log(response.data)
      this.setState({
        sports: response.data.count
      })
    })
    Axios.get('/count-tag-siam').then((response) => {
      // console.log(response.data)
      this.setState({
        siam: response.data.count
      })
    })
    Axios.get('/count-tag-finance').then((response) => {
      // console.log(response.data)
      this.setState({
        finance: response.data.count
      })
    })
  }

  render() {
    return (
      <div >
        <Row type="flex" justify="start" style={{ borderBottom: 'solid 1px #6C73A6' }}  >
          <span style={{ backgroundColor: '#2c2a49', padding: "8px 10px 8px 10px", fontSize: "100%" }} > แท็กยอดนิยม</span>
        </Row>

        <Row>
          <div
            style={{
              borderBottom: "1px solid #363358",
              width: "100%",
              padding: "5px 10px 5px 10px",
              backgroundColor: "#white",
              color: "#7E79AD",
              float: "left",
              textAlign: 'left',
              marginTop: "5px",
            }}
          >
            <NavLink
              exact to="/sports"
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                color: "#E5C700"
              }}
            >
              <span style={{
                backgroundColor: "#DBDBDB",
                border: "1px solid #FFFFFF",
                color: "#000000",
                padding: "2px 5px",
              }}>
                Sports
                  </span>
            </NavLink>
            <br />
            <p style={{ margin: "5px" }}>{this.state.sports} กระทู้</p>
          </div>
        </Row>
        <Row>
          <div
            style={{
              borderBottom: "1px solid #363358",
              width: "100%",
              padding: "5px 10px 5px 10px",
              backgroundColor: "#white",
              color: "#7E79AD",
              float: "left",
              textAlign: 'left',
              marginTop: "5px",
            }}
          >
            <NavLink
              exact to="/siam"
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                color: "#E5C700"
              }}
            >
              <span style={{
                backgroundColor: "#DBDBDB",
                border: "1px solid #FFFFFF",
                color: "#000000",
                padding: "2px 5px",
              }}>
                Siam
                  </span>
            </NavLink>
            <br />
            <p style={{ margin: "5px" }}>{this.state.siam} กระทู้</p>
          </div>
        </Row>
        <Row>
          <div
            style={{
              borderBottom: "1px solid #363358",
              width: "100%",
              padding: "5px 10px 5px 10px",
              backgroundColor: "#white",
              color: "#7E79AD",
              float: "left",
              textAlign: 'left',
              marginTop: "5px",
            }}
          >
            <NavLink
              exact to="/finance"
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                color: "#E5C700"
              }}
            >
              <span style={{
                backgroundColor: "#DBDBDB",
                border: "1px solid #FFFFFF",
                color: "#000000",
                padding: "2px 5px",
              }}>
                Finance
                  </span>
            </NavLink>
            <br />
            <p style={{ margin: "5px" }}>{this.state.finance} กระทู้</p>
          </div>
        </Row>
      </div>
    )
  }
}
