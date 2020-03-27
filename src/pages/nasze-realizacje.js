import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerRealizacje from '../components/BannerRealizacje'
import Gallery  from '../components/Gallery'

const Cennik = props => (
  <Layout>
    <Helmet>
    
      <title>Nasze realizacje - Salon Kosmetyki Samochodowej</title>
      
      <meta name="description" content="Galeria klientów Salonu Kosmetyki Samochodowej" />
    </Helmet>

    <BannerRealizacje />

    <div id="main">
      < Gallery />
    </div>
  </Layout>
)

export default Cennik
