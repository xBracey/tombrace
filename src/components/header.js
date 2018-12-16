import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles/headerStyle'

const Header = ({ siteTitle }) => (
  <div style={styles.headerContainer}>
    <div style={styles.header}>
      <h1 style={styles.headerText}>
        <Link to="/" style={styles.headerLink}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
