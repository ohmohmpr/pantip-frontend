import React, { Component } from 'react'
import { Row, Col, Input, Card, Button, Form } from 'antd';


import Axios from '../config/api.service'

const { TextArea } = Input;




class TopicList1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: [],
      commentsList: [],
      page: ""
    }
  }


  componentDidMount() {

    Axios.get(`/topic/${this.props.con}`).then((response) => {
      this.setState({
        post: response.data,
        commentsList: response.data.comments
      })
      // console.log(this.state.commentsList)
      // console.log(this.state.post)
    })
    this.setState({
      page: this.props.con
    })

  }

  handleSubmit = (e) => {
    let post_id = this.state.page
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      console.log(value.comment)
      if (!err) {
        Axios.post(`/create-comment/${post_id}`, {
          content: value.comment,
          post_id: this.props.con,
        })
          .then(result => {
            alert("done")
            console.log(result)
          })
          .catch(err => {
            alert("failed to comment")
            console.log(err)
          })
        this.props.form.resetFields()
      }
    })
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center">
        <Col span={18} >
          <Card key={this.state.post.id} style={{ backgroundColor: "#193366", border: "solid 1px #8E8BA7", marginTop: "40px", marginBottom: "80px" }}>
            <h1 style={{ color: "#FFCD05" }}>{this.state.post.topic}</h1>
            <div style={{ color: "#cccccc" }}>
              {this.state.post.content}
              <br />
              สมาชิกหมายเลข {this.state.post.user_id}
            </div>
          </Card>
          {this.state.commentsList.map(comment => (
            <Card key={comment.id} style={{ backgroundColor: "#222244", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "80px" }}>
              <h2 style={{ color: "#FFCD05" }}>ความคิดเห็นที่ {comment.id}</h2>

              <div style={{ color: "#cccccc" }}>
                {comment.content}
                <br />
                {comment.user_id}
              </div>
            </Card>
          ))}
          <Card style={{ backgroundColor: "#093A43", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "80px" }}>
            <h2 style={{ color: "#FFCD05" }}>แสดงความคิดเห็นที่นี้ </h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item >
                {getFieldDecorator('comment', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your comment',
                    }
                  ]
                  // <div style={{ color: "#cccccc" }}></div>
                })(
                  <TextArea autoSize={{ minRows: 10, maxRows: 20 }} style={{ backgroundColor: "#0E5C6A", marginBottom: "10px" }} />
                )}
              </Form.Item>

              <Button style={{ backgroundColor: "#55C10D" }} htmlType="submit">
                <span style={{ color: "#e9e5f6" }}>ส่งกระทู้</span>
              </Button>
            </Form >
          </Card>

        </Col>
      </Row>
    )
  }
}
const TopicList = Form.create()(TopicList1);
export default TopicList
