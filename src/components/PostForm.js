import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postAction";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
  }

  handleFormChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    let postData = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(postData);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Title : </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleFormChanges}
            />
          </div>
          <div>
            <label>Body : </label>
            <br />
            <textarea name="body" onChange={this.handleFormChanges} />
          </div>
          <br />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createPost }
)(PostForm);
