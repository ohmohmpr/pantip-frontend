import React, { Component } from 'react'
import { Row, Col, Input, Card, Button } from 'antd';

import Axios from '../config/api.service'

const { TextArea } = Input;

class TopicList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            commentsList: [],
        }
    }

    componentDidMount() {
        Axios.get('/topic/2').then((response) => {
            this.setState({
                post: response.data,
                commentsList: response.data.comments
            })
            // console.log(this.state.commentsList)
            // console.log(this.state.post)
        })
    }

    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={18} >
                    <Card key={this.state.post.id} style={{ backgroundColor: "#193366", border: "solid 1px #8E8BA7", marginTop: "40px", marginBottom: "80px" }}>
                        <h1 style={{ color: "#FFCD05" }}>{this.state.post.header}</h1>
                        <div style={{ color: "#cccccc" }}>
                            {this.state.post.content}
                            <br />
                            {this.state.post.user_id}
                        </div>
                    </Card>
                    {this.state.commentsList.map(comment => (
                        <Card key={comment.id} style={{ backgroundColor: "#222244", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "80px" }}>
                            <h2 style={{ color: "#FFCD05" }}>ความคิดเห็นที่ {comment.id}</h2>

                            <div style={{ color: "#cccccc" }}>
                                {comment.content}
                                <br />
                                {comment.user_id}
                            </div>
                        </Card>
                    ))}
                    <Card style={{ backgroundColor: "#093A43", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "80px" }}>
                        <h2 style={{ color: "#FFCD05" }}>ความคิดเห็นที่ </h2>

                        <div style={{ color: "#cccccc" }}>
                            <TextArea autoSize={{ minRows: 10, maxRows: 20 }} style={{ backgroundColor: "#0E5C6A", marginBottom: "10px" }} />
                        </div>
                        <Button style={{ backgroundColor: "#55C10D" }}>
                            <a href="/signup" className="navbar-item" style={{ color: "#e9e5f6" }}>ส่งกระทู้</a>
                        </Button>
                    </Card>
                    
                </Col>
            </Row>
        )
    }
}
export default TopicList
