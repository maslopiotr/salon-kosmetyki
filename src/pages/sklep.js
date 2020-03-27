import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSklep from '../components/BannerSklep.js'

const Sklep = props => (
  <Layout>
    <Helmet>
   
      <title>Sklep z kosmetykami do pielęgnacji Twojego samochodu</title>
      <meta name="description" content="Mamy wszystko, czego potrzebuje Twój samochód. Największy sklep detailingowy w regionie" />
    </Helmet>

    <div id="main">
      <section id="one">
      
        <BannerSklep />
        <div className="inner">
          <div className="grid-wrapper" style={{maxWidth:`1000px`,paddingTop:`1em`}}>
              <div className="col-6"style={{display:`flex`,justifyContent:`center`, alignItems:`center`}}>
                  <h3 style={{fontSize:`2em`}}>Mamy wszystko, czego potrzebuje Twój samochód</h3>
              </div>
              <div className="col-6">
                  <h4>Największy sklep detailingowy w regionie</h4>
                      <p>Jesteśmy największym sklepem detailingowym w regionie. Każdy produkt przetestowaliśmy osobiście.</p>
                      <h4>Bogata oferta</h4>
                      <p>W bogatej ofercie znajdziecie Państwo szeroką gamę m. in. szamponów, wosków, powłok ochronnych, dressingów, preparatów do pielęgnacji tapicerek oraz wszelkiego rodzaju narzędzia i akcesoria niezbędnie w detailingu.</p>
                      <h4>Partnerzy RR Customs</h4>
                      <p>Nasz sklep jest partnerem RR Customs.</p>
              </div>
          </div>
          <div className="grid-wrapper backgroundSklep">
          <div className="col-2"></div>
              <div className="col-8"><h3>Ciągle poszerzamy ofertę</h3>
              <p><strong>Jeśli szukasz jakiegoś kosmetyku i nigdzie nie możesz go dostać - przyjdź do nas !</strong></p></div>
              <div className="col-2"></div>
         
              </div>
              </div>

      </section>
    </div>
  </Layout>
)

export default Sklep
