import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import GlobalStyles from "../../styles/global"

import * as S from './styled'

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
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header siteTitle={title} />
      <S.MainWrapper>
        <main>
        {children}
        </main>
      </S.MainWrapper>
      <S.FooterStyled>
        © {new Date().getFullYear()} - Todos os direitos reservados.
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </S.FooterStyled>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
