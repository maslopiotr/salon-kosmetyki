import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerCennik from '../components/BannerCennik'

const Cennik = props => (
  <Layout>
    <Helmet>
      <title>Cennik - Salon Kosmetyki Samochodowej</title>
      <meta name="description" content="Cennik Usług Strefy Detailingu w Tarnowie - najlepsze usługi - najlepsze ceny." />
    </Helmet>

    <BannerCennik />

    <div id="main">
      <section>
        <div
          className="inner"
          style={{ paddingTop: `2em`, paddingBottom: `0.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Bezpieczne mycie karoserii</dt>
                <dd>
                  <p>
                    <ul>
                      <li>mycie wstępne pianą aktywną o neutralnym Ph</li>
                      <li>
                        oczyszczenie felg, opon i nadkoli dedykowanymi środkami
                        oraz płukanie wnęk
                      </li>
                      <li>
                        bezpieczne mycie karoserii delikatnymi rękawicami
                        mikrofibrowymi i spłukiwanie
                      </li>
                      <li>
                        osuszanie karoserii delikatnymi ręcznikami oraz
                        sprężonym powietrzem
                      </li>
                      <li>
                        aplikacja wosku QD, mycie szyb zewnętrznych i
                        konserwacja opon
                      </li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />50,-</div>
              <div className="listblock">średni<br/>60,-</div>
              <div className="listblock">duży<br/>60,-</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Sprzątanie wnętrza pojazdu</dt>
                <dd>
                  <p>
                    <ul>
                      <li>
                        dokładne odkurzanie wnętrza przy pomocy urządzenia na
                        sprężone powietrze
                      </li>
                      <li>dokładne czyszczenie plastików</li>
                      <li>
                        konserwacja tworzyw (aplikacja antystatycznego
                        dressingu)
                      </li>
                      <li>przetarcie skór i mycie szyb</li>
                      <li>zapach do wyboru</li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />50,-</div>
              <div className="listblock">średni<br/>60,-</div>
              <div className="listblock">duży<br/>60,-</div>
            </div>
          </div>
        </div>
        </section>


<section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Bezpieczne mycie + sprzątanie wnętrza (podstawowe)</dt>
                <dd>
                  <p>
                    <ul>
                      <li>
                        <strong>Bezpieczne mycie karoserii +</strong>
                      </li>
                      <li>dokładne czyszczenie plastików</li>
                      <li>
                        konserwacja tworzyw (aplikacja antystatycznego
                        dressingu)
                      </li>
                      <li>przetarcie skór i mycie szyb</li>
                      <li>zapach do wyboru</li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />70,-</div>
              <div className="listblock">średni<br/>70,-</div>
              <div className="listblock">duży<br/>80,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Full Service</dt>
                <dd>
                  <p>
                    <ul>
                      <li>
                        <strong>Bezpieczne mycie karoserii +</strong>
                      </li>
                      <li>
                        <strong>Sprzątanie wnętrza +</strong>
                      </li>
                      <li>pranie podsufitki, foteli, boczków</li>
                      <li>pranie wykładziny podłogowej, dywaników</li>
                      <li>pranie bagażnika i pasów bezpieczeństwa</li>
                      <li>czyszczenie wnęk drzwi</li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />320,-</div>
              <div className="listblock">średni<br/>350,-</div>
              <div className="listblock">duży<br/>380,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Mycie Detailingowe Basic</dt>
                <dd>
                  <p>
                    <ul>
                      <li>mycie wstępne pianą aktywną o neutralnym pH</li>
                      <li>pędzelkowanie detali</li>
                      <li>
                        doczyszczanie opon, felg i nadkoli dedykowanymi środkami
                        płukanie wnęk drzwi
                      </li>
                      <li>
                        bezpieczne mycie karoserii delikatnymi rękawicami przy
                        użyciu wiader z separatorami zanieczyszczeń
                      </li>
                      <li>
                        spłukiwanie, usuwanie smoły, asfaltu, rdzy lotnej{' '}
                      </li>
                      <li>glinkowanie nadwozia</li>
                      <li>
                        osuszanie karoserii i wnęk przy użyciu sprężonego
                        powietrza i ręczników z mikrofibry
                      </li>
                      <li>mycie szyb zewnętrznych i konserwacja opon</li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />100,-</div>
              <div className="listblock">średni<br/>120,-</div>
              <div className="listblock">duży<br/>140,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Mycie detailingowe + sprzątanie pojazdu</dt>
                <dd>
                  <p>
                    <ul>
                      <li>
                        <strong>Mycie detailingowe karoserii +</strong>
                      </li>
                      <li>
                        dokładne odkurzanie wnętrza przy pomocy urządzenia na
                        sprężone powietrze
                      </li>
                      <li>dokładne czyszczenie plastików</li>
                      <li>
                        konserwacja tworzyw (aplikacja antystatycznego
                        dressingu)
                      </li>
                      <li>przetarcie skór</li>
                      <li>mycie szyb</li>
                      <li>zapach do wyboru</li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />130,-</div>
              <div className="listblock">średni<br/>150,-</div>
              <div className="listblock">duży<br/>170,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Zabezpieczenie lakieru twardym woskiem</dt>
                <dd>
                  <p>
                    <ul>
                      <li>
                        <strong>Bezpieczne mycie karoserii +</strong>
                      </li>
                      <li>odtłuszczenie karoserii</li>
                      <li>
                        ręczna aplikacja twardego wosku lub powłoki polimerowej
                      </li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />150,-</div>
              <div className="listblock">średni<br/>200,-</div>
              <div className="listblock">duży<br/>200,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Jednoetapowa korekta lakieru</dt>
                <dd>
                  <p>
                    <ul>
                      <li>
                        <strong>Mycie detailingowe karoserii +</strong>
                      </li>
                      <li>jednoetapowy proces korekty lakieru</li>
                      <li>usunięcie hologramów</li>
                      <li>usunięcie zarysowań kolistych</li>
                      <li>usunięcie zarysowań prostych</li>
                      <li>przywrócenie blasku</li>
                      <li>uzyskanie efektu lustra do 80%</li>
                      <li>zabezpieczenie lakieru twardym woskiem</li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />300,-</div>
              <div className="listblock">średni<br/>350,-</div>
              <div className="listblock">duży<br/>400,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>WIeloetapowa korekta lakieru</dt>
                <dd>
                  <p>
                    <ul>
                      <li>
                        <strong>
                          Mycie detailingowe karoserii + wieloetapowy proces
                          korekty lakieru
                        </strong>
                      </li>
                      <li>
                        usunięcie hologramów do 100%usunięcie zarysowań
                        kolistych do 100%
                      </li>
                      <li>
                        usunięcie zarysowań prostych (w zależności od głębokości
                        zarysowania) do 100%
                      </li>
                      <li>przywrócenie blasku</li>
                      <li>uzyskanie efektu lustra do 100%</li>
                      <li>zabezpieczenie lakieru twardym woskiem</li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />600,-</div>
              <div className="listblock">średni<br/>800,-</div>
              <div className="listblock">duży<br/>850,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Powłoka Ceramiczna</dt>
                <dd>
                  <p>
                    <ul>
                      GRATIS <br />
                      <li>
                        Niewidzialna wycieraczka komplet przednich szyb +
                        lusterka
                      </li>
                      <li>Zabezpieczenie felg powłoką ceramiczną</li>
                      <br />
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">mały<br />900,-</div>
              <div className="listblock">średni<br/>1400,-</div>
              <div className="listblock">duży<br/>2400,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Mycie felg + zabezpieczenie</dt>
                <dd>
                  <p>
                    <ul>
                      <li>Mycie felg ze smoły, kleju itp. z demontażem</li>
                      <li>
                        zabezpieczenie felg woskiem odpornym na działanie
                        wysokich temperatur
                      </li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
              <div className="listblock">16"<br />130,-</div>
              <div className="listblock">16" - 19"<br/>140,-</div>
              <div className="listblock">> 19"<br/>150,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper">
            <div className="col-8">
              <dl>
                <dt>Mycie felg + powłoka ceramiczna</dt>
                <dd>
                  <p>
                    <ul>
                      <li>Mycie felg ze smoły, kleju itp. z demontażem +</li>
                      <li>
                        zabezpieczenie felg dedykowanymi powłokami ceramicznymi
                      </li>
                    </ul>
                  </p>
                </dd>
              </dl>
            </div>
            <div className="col-4" style={{textAlign:`center`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
            <div className="listblock">16"<br />180,-</div>
              <div className="listblock">16" - 19"<br/>200,-</div>
              <div className="listblock">> 19"<br/>220,-</div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div
          className="inner"
          style={{ paddingTop: `1em`, paddingBottom: `.5em` }}
        >
          <div className="grid-wrapper" style={{textAlign:`center`, marginBottom:`4em`}}>
            <div className="col-4">
              <dl>
                <dt>Impregnacja tapicerki</dt>
                <dd>
                  <p>od 50,-</p>
                </dd>
              </dl>
            </div>
            <div className="col-4">
              <dl>
                <dt>Renowacja reflektorów</dt>
                <dd>
                  <p>od 100,-</p>
                </dd>
              </dl>
            </div>
            <div className="col-4">
              <dl>
                <dt>Mycie komory silnika</dt>
                <dd>
                  <p>od 100,-</p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Cennik
