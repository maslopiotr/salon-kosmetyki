import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import auto3 from '../assets/images/autodetailing/autodetailing-3.jpg'
import auto4 from '../assets/images/autodetailing/autodetailing-4.jpg'
import auto5 from '../assets/images/autodetailing/autodetailing-5.jpg'
import auto6 from '../assets/images/autodetailing/autodetailing-6.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Autodetailing</title>
      <meta name="description" content="Specjalizujemy się w odnawianiu i zabezpieczaniu samochodów najnowocześniejszymi powłokami. Przywracamy salonowy wygląd autom używanym, regenerujemy lakiery i odnawiamy wnętrza. Odwiedź nas i przekonaj się co potrafimy." />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner" style={{ maxWidth: `800px` }}>
          <header className="major">
            <h2>Autodetailing</h2>
          </header>
          <p>
          Każdy samochód potrzebuje uwagi i poświęcenia czasu.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="#contact" className="image">
            <img src={auto4} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Najlepsze kosmetyki</h3>
              </header>
              <ul>
                <li>Renomowanej klasy marki.</li>
                <li>
                  Najwyższy poziom wykonywanych usług i rzetelne podejście to
                  nasze standardy.
                </li>
                <li>Profesjonalny sprzęt.</li>
                <li>
                  Tajniki naszego fachu zgłębialiśmy od podstaw - jesteśmy
                  ekspertami branży car detalingu.
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <Link to="#contact" className="button">
                    Umów się
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/nasze-realizacje/" className="image">
            <img src={auto3} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Gdy coś robimy, to na 100%</h3>
              </header>
              <p>
                Który z kierowców nie marzy o pięknym, czystym i błyszczącym
                aucie. Dzięki
                zastosowaniu wysokiej jakości kosmetyków i nowoczesnej
                technologii, jesteśmy w stanie zadbać tak o Twój pojazd, aby
                wyglądał, jakby właśnie wyjechał z salonu.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/nasze-realizacje/" className="button">
                    Zobacz galerię
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="" className="image">
            <img src={auto5} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Zrodzeni z pasji</h3>
              </header>
              <p>
              Nasza praca to nasza pasja, dlatego wykonujemy ją z czystą przyjemnością i dbałością, aby każdy Klient korzystający z naszej oferty był zadowolony. Razem z Nami, Twój samochód nabierze nowego wyglądu.
              </p>
              <ul className="actions">
                <li>Nasze opinie na:</li>
                <li><a href="https://www.facebook.com/pg/salonkosmetykisamochodowej/reviews/?ref=page_internal" className="button" target="blank" rel="noopener noreferrer nofollow">Facebook</a>
                <br /></li>
                <li>
                <a href="https://www.google.com/maps/place/Salon+Kosmetyki+Samochodowej+-+MYJNIA+POD+MC+DONALD'S+TO+NIE+MY/@50.0163563,20.967509,15z/data=!4m8!1m2!2m1!1sCar+detailing+service!3m4!1s0x473d9ca4373006bb:0xcfbe771f19b3f89c!8m2!3d50.016336!4d20.976296?hl=en-GB" className="button" target="blank" rel="noopener noreferrer nofollow">Google</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <Link to="" className="image">
            <img src={auto6} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Przyjedź do nas</h3>
              </header>
              <ul>
                  <li>2 lata na rynku</li>
                  <li>100% zadowolonych klientów</li>
                  <li>>1000 produktów</li>
                  <li>5 lat doświadczenia</li>
              </ul>
              <ul className="actions">
                <li><a href="https://www.google.com/maps/place/Salon+Kosmetyki+Samochodowej+-+MYJNIA+POD+MC+DONALD'S+TO+NIE+MY/@50.0163563,20.967509,15z/data=!4m8!1m2!2m1!1sCar+detailing+service!3m4!1s0x473d9ca4373006bb:0xcfbe771f19b3f89c!8m2!3d50.016336!4d20.976296?hl=en-GB" className="button" target="blank" rel="noopener noreferrer nofollow">Odwiedź nas</a></li>
              </ul>
            </div>
          </div>
        </section>



      </section>
    </div>
  </Layout>
)

export default Landing
