import React, { Component } from 'react'
import { Row, Col, Menu, Affix } from 'antd';
const { SubMenu } = Menu;

export default class Navbar extends Component {
  render() {
    const navbar = {
      height: '235px',
      backgroundColor: '#3C3963',
      borderBottom: '1px solid rgba(0, 0, 0, 1)'
    }
    return (
      <div>
        <Row style={navbar} type="flex" align="bottom" justify="center" >
          <Col span={12}>
            <Row style={{ backgroundColor: "1F1D33" }}>

              <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
                <Menu mode="horizontal" style={{ backgroundColor: "#2D2A49", color: "#e9e5f6" }} theme="dark">
                  <Menu.Item key="Home">
                  <a href="/" className="navbar-item">หน้าแรก</a>
                    
                                            </Menu.Item>

                  <SubMenu title={<span className="submenu-title-wrapper">เลือกห้อง</span>}>


                    <Menu.Item key="room:26">รัชดา</Menu.Item>
                    <Menu.Item key="room:27">ราชดำเนิน</Menu.Item>

                    <Menu.Item key="room:31">ศุภชลาศัย</Menu.Item>
                    <Menu.Item key="room:32">สยามสแควร์</Menu.Item>

                    <Menu.Item key="room:34">สินธร</Menu.Item>
                    <Menu.Item key="room:35">สีลม</Menu.Item>
                    <Menu.Item key="room:36">หว้ากอ</Menu.Item>

                  </SubMenu>


                  <Menu.Item key="Post">
                  <a href="/forum" className="navbar-item">ตั้งกระทู้</a>
                    
                  </Menu.Item>
                  
                  <Menu.Item key="Login">
                  <a href="/login" className="navbar-item">เข้าสู่ระบบ/สมัครสมาชิก</a>
                    
                  </Menu.Item>
                </Menu>
              </Affix>

            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
