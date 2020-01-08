import React, { Component } from 'react'
import { Row, Col, Menu, Affix } from 'antd';
import { connect } from 'react-redux'
import { logout } from '../redux/actions/index'

const { SubMenu } = Menu;

class Navbar extends Component {

  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/')
    window.location.reload(true);
  }

  render() {

    const navbar = {
      height: '235px',
      backgroundColor: '#3C3963',
      borderBottom: '1px solid rgba(0, 0, 0, 1)'
    }
    let statusBar
    let role = this.props.user.role
    if (role === "guest") {
      statusBar =
        <>
          {<a href="/login" className="navbar-item">เข้าสู่ระบบ/สมัครสมาชิก</a>}
        </>
    } else {
      statusBar =
        <>
          {<a href="/login" className="navbar-item" onClick={() => this.handleLogout()}>ออกจากระบบ</a>}
        </>
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

                    <Menu.Item key="room:26">
                      รัชดา
                      </Menu.Item>
                    <Menu.Item key="room:27">
                      ราชดำเนิน
                      </Menu.Item>

                    <Menu.Item key="room:31">
                      ศุภชลาศัย
                      </Menu.Item>
                    <Menu.Item key="room:32">
                    <a 
                      href={'http://localhost:3000/siam'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        color: "#c2c2c2", 
                        marginBottom: "4px", 
                        fontSize: "120%"
                         }}  >
                            สยามสแควร์
                           </a>
                     
                      </Menu.Item>
                      
                    <Menu.Item key="room:34">
                      สินธร
                      </Menu.Item>
                    <Menu.Item key="room:35">
                      สีลม
                      </Menu.Item>
                    <Menu.Item key="room:36">
                      หว้ากอ
                      </Menu.Item>

                  </SubMenu>


                  <Menu.Item key="Post">
                    <a href="/forum" className="navbar-item">ตั้งกระทู้</a>
                  </Menu.Item>

                  <Menu.Item key="Login">
                    {statusBar}
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)