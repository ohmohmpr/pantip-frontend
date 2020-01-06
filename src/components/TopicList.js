import React, { Component } from 'react'
import { Row, Col, Card } from 'antd';
import { connect } from "react-redux";
import { getComment } from "../redux/actions/"

class TopicList extends Component {
    componentDidMount() {
        this.props.getComment();
    }
    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={18} >
                {this.props.commentList.map(comment => (
                    <>
                    <Card style={{ backgroundColor: "#193366", border: "solid 1px #8E8BA7", marginTop: "40px", marginBottom: "80px" }}>
                        <h1 style={{ color: "#FFCD05" }}>{comment.header}</h1>
                        
                        <div style={{ color: "#cccccc" }}>
                            
                        {comment.content}
                        </div>
                    </Card>

                    <Card style={{ backgroundColor: "#222244", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "80px" }}>
                        <h2 style={{ color: "#FFCD05" }}>ความคิดเห็นที่ {comment.id}</h2>

                        <div style={{ color: "#cccccc" }}>
                        {comment.comments[0].content}
                        </div>
                    </Card>
                    <Card style={{ backgroundColor: "#222244", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "80px" }}>
                        <h2 style={{ color: "#FFCD05" }}>ความคิดเห็นที่ {comment.id}</h2>

                        <div style={{ color: "#cccccc" }}>
                        {comment.comments[1].content}
                        </div>
                    </Card>
                    <Card style={{ backgroundColor: "#222244", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "80px" }}>
                        <h2 style={{ color: "#FFCD05" }}>ความคิดเห็นที่ {comment.id}</h2>

                        <div style={{ color: "#cccccc" }}>
                        {comment.comments[2].content}
                        </div>
                    </Card>
                    </>
                ))}



                    {/* {this.props.commentList.comments[2].map(comment => (
                        <Card style={{ backgroundColor: "#222244", border: "solid 1px #8e8ba7", marginTop: "40px", marginBottom: "80px" }}>
                            <h2 style={{ color: "#FFCD05" }}>ความคิดเห็นที่ {comment.id}</h2>
                            
                            <div style={{ color: "#cccccc" }}>
                            {comment}
                            </div>
                        </Card>
                    ))
                    } */}

                </Col>
            </Row>
        )
    }
}


function mapStateToProps(state) {
    return {
        commentList: state.remoteComments
    };
}
export default connect(
    mapStateToProps,
    { getComment }
)(TopicList);

