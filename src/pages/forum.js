import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Row, Col, Input, Button, Form, Upload, Icon } from 'antd'
import Axios from '../config/api.service'

const { TextArea } = Input;

class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      let payload = new FormData()
      payload.append('photoPost', this.state.fileList[0])
      payload.append('topic', value.topic)
      payload.append('content', value.content)
      if (!err) {
        Axios.post('/create-post', payload)
          .then(result => {
            console.log(result)
          })
          .catch(err => {
            console.log(err)
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    }

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
                        <Form.Item label="Upload" extra="Select file image">

                          <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> Select Photo
                              </Button>
                          </Upload>

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
