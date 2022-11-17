import { StaticQuery, Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import customizing from "../utils/customizing-setting.json"
import logoImg from "../images/gatsby-icon.png"

const Logo = () => {
  const logoText = customizing.logoText
  return (
    <StaticQuery
      query={graphql`
        query TitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return logoText ? (
          <h1>
            <Link to="/">{logoText}</Link>
          </h1>
        ) : (
          <div className="logo-container">
            <img src={logoImg} className="logo-img" alt="logoImg" />
          </div>
        )
      }}
    />
  )
}

export default Logo
