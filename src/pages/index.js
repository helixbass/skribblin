import React from 'react'
import {Link, graphql} from 'gatsby'
import {flow} from 'lodash/fp'
import {addProps} from 'ad-hok'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm} from '../utils/typography'

const PostLink = flow(
  addProps(({post: {frontmatter: {title}, fields: {slug}}}) => ({
    title: title || slug,
  })),
  ({
    post: {
      frontmatter: {date, description},
      fields: {slug},
      excerpt,
    },
    title,
  }) => (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{boxShadow: `none`}} to={slug}>
          {title}
        </Link>
      </h3>
      <small>{date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
    </div>
  )
)

const BlogIndex = ({data, location}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      {posts.map(({node, node: {fields: {slug}}}) => (
        <PostLink post={node} key={slug} />
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
