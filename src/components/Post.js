import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

class Post extends Component {
  componentWillMount() {
    console.log("i am in will mount");
    this.props.fetchPosts();
  }

  render() {
    let tempPosts = this.props.posts.map(post => (
      <div key={post.id}>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {tempPosts}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.items,
    post: state.post.item
  };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Post);
