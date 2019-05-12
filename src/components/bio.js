/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

import {rhythm} from '../utils/typography'

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={({
      site: {
        siteMetadata: {
          author,
          // social
        },
      },
    }) => (
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          Written by <strong>{author}</strong> who lives and works in NYC.
        </p>
      </div>
    )}
  />
)

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
