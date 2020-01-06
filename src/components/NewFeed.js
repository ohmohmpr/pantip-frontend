import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import PostList from '../pages/PostList'
import { getData } from "../redux/actions"

class NewFeed extends Component {


    handleClick = () => {
        console.log(this.props.getData());
    }
    render() {
        return (
            <div>
                <Row type="flex" justify="start" style={{ backgroundColor: '#2D2A49', borderBottom: 'solid 1px #6C73A6', color: "#c7c7c7" }}  >
                    <Col>
                        <a
                            href="#top"
                            type="button"
                            onClick={() => this.handleClick()}
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
                        <a
                            href="#top"
                            type="button"
                            style={{
                                borderRight: 'solid 1px #6C73A6',
                                color: "#c7c7c7",
                                padding: "10px 10px 10px 10px",
                                fontSize: "115%"
                            }} >
                            <span>My feed</span>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <PostList />
                </Row>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        posts: state.remotePosts.slice(11, 20)
    };
}
export default connect(
    mapStateToProps,
    { getData }
)(NewFeed);
