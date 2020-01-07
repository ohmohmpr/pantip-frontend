import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import './FormForLogin.css'
import Axios from '../config/api.service'
import jwtDecode from 'jwt-decode'
import { login } from '../redux/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class FormForLogin extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                Axios.post('/loginUser', {
                    username: values.username,
                    password: values.password
                })
                    .then(result => {
                        console.log(result)
                        const user = jwtDecode(result.data.token)
                        console.log(user)
                        this.props.login(user, result.data.token)
                        console.log(this.props.login(user, result.data.token))
                        // this.props.history.push('/')
                        // window.location.reload(true);
                    })
                    .catch(err => {
                        console.error(err);
                        this.props.form.resetFields()
                    })
            }
        });
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
            }}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='อีเมล/นามแฝง'  >
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your nickname!'
                                }
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="รหัสผ่าน  ">
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                }
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Button
                        style={{ backgroundColor: "#605d89" }}
                        htmlType="submit"
                    >
                        <span style={{ color: "#e9e5f6" }}>เข้าใช้งาน</span>
                    </Button>
                    <br />
                    <br />
                    <span style={{ color: "#e9e5f6" }}>ฉันต้องการเป็นสมาชิกพันทิปดอทคอม</span>
                    <br />
                    <br />
                    <Button style={{ backgroundColor: "#55C10D" }}>
                        <a href="/signup" className="navbar-item" style={{ color: "#e9e5f6" }}>สมัครเลย</a>
                    </Button>
                </Form >
            </div >
        )
    }
}


const mapDispatchToProps = {
    login: login
  }

const LoginForm = Form.create({ username: 'login' })(FormForLogin);
export default withRouter(connect(null, mapDispatchToProps)(LoginForm))