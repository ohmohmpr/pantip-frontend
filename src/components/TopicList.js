import React, { Component } from 'react'
import { Row, Col, Input, Card, Button, Form } from 'antd';
import { withRouter } from "react-router";

import Axios from '../config/api.service'

const { TextArea } = Input;

class TopicList1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: [],
      commentsList: [],
      page: "",
      onwer: ""
    }
  }

  componentDidMount() {
    let path = this.props.location.pathname
    let lastSlash = path.lastIndexOf("/")
    let page = path.slice(lastSlash + 1)
    Axios.get(`${path}`).then((response) => {
      console.log(response.data.user.profile_img_url)
      this.setState({
        post: response.data,
        commentsList: response.data.comments,
        page: page,
        owner: response.data.user.profile_img_url,
      })
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
          post_id: post_id,
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
            <Row>
              <Col>
                <h1 style={{ color: "#FFCD05" }}>{this.state.post.topic}</h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <div style={{ color: "#cccccc", margin: "40px 40px" }}>
                  {this.state.post.content}
                </div>
              </Col>
            </Row>

            <Row>
              <Col offset={2} >
                <div style={{ color: "#cccccc" }}>
                  <img src={this.state.owner} height="42" width="42" alt='owner' /> สมาชิกหมายเลข {this.state.post.user_id}
                </div>
              </Col>
            </Row>

          </Card>
          {this.state.commentsList.map(comment => (
            <Card key={comment.id} style={{ backgroundColor: "#222244", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "20px" }}>
              <Row>
                <Col>
                  <h3 style={{ color: "#FFCD05" }}>ความคิดเห็นที่ {comment.id}</h3>

                </Col>
              </Row>

              <Row>
                <Col>
                  <div style={{ color: "#cccccc", margin: "20px 20px" }}>
                    {comment.content}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col offset={2}>
                  <div style={{ color: "#cccccc" }}>
                    <img src={comment.user.profile_img_url} height="42" width="42" alt='user' /> สมาชิกหมายเลข {comment.user_id}

                  </div>
                </Col>
              </Row>




            </Card>
          ))}
          <Card style={{ backgroundColor: "#093A43", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "80px" }}>
            {/* <h2 style={{ color: "#FFCD05" }}>แสดงความคิดเห็นที่นี้ </h2> */}
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
export default withRouter(TopicList)
