import React, { Component } from 'react'
import { Row, Form, Input, Button } from 'antd'
import Axios from '../config/api.service'


class FormForSignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDirty: false,
    }
  }

  handleDirtyBlur = e => {
    const { value } = e.target
    this.setState({ isDirty: this.state.isDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Password และ Confirm password ไม่ตรงกัน')
    } else {
      callback()
    }
  }

  compareToSecondPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.isDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post('/registerUser', {
          username: value.username,
          password: value.password,
        })
          .then(result => {
            alert("สมัครเสร็จเรียบร้อย กรุณากลับสู่หน้า Login")
            console.log(result)
          })
          .catch(err => {
            alert("รหัสนี้มีผู้ใช้แล้ว")
            console.log(err)
          })
        this.props.form.resetFields()
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 8 },
      colon: false,
    };
    return (
      <div style={{
        backgroundColor: "#2D2A49",
        marginBottom: "100px", marginTop: "20px",
        border: "solid 1px #25223C",
        padding: "10px"
      }} >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Row></Row>
          <Form.Item label='อีเมล/นามแฝง'  >
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your email',
                }
              ]
            })(<Input
              onChange={(e) => this.setState({ username: e.target.value })}
            />)}
          </Form.Item>
          <Form.Item label="รหัสผ่าน  ">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                { validator: this.compareToSecondPassword }
              ]
            })(<Input.Password
              onChange={(e) => this.setState({ password: e.target.value })}
            />)}
          </Form.Item>
          <Form.Item label="Confirm Password">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please Confirm Password!',
                },
                {
                  validator: this.compareToFirstPassword,
                }
              ]
            })(<Input.Password onBlur={this.handleDirtyBlur} />)}
          </Form.Item>
          <br />
          <br />
          <Form.Item>
            <Button block type="primary" htmlType="submit" className="login-form-button">
              สมัครเลย
            </Button>
          </Form.Item>
        </Form >
      </div>

    )
  }
}

export default Form.create()(FormForSignUp);