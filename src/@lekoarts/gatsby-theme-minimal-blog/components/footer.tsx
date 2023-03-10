/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {siteTitle} {new Date().getFullYear()}. All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Link to GitHub repository"
          href="https://github.com/gustavex"
        >
          GitHub
        </Link>
        {` `}
        <Link
          aria-label="Link to Twitter account"
          href="https://twitter.com/gus_vasquez_"
        >
          Twitter
        </Link>
        {` `}
        <Link
          aria-label="Link to LinkedIn profile"
          href="https://www.linkedin.com/in/gustavo-vasquez-lozada/"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  )
}

export default Footer