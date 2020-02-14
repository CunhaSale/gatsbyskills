import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as S from './styled'

const Header = ({ siteTitle }) => (
  <S.HeaderTag>
    <S.HeaderWrapper>
      <h1>
        <S.LinkStyled to="/">{siteTitle}</S.LinkStyled>
      </h1>
    </S.HeaderWrapper>
  </S.HeaderTag>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
