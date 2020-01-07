import React, { Component } from 'react'
import Axios from '../config/api.service'
// import { Row, Col, Card } from 'antd';
import {
  Link,
} from "react-router-dom";


export class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: []
    }
  }

  componentDidMount() {
    Axios.get('/posts').then((response) => {
      // console.log(response.data)
      this.setState({
        postList: response.data
      })
      // console.log(this.state.postList)
    })
  }
  render() {
    let url = 'topic'
    return (
      <>
        {this.state.postList.map(post => (
          <div style={{ borderBottom: "1px solid #363358", width: "100%", padding: "5px 10px 5px 10px", backgroundColor: "#2D2A49", color: "#7E79AD", float: "left", textAlign: 'left' }} key={post.id}>

            <Link to={`${url}/${post.id}`} style={{ color: "#c2c2c2", marginBottom: "4px", fontSize: "120%" }} >{post.header}</Link>
            <br />
            {post.content.slice(0, 160)}
            <br />
            <span style={{ color: "#A6A3C7", marginBottom: "4px", fontSize: "100%" }}> สมาชิกหมายเลข {post.user_id} </span>
          </div>
        ))}
      </>
    )
  }
}


export default PostList;

