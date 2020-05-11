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
        <h1 style={{"marginBottom":"0"}}>{mdx.frontmatter.title}</h1>
        <span style={{"fontWeight":"bold"}}>{mdx.frontmatter.date}</span>
        <span style={{"fontStyle":"italic"}}>{mdx.frontmatter.author}</span>
        <br />
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
        date
        feature_image {
          relativePath
        }
      }
      fileAbsolutePath
    }
  }`