import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import InstagramPhotos from '../components/InstagramPhotos'
import BlogPosts from '../components/BlogPosts'

const IndexPage = () => {
  
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <h1 className="heading">BLOG</h1>
        <BlogPosts />
      </section>
      <section>
        <h1 className="heading">PICTURES</h1>
        <InstagramPhotos />
      </section>
    </Layout>
  )
}

export default IndexPage
