import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerONas from '../components/BannerONas.js'

const ONas = props => (
  <Layout>
    <Helmet>
    
      <title>Sklep z kosmetykami do pielęgnacji Twojego samochodu</title>
      
      <meta name="description" content="Strefa Detailingu - najlepszy autodetailing w najlepszej cenie. Pomagamy zadbać o Twój samochód - w każdym aspekcie" />
    </Helmet>

    <div id="main">
      <section id="one">
        <BannerONas />
        <div className="inner">
          <div
            className="grid-wrapper"
            style={{ maxWidth: `1000px`, paddingTop: `1em` }}
          >
            <div
              className="col-6"
              style={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <h3 style={{ fontSize: `2em` }}>
                Pomagamy zadbać o Twój samochód, w każdym aspekcie
              </h3>
            </div>
            <div className="col-6">
              <h4>Dbamy o karoserię samochodu</h4>
              <p>Potrafimy przywrócić blask każdemy lakierowi.<br/>
                Poprzez korektę poprawiamy wygląd i wydobywamy przykuwający wzrok blask lakieru.<br/>
                Po zaaplikowaniu powłoki ceramicznej dodatkowe podbicie głębi i
                blasku lakieru daje oszałamiający efekt.</p>

              <h4>Przygotujemy samochód do sprzedaży</h4>
              <p>
                Czysta podłoga, fotele, podsufitka,pasy bezpieczeństwa, wnęki,
                komora silnika, kokpit, naprawione przetarcia skóry to rzeczy na
                które warto zwrócić uwagę – wydatek poniesiony w studiu wróci
                się z nawiązką przy sprzedaży pojazdu.
              </p>

              <h4>Sklep z renomowanymi kosmetykami</h4>
              <p>
                Mamy tylko to, co najlepsze. Każdy kosmetyk został przez nas
                osobiście przetestowany i sprawdzony. U nas znajdziesz takie
                marki jak: Shiny Garage, RR Customs, Poorboys World, Nielsen,
                Soft99, Collinite oraz pełną gamę akcesoriów potrzebnych aby
                zadbać o Twój samochód w każdym detalu.
              </p>
            </div>
          </div>

          <div className="grid-wrapper">
            <div className="col-6">
              <h3>Pranie tapicerki samochodowej</h3>
              <p>Nawet w najbardziej zadbanym samochodzie tapicerka z biegiem czasu zmienia kolor i traci swoje właściwości. Fotele robią się ciemniejsze, podsufitka szarzeje, a podłoga wpijająca wilgoć z dywaników zaczyna brzydko pachnieć.<br/>
              Zabrudzenia widać szczególnie w deszczowe dni, kiedy siadamy w samochodzie z mokrymi ubraniami i moczymy materiały. Bez odpowiedniej konserwacji estetyczny wygląd tracą też plastiki i tworzywa użyte do wykończenia kokpitu. Kompleksowe pranie wnętrza samochodu wymaga profesjonalnego sprzętu i profesjonalnych środków, które nie uszkodzą struktury tkanin.<br/>
                            Do prania używamy odkurzacza piorącego Karcher Puzzi wspomaganego parownicą Karcher, metoda prania używana przez nas jest metodą ekstrakcyjną a kosmetyki oraz chemia których używamy cieszą się bardzo dobrą opinią w branży.</p>
                        </div>
                        <div className="col-6">
                            <h3>Mycie detailingowe</h3>
                            <p>Mycie detailingowe ma na celu dokładne oczyszczenie lakieru z ciężkich zabrudzeń.<br/>
                              Obejmuje ono wstępne płukanie, mycie bezdotykowe pianą aktywną, mycie nadkoli oraz felg, deironizację, usunięcie smoły, żywicy, lotnych związków rdzy lub metali z karoserii, dokładne ręczne mycie właściwe przy użyciu pędzelków oraz rękawic mikrofibrowych.<br/>
                              Do mycia detailinowego stosujemy metodę „dwóch wiader” z separatorami brudów, które na bieżąco oddzielają piach i brud innego pochodzenia od wody którą myty jest samochód.<br/>
                              Ta bezpieczna dla lakieru i wieloetapowa usługa wymaga zastosowania odpowiednich kosmetyków, narzędzi oraz techniki które w efekcie końcowym idealnie dbają o lakier Twojego samochodu.<br/>
                              Stosujemy kosmetyki które nie zawierają agresywnych substancji i wydobywają głębię koloru.</p>
                        </div>
                        <div className="col-6">
                            <h3>Czyszczenie i konserwacja skór</h3>
                            <p>Siedzenia w aucie – zwłaszcza fotel kierowcy narażony jest na zużycie związane z wsiadaniem / wysiadaniem a co za tym idzie ciągłym pocieraniem odzieżą o materiał/skórę. Takie zużycie jest naturalną sprawą i objawia się tym, że skóra jest sucha oraz wypłowiała. Niejednokrotnie widać na niej zagięcia i delikatne mikropęknięcia – głównie w pobliżu miejsc zszycia, co widać na poniższym zdjęciu.<br/>
                            W naszym salonie siedzeniom poświęcamy szczególną uwagę. Proces jest czasochłonny lecz przyjemny i dający efekty szybciej aniżeli pranie. Do całego procesu czyszczenia i konserwacji skór jest potrzebne stosunkowo niewiele rzeczy:<br/><br/>
                            <ul>
                              <li>środek czyszczący</li>
                              <li>środek konserwujący</li>
                              <li>szczoteczka do trudnodostępnych miejsc</li>
                              <li>mikrofibry</li>
                              <li>oraz doza cierpliwości</li>
                              </ul>
                              Aby prawidłowo zadbać o skórę należy regularnie stosować odpowiednie preparaty czyszczące i konserwujące, wydłuży to jej żywotność oraz nada estetycznego wyglądu.</p>
                              </div>

                              <div className="col-6">
                            <h3>Czyszczenie i konserwacja plastików</h3>
                            <p>Proces ten jest bardzo żmudny i powolny ze względu na nieregularny kształt wnętrza, oraz liczne zakamarki, jeżeli zastanawiałeś się czemu Twoje plastiki wyglądają matowo – to odpowiedź zapewne leży w zabrudzeniach jakie się osadziły w fakturze materiału. Do tego procesu potrzebny jest środek typu APC, szczoteczka, mikrofibry.</p>
                            <p>Z biegiem czasu większość elementów plastikowych starzeje się i płowieje. Nic w tym dziwnego, ponieważ plastiki znajdujące się we wnętrzu samochodu narażone są na oddzieływanie promieni UV.  Ponadto elementy ze strukturą z łatwością „wciągają” każdy brud.</p>
                            <p>Jesteśmy w stanie odświeżyć wygląd nawet najbardziej zabrudzonych i starych plastików.</p>
                        </div>

                        <div className="col-6">
                            <h3>Bezpieczne mycie ręczne</h3>
                            <p>Każdy z nas to robił przynajmniej kilka razy w życiu – z pasji, nudy lub konieczności.</p>
                            <p>Nasze mycie różni się od standardowego (przy użyciu szlaufa) tym, że my wykorzystujemy aktywną pianę a dodatkowo w procesie deironizacji jesteśmy w stanie usunąć cząsteczki metaliczne z waszego lakieru, przy pomocy glinki dogłębnie oczyszczamy lakier lub inne powierzchnie z takich zabrudzeń jak sadza, żywica, resztki owadów, drobiny asfaltu, pył z klocków hamulcowych, a nawet naloty rdzy.</p>
                        </div>

                        <div className="col-6">
                            <h3>Mycie komory silnika</h3>
                            <p>Silnik samochodu niestety szybko i łatwo się brudzi. Tymczasem zazwyczaj dbamy o czystość karoserii i wnętrza.</p>
                            <p>Czy słusznie? To prawda, że silnikowi wszystko jedno, czy jest brudny czy nie. Od stopnia zabrudzenia na pewno nie zależy jego działanie. W czym zatem takie mycie może pomóc? Przede wszystkim w diagnostyce nieprawidłowości oraz gdy <strong>chcesz przygotować swój samochód do sprzedaży</strong> – klienci przede wszystkim kupują oczami a czysty i błyszczący silnik zawsze przyciągnie jednego lub dwóch zainteresowanych więcej.</p>
                            <p>Proces wymaga odpowiedniego zabezpieczenia przewodów elektrycznych oraz filtrów powietrza.</p>
                        </div>

                        <div className="col-6">
                            <h3>Korekta lakieru</h3>
                            <p>Korekta lakieru ma na celu usunięcie hologramów, kolistych zarysowań, prostych zarysowań, przywrócenie blasku oraz nadanie efektu lustra.</p>
                            <p>Rodzaje korekt:</p>
                            <p>Jednoetapowa – one step – usuwa około 70 % + do 80% lustra
                            <br />wieloetapowa – usuwa do 100% rys</p>
                            <p><strong>WSZYSTKO ZALEŻY OD GŁĘBOKOŚCI RYS ORAZ RODZAJU LAKIERU</strong></p>
                            <p>Polerowanie przywraca fabryczny połysk oraz kolor lakieru, niweluje rysy i drobne powierzchniowe uszkodzenia powłoki. Jest to operacja bezpieczna pod warunkiem odpowiedniego doboru środków i przestrzegania podstawowych środków ostrożności.</p>
                            <p>O tym, jakie polerowanie jest wskazane w danym przypadku, decyduje stan lakieru – przede wszystkim głębokość rys i innych powierzchniowych uszkodzeń.</p>
                            <p>My do tego procesu używamy past polerskich Menzerna i/lub Koch, maszyny polerującej Dual Action i Rotacja oraz odpowiednich padów polerskich które dobieramy indywidualnie w zależności od stanu lakieru.</p>
                        </div>

                        <div className="col-6">
                            <h3>Ochrona lakieru</h3>
                            <p>Warto zadbać zadbać o ochronę lakieru Waszego samochodu, szyb oraz felg poprzez aplikację odpowiednich środków.</p>
                            <p>Na lakier i felgi samochodu możemy zaaplikować:</p>
                            <ul>
                              <li>wosk</li>
                              <li>powłokę polimerową</li>
                              <li>powłokę kwarcową</li>
                              <li>powłokę ceramiczną</li>
                            </ul>
                            <p>Na szyby polecamy stosowanie niewidzialne wycieraczki – świetnie się sprawuję w okresach z opadami deszczu.</p>
                        </div>

                        </div>
          <div className="grid-wrapper backgroundNas">
            <div className="col-2"></div>
            <div className="col-8">
              <h3>Masz więcej pytań?</h3>
              <h3><strong>Chcesz się umówić na wizytę?</strong></h3>
              <div style={{padding:`20px`}}><a href="tel:+48 883 268 952" className="button special">+48 883 268 952</a></div>
              <div style={{padding:`20px`}}><a href="#contact" className="button special">Napisz do nas</a></div>
              
              
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ONas
