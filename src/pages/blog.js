import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Under construction</h1>
    <p>Page will show all blog posts</p>
    <Link to="/" className="more">Back</Link>
  </Layout>
)

export default SecondPage
