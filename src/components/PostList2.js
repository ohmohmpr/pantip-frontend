import React from 'react'
import Post from './Post'
import { Row } from 'antd'

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: this.props.postList[0]
        }
    }

    renderPostList() {
        return this.props.postList.map(post => (
            <Post key={post.id}
                header={post.header}
                author={post.user_id}
                message={post.content}
            // imgSrc={post.image_url}
            // date={post.date}
            // commentList={post.commentList}
            // owner={this.props.owner}
            />
        ))
    }

    render() {
        return (
            <Row>
                {this.renderPostList()}
            </Row>
        )
    }
}