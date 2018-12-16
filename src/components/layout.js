import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import './styles/main.css'
import styles from './styles/layoutStyle'

const Layout = ({ children }) => (
  <div style={styles.pageContainer}>
    <Helmet
      title={"Brace's Brilliant Blog"}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle={"Brace's Brilliant Blog"} />
    <div style={styles.layoutContainer}>{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
