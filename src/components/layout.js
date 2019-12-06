import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title }
    }
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div 
        style={{ 
        display: `flex`,
        minHeight: `100vh`,
        flexDirection: `column`,
      }}>
        <Header siteTitle={title} />
        <div
          style={{
            paddingTop: 0,
            flexGrow: 1,
          }}
        >
          <main>
          {children}
          </main>
        </div>
        <footer 
          style={{ 
            background: `#cab8dd`,
            padding: `3% 4%`,
            textAlign: `center`,
          }}>
          © {new Date().getFullYear()} - Todos os direitos reservados.
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
