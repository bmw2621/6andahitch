import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import InstagramPhotos from '../components/InstagramPhotos'

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <h1 className="heading">BLOG</h1>
      </section>
      <section>
        <h1 className="heading">PICTURES</h1>
        <InstagramPhotos />
      </section>
    </Layout>
  )
}

export default IndexPage
