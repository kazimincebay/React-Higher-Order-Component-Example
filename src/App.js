import './App.css';
import {Component} from "react"
import axios from 'axios';
import Post from "./Post"

class App extends Component {
  state = {
    posts: [],
    isLoading: true,
  };

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.data)
        .then((datas) => {
          console.log(datas);

          this.setState({
            posts: datas,
            isLoading: false,
          });
        });
    },2000);
  }
  render(){
    const { isLoading } = this.state;
    return (
      <div className="App">
        <Post {...this.state}/>
        {/* <h1>Posts</h1>
        {isLoading ? "Loading" : ""}
        {this.state.posts.map((post) => (
          <div key={post.id}>
            {post.title} - {post.body}
          </div>
        ))} */}
      </div>
    );
  }
  
}

export default App;
