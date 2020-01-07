import React, { Component } from 'react'
import { Row, Col } from 'antd'
import MyFeed from './MyFeed'
import PostList from './PostList'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    // Link,
} from "react-router-dom";
import './PostList.css'
class NewFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: []
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Row type="flex" justify="start" style={{ backgroundColor: '#2D2A49', borderBottom: 'solid 1px #6C73A6', color: "#c7c7c7" }}  >
                        <Col
                            style={{
                                borderRight: 'solid 1px #6C73A6',
                                padding: "10px 10px 10px 10px",
                                fontSize: "115%"
                            }}>
                            <NavLink
                                exact to="/"
                                activeClassName="selected"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#E5C700"
                                }}
                            >
                                <span >Pantip Now</span>
                            </NavLink>
                        </Col>
                        <Col
                            style={{
                                borderRight: 'solid 1px #6C73A6',
                                padding: "10px 10px 10px 10px",
                                fontSize: "115%"
                            }}>
                            <NavLink
                                exact to="/myfeed"
                                activeClassName="selected"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#E5C700"
                                }}
                            >
                                <span >My feed</span>
                            </NavLink>
                        </Col>
                    </Row>
                    <Row>
                        <Switch>
                            <Route exact path="/">
                                <PostList />
                            </Route>
                            <Route path="/myfeed">
                                <MyFeed />
                            </Route>
                        </Switch>
                    </Row>
                </div>
            </Router>
        )
    }
}

export default NewFeed
