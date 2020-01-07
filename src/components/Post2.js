import React from 'react'
import { Row, Col, Card, Divider } from 'antd'

export default class Post extends React.Component {
  render() {
    return (
    //   <>
    //             key={post.id}
    //             header={post.header}
    //             author={post.user_id}
    //             message={post.content}
    //   </>
      <div>
          {this.props.key}
          <hr />
          {this.props.header}
          <hr />
          {this.props.author}
          <hr />
          {this.props.message}
          <hr />

      </div>
    )
  }
}