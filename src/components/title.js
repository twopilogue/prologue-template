import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import setting from "../utils/customizing-setting.json"

const Title = () => {
  const height = 300
  const titleText = setting.title.text
  const titleColor = setting.title.color
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
          <div className="title">
            {titleColor ? (
              <div className="title-text">
                <h3>{titleText}</h3>
              </div>
            ) : (
              <div className="title-image">
                <StaticImage
                  height={height}
                  src="../images/background-default.jpg"
                  alt="titleImg"
                />
              </div>
            )}
          </div>
        )
      }}
    />
  )
}

export default Title
