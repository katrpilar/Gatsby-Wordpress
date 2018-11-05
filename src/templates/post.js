import React, { Component, Fragment } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import PostIcons from "../components/PostIcons"
import Img from "gatsby-image"

// import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Fragment>
        <h1> Testing</h1>
        <img src={post.featured_media.source_url}></img>
        <p>{post.date}</p>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Fragment>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date
      featured_media{
        source_url
      }
  } 
}`