// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
      
      <Layout pageTitle="Welcome to The Khayo Agency!">
        <p>lorem ipsum dolor ismat</p>
        <StaticImage
        alt="grijze stad"
        src="../images/gray_city.jpg"
        />
      </Layout>
    </main>
  )
}
// Stap 3: Exporteer je component
export default IndexPage