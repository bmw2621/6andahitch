import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout"



const shortcodes = { Link } 

export default function PostsTemplate({ data: { mdx } }) {

  const featureImage = require(`../posts/${mdx.frontmatter.feature_image.relativePath}`)

  return (
    <Layout>
      <img src={featureImage} className="featureImage" alt="Blog Post"/>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <Link to="/" className="more">Back</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        feature_image {
          relativePath
        }
      }
      fileAbsolutePath
    }
  }`