import React from 'react'
import {Link} from 'gatsby'
import {flow} from 'lodash/fp'
import {addProps} from 'ad-hok'

import {rhythm, scale} from '../utils/typography'

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({title}) => (
  <Link
    style={{
      boxShadow: `none`,
      textDecoration: `none`,
      color: `inherit`,
    }}
    to="/"
  >
    {title}
  </Link>
)

const Layout = flow(
  addProps(({location, title}) => ({
    header:
      location.pathname === rootPath ? (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Title title={title} />
        </h1>
      ) : (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Title title={title} />
        </h3>
      ),
  })),
  ({header, children}) => (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
)

export default Layout
