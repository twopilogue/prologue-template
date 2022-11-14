import { StaticQuery, Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import customizing from "../util/customizing-setting.json"

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
          <div className="logoImg">
            <StaticImage
              layout="fullWidth"
              src="../images/gatsby-icon.png"
              alt="logoImg"
            />
          </div>
        )
      }}
    />
  )
}

export default Logo
