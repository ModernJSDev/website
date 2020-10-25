import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'linear-gradient(to right, #fbff00 0%, #4d4700 100%)',
      marginBottom: `1.45rem`,

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0}}>
     
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <Image/>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
