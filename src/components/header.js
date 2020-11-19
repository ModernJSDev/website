import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Image from "./Image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `linear-gradient(to right, #f7971e, #ffd200)`,
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            display: `grid`,
            gridGap: 10,
            gridTemplateColumns: `[col] 100px [col] 100px [col] 100px [col] 100px`,
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <div
            style={{
              width: `5vw`,
              gridColumn: `col / span 1`,
              gridRow: `row`,
              placeSelf: `center`,
            }}
          >
            <Image />
          </div>
          <div style={{ gridColumn: `col 2 / span 4`, gridRow: `row` }}>
            {siteTitle}
          </div>
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
