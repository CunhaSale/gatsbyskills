import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

import styled from 'styled-components'

const LayoutWrapper = styled.div`
  height: 370px;
  background: #cab8dd;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SecondPage = () => (
  <Layout>
    <LayoutWrapper>
      <h2>Título do post</h2>
    </LayoutWrapper>
  </Layout>
)

export default SecondPage
