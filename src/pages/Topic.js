import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import TopicList from '../components/TopicList';

export default class Topic extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#3C3963" }}>
                <Navbar />
                <TopicList con={this.props.con} />
            </div>
        )
    }
}
