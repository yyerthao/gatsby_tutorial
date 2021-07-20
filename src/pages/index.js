import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Movie from '../components/movie';

// setting a local array of movies
const movies = {
   title: "Windstruck",
   genre: "Heartfelt",
   trailer: "-EtUf_8FEoI",
   image: "https://m.media-amazon.com/images/M/MV5BMjE3YTE3MzctZTkyZi00OTA0LTg5NjItYmI3YTUyZjYyNGYwXkEyXkFqcGdeQXVyNDk4OTYxNjA@._V1_.jpg"
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <br/>
    <Movie data={movies}/>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br/>
    </p>
  </Layout>
)

export default IndexPage
