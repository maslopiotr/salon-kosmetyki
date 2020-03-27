import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const ThankYouPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>Twoja wiadomość została wysłana.</h1>
          <p>Dziękujemy, skontaktujemy się wkrótce.</p>
          <Link to="/">Wróć na Główną</Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default ThankYouPage
