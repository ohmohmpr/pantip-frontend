import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import { connect } from 'react-redux'
import MyFeed from './MyFeed'
import PostList from './PostList'
import Axios from '../config/api.service'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
class NewFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: []
        }
    }


    handleAcceptFriend = () => {
        console.log(this.user)
        Axios.get('/post-list')
            .then(result => {
                console.log(result.data)
                this.setState({
                    postList: result.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }




    render() {
        return (
            <Router>
                <div>
                    <Row type="flex" justify="start" style={{ backgroundColor: '#2D2A49', borderBottom: 'solid 1px #6C73A6', color: "#c7c7c7" }}  >
                        <Col>
                            <a
                                href="#top"
                                type="button"
                                // onClick={() => this.handleClick()}
                                style={{
                                    borderRight: 'solid 1px #6C73A6',
                                    color: "#c7c7c7",
                                    padding: "10px 10px 10px 10px",
                                    fontSize: "115%"
                                }}>
                                <span>Pantip Now</span>
                            </a>
                        </Col>
                        <Col>
                            <Button onClick={() => this.handleAcceptFriend()}>ยอมรับเพื่อน</Button>
                        </Col>
                        <Col>


                            <Link to="/myfeed"
                                activeClassName="chosen"
                                style={{
                                    borderRight: 'solid 1px #6C73A6',
                                    color: "#c7c7c7",
                                    padding: "10px 10px 10px 10px",
                                    fontSize: "115%"
                                }} >
                                <span>My feed</span>
                            </Link>
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

function NestingExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}
export default connect(mapStateToProps, null)(NewFeed);
