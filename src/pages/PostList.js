import React, { Component } from 'react'
import { connect } from "react-redux";
import { getData } from "../redux/actions/"
// import { Row, Col, Card } from 'antd';


export class PostList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  // componentDidMount() {
  //   Axios.get('/post-list').then((response) => {
  //     console.log(response)
  //   })
  // }
  render() {
    return (
      <>
        {this.props.postList.map(post => (
          <div style={{ borderBottom: "1px solid #363358", width: "100%", padding: "5px 10px 5px 10px", backgroundColor: "#2D2A49", color:"#7E79AD", float:"left", textAlign: 'left' }} key={post.id}>
            <a href={`http://localhost:3000/topic/${post.id}`} target="_blank" rel="noopener noreferrer" style={{color:"#c2c2c2", marginBottom: "4px", fontSize: "120%"}} > {post.header}</a>
              
              <br />
              {post.content.slice(0, 160)}
              <br />
              <span style={{color:"#A6A3C7", marginBottom: "4px", fontSize: "100%"}}> สมาชิกหมายเลข {post.user_id} </span>
              
          </div>
        ))}
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    postList: state.remotePosts
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(PostList);
