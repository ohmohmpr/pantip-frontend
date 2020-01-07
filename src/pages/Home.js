import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import './home.css';
import NewFeed from '../components/NewFeed';
import Navbar from '../components/Navbar';
import Tag from '../components/Tag';
// import PostList2 from '../components/PostList2';
// import Axios from '../config/api.service'


export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     owner: {},
  //     postList: []
  //   }
  // }
  // componentDidMount() {

  //   Axios.get('/posts').then((response) => {
  //     console.log(response.data[0])
  //     console.log(response.data[1])
  //     this.setState({
  //       postList: response.data
  //     })
  //     console.log(this.state.postList[0])
  //   })
  // }


  render() {
    return (
      <Row>
        <Col >
          <Navbar />



          <Row className="background-web" type="flex" justify="center" >
            <Col span={16} style={{ backgroundColor: "white", marginTop: "33px" }}>
              <Row style={{ height: "300px", backgroundColor: '#3C3963' }} >
                <Carousel autoplay>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
              </Row>

              <Row type="flex" justify="space-between" className="background-web" style={{ backgroundColor: '#3C3963' }}>
                <Col className="content" span={17} >
                  <NewFeed />
                    
                  {/* <PostList2 postList={this.state.postList[0]} /> */}

                </Col>


                <Col className="content" span={6} style={{ color: "#c7c7c7", backgroundColor: "#2c2a49" }}>
                  <Tag />
                </Col>

              </Row>
            </Col>
          </Row>

        </Col>
      </Row >
    )
  }
}
