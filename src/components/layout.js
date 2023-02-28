/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Navbar from "./Navbar"

const Layout = ({ children, title, description }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      wordpress {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  const siteTitle = data.wordpress?.generalSettings?.title || data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.wordpress?.generalSettings?.description || data.site.siteMetadata?.description
  return (
    <>
      <Header siteTitle={siteTitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <div style={{ paddingBottom: "3rem" }}>
          <div style={{ fontSize: "2rem" }}><b>{siteTitle}</b></div>
          <div>{siteDescription}</div>
        </div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with Gatsby
          <Navbar />
        </footer>
      </div>
    </>
  )
}

export default Layout
