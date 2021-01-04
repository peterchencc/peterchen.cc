import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Emoji from "./Emoji"

const Nav = () => {
  const StyledLink = styled(Link)`
    ${tw`
      p-2 sm:p-2 text-base sm:text-xl tracking-tight
    `}
  `

  const handleScroll = () => {
    let anchor = document.getElementById("scrolling-anchor")
    let fixedNavBar = document.getElementsByClassName("navbar")[0]
    if (anchor && fixedNavBar) {
      if (anchor.offsetTop < document.documentElement.scrollTop) {
        fixedNavBar.classList.remove("text-white", "bg-chelsea-blue")
        fixedNavBar.classList.add("text-chelsea-blue", "bg-white")
      } else {
        fixedNavBar.classList.add("text-white", "bg-chelsea-blue")
        fixedNavBar.classList.remove("text-chelsea-blue", "bg-white")
      }
    }
  }

  if (typeof window !== "undefined" && window.document) {
    window.onscroll = function () {
      handleScroll()
    }
  }

  return (
    <div className="navbar fixed top-0 w-full z-50 m-auto bg-chelsea-blue text-white">
      <div className="container mx-auto flex items-center justify-between flex-wrap py-3">
        <Link className="flex items-center flex-shrink-0" to={`/`}>
          <span className="font-semibold text-xl sm:text-2xl">
            Peter Chen{" "}
            <Emoji symbol="😎" label="Smiling Face with Sunglasses" />
          </span>
        </Link>

        <div
          id="responsiveNav"
          className={`flex items-center w-auto left-auto`}
        >
          <div className="flex">
            {/* <StyledLink to={`/projects`}>Projects</StyledLink> */}
            <StyledLink to={`/about`}>About</StyledLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
