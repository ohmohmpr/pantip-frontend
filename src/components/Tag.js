import React, { Component } from 'react'
import { Row, } from 'antd'
// import PostList from '../pages/PostList'

export default class Tag extends Component {
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
              textAlign: 'left'
            }}
          >
            sdafasdf
          </div>
        </Row>
      </div>
    )
  }
}
