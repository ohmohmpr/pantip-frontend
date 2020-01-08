import React, { Component } from 'react'
import Axios from '../config/api.service'
import { withRouter } from "react-router";

class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      room: '',
    }
  }

  componentDidMount() {
    let path = this.props.location.pathname
    // let lastSlash = path.lastIndexOf("/")
    // let page = path.slice(lastSlash + 1)
    Axios.get(`${path}`).then((response) => {
      this.setState({
        postList: response.data
      })
    })
  }
  render() {
    let url = 'topic'
    return (
      <>
        {this.state.postList.map(post => (
          <div style={{ borderBottom: "1px solid #363358", width: "100%", padding: "5px 10px 5px 10px", backgroundColor: "#2D2A49", color: "#7E79AD", float: "left", textAlign: 'left' }} key={post.id}>
            <a href={`${url}/${post.id}`} target="_blank" rel="noopener noreferrer" style={{ color: "#c2c2c2", marginBottom: "4px", fontSize: "120%" }}  >{post.topic}</a>
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
export default withRouter(Room)