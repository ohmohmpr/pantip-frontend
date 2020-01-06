import React, { Component } from 'react'
import { Row, Col, Card } from 'antd';

export default class Post extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <Card style={{ width: 1000, backgroundColor: "#193366", border: "solid 1px #8E8BA7" }}>
                        <h1 style={{ color: "#FFCD05" }}>Card content</h1>
                        <div style={{ color: "#cccccc" }}>
                            <p>Card content</p>
                            <p>Card content</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        )
    }
}
