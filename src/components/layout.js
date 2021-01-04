import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={"/"} />
      </Helmet>
      <Nav />
      <main className="min-h-screen py-16">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
