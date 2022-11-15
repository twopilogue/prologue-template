import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Title = () => {
  const height = 300
  const titleText = "여기가 타이틀임"
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
        return (
          // <StaticImage
          //   height={height}
          //   src="../images/background-default.jpg"
          //   alt="titleImg"
          // />
          <div className="title">
            <h3>{titleText}</h3>
          </div>
        )
      }}
    />
  )
}

export default Title
