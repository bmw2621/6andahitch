import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"

import "../styles/styles.css"

const Layout = ({ children }) => (
    <>
      <Header />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.benwinchester.dev">BW Web Solutions</a>
      </footer>
    </>
  )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
