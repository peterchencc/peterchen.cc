import React from "react"
import { Link } from "gatsby"
import Emoji from "./Emoji"

const Footer = () => {
  return (
    <footer>
      <div className="text-center bg-gray-200">
        <div className="container mx-auto py-12 md:py-32">
          <div className="mx-auto w-full md:w-3/4 lg:w-1/2">
            <div className="text-2xl sm:text-3xl font-black pb-4 mb-8">
              Contact me
            </div>
            <div>
              If you like what you’ve seen on my site, feel free to get in
              touch! <Emoji symbol="😉" label="Winking Face" />
            </div>
            <div className="">
              Shoot me a email at{" "}
              <a className="font-bold" href="mailto:peterchencc@gmail.com">
                peterchencc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <nav className="flex justify-between py-4 text-sm sm:text-base">
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>

          <div className="flex justify-end">
            <a
              className="ml-2"
              href="https://github.com/peterchencc/peterchen.cc"
            >
              Source Code
            </a>
            <Link className="ml-2" to="/about">
              About
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
