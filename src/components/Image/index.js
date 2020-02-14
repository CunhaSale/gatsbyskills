import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <S.ImageStyled fluid={data.placeholderImage.childImageSharp.fluid}></S.ImageStyled>
}

export default Image
