import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>Upload your stories</p>
      <p>
        <Link>Contact Us</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
