import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Row, Col, Input, Button, Form, Upload, Icon } from 'antd'
import Axios from '../config/api.service'

const { TextArea } = Input;

class CreatePost extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      console.log(value.topic, value.content)
      if (!err) {
        Axios.post('/create-post', {
          topic: value.topic,
          content: value.content,
        })
          .then(result => {
            console.log('Successful')
            console.log(result)
          })
          .catch(err => {
            console.log(err)
          })
        // this.props.form.resetFields()
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ backgroundColor: "#3C3963" }}>
        <div>
          <Navbar />
          <Row type="flex" justify="center" style={{ marginTop: "60px" }}>

            <Col span={15} style={{ backgroundColor: "#193366", border: "solid 1px #282341", marginBottom: "80px" }}>
              <Row >

                <Form onSubmit={this.handleSubmit}>
                  <Col span={24} style={{ border: "dotted 1px #33608a" }}>

                    <Row type="flex" justify="center">
                      <Col span={20}>

                        <p style={{ color: "#cfcfcf" }}>1. ระบุคำถามของคุณ เช่น เว็บ Pantip.com ก่อตั้งขึ้นตั้งแต่เมื่อไหร่ ใครพอทราบบ้าง?</p>
                        <Form.Item >
                          {getFieldDecorator('topic', {
                            rules: [
                              {
                                required: true,
                                message: 'Please input your topic!'
                              }
                            ],
                          })(<TextArea rows={1} style={{ marginBottom: "10px" }} />)}
                        </Form.Item>
                      </Col>
                    </Row>

                  </Col>

                  <Col span={24} style={{ border: "dotted 1px #33608a" }}>
                    <Row type="flex" justify="center">
                      <Col span={20}>
                        <p style={{ color: "#cfcfcf" }}>2. เขียนรายละเอียดของคำถาม</p>
                        <Form.Item >
                          {getFieldDecorator('content', {
                            rules: [
                              {
                                required: true,
                                message: 'Please input your content!'
                              }
                            ],
                          })(<TextArea autoSize={{ minRows: 10, maxRows: 20 }} style={{ marginBottom: "10px" }} />)}
                        </Form.Item>
                        <br />
                      </Col>
                    </Row>
                  </Col>

                  <Col span={24}>
                    <Row type="flex" justify="center" >
                      <Col>
                        <Button
                          style={{
                            backgroundColor: "#55C10D"
                          }}
                          htmlType="submit"
                        >
                          <span style={{ color: "#e9e5f6" }}>ส่งกระทู้</span>
                        </Button>
                      </Col>
                    </Row>
                  </Col>

                  

                </Form >

              </Row>
            </Col>
          </Row>
        </div>
      </div >
    )
  }
}

const Forum = Form.create()(CreatePost);
export default Forum


{/* <Col>
                    <Row>
                      <Col>
                        
                            < Upload >
                              <Button>
                                <Icon type="upload" /> Select Photo
                            </Button>
                            </Upload>
                          
                      </Col>
                    </Row>
                  </Col>
                  <br /> */}