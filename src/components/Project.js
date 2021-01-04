import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import CardImage from "../../content/images/card-top.jpg"

const Project = ({ data }) => {
  const Thumbnail = () => {
    if (data.frontmatter.thumbnail !== undefined) {
      return (
        <Img
          className="w-full"
          fluid={data.frontmatter.thumbnail.childImageSharp.fluid}
        />
      )
    } else {
      return (
        <img className="w-full" src={CardImage} alt="Sunset in the mountains" />
      )
    }
  }

  const tags = data.frontmatter.tags

  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white">
      <div className="px-4 py-4">
        <Link to={data.fields.slug}>
          <Thumbnail />
          <div className="font-bold text-xl md:text-2xl my-4">
            <span className="shadow-blue">{data.frontmatter.projectName}</span>
          </div>
          <p className="text-gray-700 text-base">
            {data.frontmatter.description}
          </p>
        </Link>
      </div>
      <div className="px-4 pt-4 pb-2">
        {tags &&
          tags.map((tag) => {
            return (
              <span
                key={tag}
                className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-blue-100 hover:bg-blue-200 mr-2 mb-2"
              >
                {tag}
              </span>
            )
          })}
      </div>
    </div>
  )
}

Project.propTypes = {
  data: PropTypes.node.isRequired,
}

export default Project
