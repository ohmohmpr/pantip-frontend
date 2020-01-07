import React, { Component } from 'react'
import { connect } from "react-redux";
import { getData } from "../redux/actions"
import Axios from '../config/api.service'
import { Row, Col, Card } from 'antd';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


export class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: []
    }
  }

  componentDidMount() {
    Axios.get('/posts').then((response) => {
      // console.log(response.data)
      this.setState({
        postList: response.data
      })
      // console.log(this.state.postList)
    })
  }






  render() {
    let url = 'topic'
    return (
      <>
        {this.state.postList.map(post => (
          <div style={{ borderBottom: "1px solid #363358", width: "100%", padding: "5px 10px 5px 10px", backgroundColor: "#2D2A49", color: "#7E79AD", float: "left", textAlign: 'left' }} key={post.id}>
            
            <Link to={`${url}/${post.id}`} style={{ color: "#c2c2c2", marginBottom: "4px", fontSize: "120%" }} >{post.header}</Link>
            <br />
            {post.content.slice(0, 160)}
            <br />
            <span style={{ color: "#A6A3C7", marginBottom: "4px", fontSize: "100%" }}> สมาชิกหมายเลข {post.user_id} </span>
          </div>
        ))}
      </>
    )
  }
}


export default PostList;


// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }
// function Topics() {
//   // The `path` lets us build <Route> paths that are
//   // relative to the parent route, while the `url` lets
//   // us build relative links.
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }