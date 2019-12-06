import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <div
      class="title-post"
      style={{
        height: `370px`,
        background: `#cab8dd`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
      }}>
      <h2>Título do post</h2>
    </div>
  </Layout>
)

export default SecondPage
