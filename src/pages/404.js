import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>Ups! Coś poszło nie tak...</h1>
          <p>Przepraszamy, ale strona której szukasz nie istnieje.</p>
          <Link to="/">Wróć na Główną</Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
