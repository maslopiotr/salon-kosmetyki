import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

import main1  from '../assets/images/show/main-1.jpg'
import main2  from '../assets/images/show/main-2.jpg'
import main3  from '../assets/images/show/main-3.jpg'
import main4  from '../assets/images/show/main-4.jpg'
import main5  from '../assets/images/show/main-5.jpg'
import main6  from '../assets/images/show/main-6.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet

          htmlAttributes={{lang: `pl-PL`}}
          title="Strefa Detailingu - najlepszy detailingu w Tarnowie"
          meta={[
            { name: 'description', content: 'Specjalizujemy się w odnawianiu i zabezpieczaniu samochodów najnowocześniejszymi powłokami. Przywracamy salonowy wygląd autom używanym, regenerujemy lakiery i odnawiamy wnętrza. Odwiedź nas i przekonaj się co potrafimy' },
            { name: 'keywords', content:'autodetailing, myjnia Tarnów, sklep detailingowy, kosmetyki samochodowe, pranie tapicerki, czyszczenie tapicerki, powłoka ceramiczna Tarnów, myjnia, detailing, sklep detailingowy, kosmetyki samochodowe' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Sklep</h3>
                <p>
                  Szampony, woski, powłoki ochronne, dressingi, preparaty do
                  pielęgnacji tapicerek.
                </p>
              </header>
              <Link to="https://shop.strefadetailingu.com/" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Autodetailing</h3>
                <p>
                  Pielęgnacja zabezpieczająca nadwozia i wnętrza pojazdu przed
                  czynnikami zewnętrznymi. Powłoki ochronne pozwalają na
                  zachowanie świetnego wyglądu na długi czas.
                </p>
              </header>
              <Link to="/autodetailing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Nasze realizacje</h3>
                <p>
                  Twój samochód potrzebuje uwagi, czasu oraz staranności. Zobacz
                  jak my zadbaliśmy o samochody naszych klientów.
                </p>
              </header>
              <Link to="/nasze-realizacje" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Cennik</h3>
                <p>Cennik usług</p>
              </header>
              <Link to="/cennik" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Opinie</h3>
                <a href="https://www.facebook.com/pg/salonkosmetykisamochodowej/reviews/?ref=page_internal" target="blank" rel="noopener noreferrer nofollow">Facebook</a>
                <br />
                <a href="https://www.google.com/maps/place/Salon+Kosmetyki+Samochodowej+-+MYJNIA+POD+MC+DONALD'S+TO+NIE+MY/@50.0163563,20.967509,15z/data=!4m8!1m2!2m1!1sCar+detailing+service!3m4!1s0x473d9ca4373006bb:0xcfbe771f19b3f89c!8m2!3d50.016336!4d20.976296?hl=en-GB" target="blank" rel="noopener noreferrer nofollow">Google</a>
              </header>
            </article>

            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>O nas</h3>
                <p>Czym się zajmujemy i jak działamy</p>
              </header>
              <Link to="/o-nas" className="link primary"></Link>
            </article>
          </section>

          <section id="two">
            <div className="inner">
              <header className="major">
                <p>Co możemy zrobić dla</p>
                <h4 style={{ textTransform: `uppercase` }}>
                  Twojego samochodu
                </h4>
              </header>
              <div className="grid-wrapper">
                <div className="col-4">
                  <h3>Dbamy o karoserię samochodu</h3>
                  <p>
                    Potrafimy przywrócić blask lakierowi. Poprzez korektę
                    jesteśmy w stanie uzyskać nieskazitelny wygląd i
                    przykuwający wzrok blask. Po zaaplikowaniu powłoki
                    ceramicznej dodatkowe podbicie głębi i blasku lakieru daje
                    oszałamiający efekt.
                  </p>
                </div>
                <div className="col-4">
                  <h3>Przygotujemy samochód</h3>
                  <p>
                    Odpowiednio wyczyszczony samochód sprzedaje się o wiele
                    drożej. Czysta podłoga, fotele, podsufitka, pasy
                    bezpieczeństwa, komora silnika, kokpit to rzeczy na które
                    warto zwrócić uwagę a zwróci się z nawiązką przy sprzedaży
                    pojazdu.
                  </p>
                </div>
                <div className="col-4">
                  <h3>Sklep z kosmetykami</h3>
                  <p>
                    W naszym sklepie mamy tylko to, co najlepsze. Każdy kosmetyk
                    został przez nas przetestowany i sprawdzony. U nas
                    znajdziesz takie marki jak: Shiny Garage, RR Customs,
                    Poorboys World, Nielsen, Soft99, Collinite oraz pełną gamę
                    akcesoriów potrzebnych aby zadbać o Twój samochód w każdym
                    detalu.
                  </p>
                </div>
              </div>
            </div>
          </section>

            <div className="inner">
              <header className="major">
                <p>nasze ostatnie</p>
                <h4 style={{ textTransform: `uppercase` }}>realizacje</h4>
              </header>
              <div className="box alt">
                <div className="grid-wrapper">
                  <div className="col-4">
                    <Link to="/nasze-realizacje/">
                    <h3>Audi A7</h3>
                    <span className="image fit">
                      <img src={main1} alt="" />
                    </span>
                    </Link>
                  </div>
                  <div className="col-4">
                  <Link to="/nasze-realizacje/">
                    <h3>Audi Q7</h3>
                    <span className="image fit">
                      <img src={main2} alt="" />
                    </span>
                    </Link>
                    </div>
                  <div className="col-4">
                    <Link to="/nasze-realizacje/">
                  <h3>BMW</h3>
                    <span className="image fit">
                      <img src={main3} alt="" />
                    </span>
                    </Link>
                  </div>
                  <div className="col-4">
                  <Link to="/nasze-realizacje/">
                  <h3>Kia</h3>
                    <span className="image fit">
                      <img src={main4} alt="" />
                    </span>
                    </Link>
                  </div>
                  <div className="col-4">
                  <Link to="/nasze-realizacje/">
                  <h3>Mercedes S klasa</h3>
                    <span className="image fit">
                      <img src={main5} alt="" />
                    </span>
                    </Link>
                  </div>
                  <div className="col-4">
                  <Link to="/nasze-realizacje/">
                  <h3>Skoda Rapid</h3>
                    <span className="image fit">
                      <img src={main6} alt="" />
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
