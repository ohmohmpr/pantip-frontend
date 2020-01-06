import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Row, Col, Input, Button } from 'antd'

const { TextArea } = Input;

export default class Forum extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#3C3963" }}>
        <div>
          <Navbar />
          <Row type="flex" justify="center" style={{ marginTop: "60px" }}>

            <Col span={15} style={{ backgroundColor: "#193366", border: "solid 1px #282341", marginBottom: "80px" }}>
              <Row >
                <Col span={24} style={{ border: "dotted 1px #33608a" }}>
                  <Row type="flex" justify="center">
                    <Col span={20}>
                      <p style={{ color: "#cfcfcf" }}>1. ระบุคำถามของคุณ เช่น เว็บ Pantip.com ก่อตั้งขึ้นตั้งแต่เมื่อไหร่ ใครพอทราบบ้าง?</p>
                      <TextArea rows={1} style={{ marginBottom: "10px" }} />
                    </Col>
                  </Row>

                </Col>
                <Col span={24} style={{ border: "dotted 1px #33608a" }}>
                  <Row type="flex" justify="center">
                    <Col span={20}>
                      <p style={{ color: "#cfcfcf" }}>2. เขียนรายละเอียดของคำถาม</p>

                      <TextArea autoSize={{ minRows: 10, maxRows: 20 }} style={{ marginBottom: "10px" }} />
                      <br />
                    </Col>
                  </Row>

                </Col>

                <Col span={24}>
                  <Row type="flex" justify="center" >
                    <Col>
                      <Button style={{ backgroundColor: "#55C10D" }}>
                        <a href="/signup" className="navbar-item" style={{ color: "#e9e5f6" }}>ส่งกระทู้</a>
                      </Button>
                    </Col>

                  </Row>
                </Col>

              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

