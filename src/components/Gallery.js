import React from 'react'

import mercedes02 from '../assets/images/mercedes/mercedes-2.jpg'
import mercedes03 from '../assets/images/mercedes/mercedes-3.jpg'
import mercedes04 from '../assets/images/mercedes/mercedes-4.jpg'
import mercedes05 from '../assets/images/mercedes/mercedes-5.jpg'
import mercedes06 from '../assets/images/mercedes/mercedes-6.jpg'
import mercedes07 from '../assets/images/mercedes/mercedes-7.jpg'
import mercedes08 from '../assets/images/mercedes/mercedes-8.jpg'
import mercedes09 from '../assets/images/mercedes/mercedes-9.jpg'
import mercedes10 from '../assets/images/mercedes/mercedes-10.jpg'
import mercedes11 from '../assets/images/mercedes/mercedes-11.jpg'

import kia1 from '../assets/images/kia/kia-1.jpg'
import kia2 from '../assets/images/kia/kia-2.jpg'
import kia3 from '../assets/images/kia/kia-3.jpg'
import kia5 from '../assets/images/kia/kia-5.jpg'
import kia7 from '../assets/images/kia/kia-7.jpg'

import bmw1 from '../assets/images/bmw/bmw-1.jpg'
import bmw5 from '../assets/images/bmw/bmw-5.jpg'
import bmw6 from '../assets/images/bmw/bmw-6.jpg'

import bmw7 from '../assets/images/bmw/bmw-7.jpg'
import bmw4 from '../assets/images/bmw/bmw-4.jpg'
import bmw3 from '../assets/images/bmw/bmw-3.jpg'
import bmw2 from '../assets/images/bmw/bmw-2.jpg'

import audi4 from '../assets/images/audi/audi-4.jpg'
import audi5 from '../assets/images/audi/audi-5.png'
import audi6 from '../assets/images/audi/audi-6.jpg'
import audi7 from '../assets/images/audi/audi-7.jpg'
import audi8 from '../assets/images/audi/audi-8.jpg'
import audi9 from '../assets/images/audi/audi-9.jpg'
import audi10 from '../assets/images/audi/audi-10.jpg'
import audi11 from '../assets/images/audi/audi-11.jpg'
import audi12 from '../assets/images/audi/audi-12.jpg'

import skoda1 from '../assets/images/skoda/skoda-1.jpg'
import skoda2 from '../assets/images/skoda/skoda-2.jpg'
import skoda3 from '../assets/images/skoda/skoda-3.jpg'

import audia71 from '../assets/images/audi-a7/audi-01.jpg'
import audia72 from '../assets/images/audi-a7/audi-02.jpg'
import audia73 from '../assets/images/audi-a7/audi-03.jpg'
import audia74 from '../assets/images/audi-a7/audi-04.jpg'
import audia75 from '../assets/images/audi-a7/audi-05.jpg'

import toyota2 from '../assets/images/toyota/toyota-2.jpg'
import toyota3 from '../assets/images/toyota/toyota-3.jpg'
import toyota4 from '../assets/images/toyota/toyota-4.jpg'
import toyota5 from '../assets/images/toyota/toyota-5.jpg'
import toyota6 from '../assets/images/toyota/toyota-6.jpg'
import toyota7 from '../assets/images/toyota/toyota-7.jpg'

import leon1 from '../assets/images/leon-powłoka/leon-1.jpg'
import leon2 from '../assets/images/leon-powłoka/leon-2.jpg'
import leon3 from '../assets/images/leon-powłoka/leon-3.jpg'
import leon4 from '../assets/images/leon-powłoka/leon-4.jpg'

import audiblue2 from '../assets/images/audi-a7-blue/audi-blue-2.jpg'
import audiblue3 from '../assets/images/audi-a7-blue/audi-blue-3.jpg'
import audiblue4 from '../assets/images/audi-a7-blue/audi-blue-4.jpg'
import audiblue5 from '../assets/images/audi-a7-blue/audi-blue-5.jpg'
import audiblue6 from '../assets/images/audi-a7-blue/audi-blue-6.jpg'
import audiblue7 from '../assets/images/audi-a7-blue/audi-blue-7.jpg'
import audiblue8 from '../assets/images/audi-a7-blue/audi-blue-8.jpg'
import audiblue9 from '../assets/images/audi-a7-blue/audi-blue-9.jpg'
import audiblue10 from '../assets/images/audi-a7-blue/audi-blue-10.jpg'

import audiwhite1 from '../assets/images/audiwhite/audi-white-1.jpg'
import audiwhite2 from '../assets/images/audiwhite/audi-white-2.jpg'
import audiwhite3 from '../assets/images/audiwhite/audi-white-3.jpg'
import audiwhite6 from '../assets/images/audiwhite/audi-white-6.jpg'
import audiwhite7 from '../assets/images/audiwhite/audi-white-7.jpg'
import audiwhite8 from '../assets/images/audiwhite/audi-white-8.jpg'
import audiwhite9 from '../assets/images/audiwhite/audi-white-9.jpg'
import audiwhite10 from '../assets/images/audiwhite/audi-white-10.jpg'
import audiwhite11 from '../assets/images/audiwhite/audi-white-11.jpg'
import audiwhite12 from '../assets/images/audiwhite/audi-white-12.jpg'

import volvo1 from '../assets/images/volvo/volvo-1.jpg'
import volvo2 from '../assets/images/volvo/volvo-2.jpg'
import volvo3 from '../assets/images/volvo/volvo-3.jpg'
import volvo4 from '../assets/images/volvo/volvo-4.jpg'
import volvo5 from '../assets/images/volvo/volvo-5.jpg'
import volvo6 from '../assets/images/volvo/volvo-6.jpg'
import volvo7 from '../assets/images/volvo/volvo-7.jpg'

import kiaceed1 from '../assets/images/kiaceed/kia-ceed-1.jpg'
import kiaceed2 from '../assets/images/kiaceed/kia-ceed-2.jpg'
import kiaceed3 from '../assets/images/kiaceed/kia-ceed-3.jpg'
import kiaceed4 from '../assets/images/kiaceed/kia-ceed-4.jpg'
import kiaceed5 from '../assets/images/kiaceed/kia-ceed-5.jpg'
import kiaceed6 from '../assets/images/kiaceed/kia-ceed-6.jpg'
import kiaceed7 from '../assets/images/kiaceed/kia-ceed-7.jpg'


const Galeria = props => (
  <div id="main" className="alt">
        
    <section id="one">

    <div className="inner">
        <h3>Audi A7</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={audiwhite1} alt="" />
                <div className="main-photo-inner">
                  
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={audiwhite2} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiwhite3} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiwhite6} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiwhite7} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiwhite8} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiwhite9} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiwhite10} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiwhite11} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiwhite12} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner">
        <h3>Kia Ceed</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={kiaceed1} alt="" />
                <div className="main-photo-inner">
                  
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={kiaceed2} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={kiaceed3} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={kiaceed4} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={kiaceed5} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={kiaceed6} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={kiaceed7} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner">
        <h3>Volvo S80</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={volvo1} alt="" />
                <div className="main-photo-inner">
                  
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={volvo2} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={volvo3} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={volvo4} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={volvo5} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={volvo6} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={volvo7} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="inner">
        <h3>Audi A7</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={audiblue6} alt="" />
                <div className="main-photo-inner">
                  
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={audiblue2} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiblue3} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiblue4} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiblue5} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiblue6} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiblue7} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiblue8} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiblue9} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audiblue10} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className="inner">
        <h3>Seat Leon</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={leon1} alt="" />
                <div className="main-photo-inner">
                  
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-6">
                <span className="image fit">
                  <img src={leon2} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={leon1} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={leon3} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={leon4} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className="inner">
        <h3>Audi A7</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={audia71} alt="" />
                <div className="main-photo-inner">
                  Audi A7 przyjechało do nas na pełen detailing detailing zewnętrzny i wewnętrzny, kompleksowe czyszczenie wnętrza oraz korektę lakieru.
                  <br/>
                  Na szyby niewidzialna wycieraczka a podłogi zabezpieczone preparatem przeciw nasiąkaniu wilgocią.
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-6">
                <span className="image fit">
                  <img src={audia72} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={audia75} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={audia74} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={audia73} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className="inner">
        <h3>Skoda Superb</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={skoda1} alt="" />
                <div className="main-photo-inner">
                  Dzięki woskowaniu samochód jest znacznie bardziej odporny na różnego typu zabrudzenia.<br/>
                  Odpowiednio dobrany wosk tworzy warstwę ochronną, ale także podbija kolor i blask lakieru. <br/>
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-6">
                <span className="image fit">
                  <img src={skoda2} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={skoda1} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={skoda3} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="inner">
        <h3>Mercedes S Klasa</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={mercedes07} alt="" />
                <div className="main-photo-inner">
                  Dwu-etapowa Korekta Lakieru
                  <br />
                  Powłoka Ceramiczna Gtechniq C1
                  <br />
                  Pełen Detailing Wewnętrzny
                  <br />
                  Powłoka Kwarcowa Na Skóry Gyeon
                  <br />
                  Powłoka Ceramiczna Na Felgi Gtechniq C5
                  <br />
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={mercedes02} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={mercedes03} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={mercedes04} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={mercedes05} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={mercedes06} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={mercedes11} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={mercedes08} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={mercedes09} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={mercedes10} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner">
        <h3>Audi Q7</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={audi5} alt="" />
                <div className="main-photo-inner">
                Powłoka Ceramiczna na lakierze Gtechniq C1 (trwałość 3-5 Lat)
                <br/>
                Wstępne mycie pojazdu, opłukanie z zabrudzeń, mycie przy użyciu aktywnej piany, glinkowanie, usunięcie smoły, żywicy, metalicznych osadów, mycie właściwe
                <br/>
                Odtłuszczenie powierzchni i wieloetapowa korekta lakieru oraz aplikacja powłoki ochronnej na lakier I felg
                <br/>
                Powłoka ceramiczna felg Gtechniq C5
                <br/>
                Aplikacja powłoki ceramicznej Gyeon
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={audi4} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audi5} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audi6} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audi7} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audi8} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audi9} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audi10} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audi11} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={audi12} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner">
        <h3>Kia</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={kia5} alt="" />
                <div className="main-photo-inner">
                  
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-6">
                <span className="image fit">
                  <img src={kia1} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={kia2} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={kia3} alt="" />
                </span>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={kia7} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner">
        <h3>Toyota Avensis</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={toyota2} alt="" />
                <div className="main-photo-inner">
                  
                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={toyota2} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={toyota3} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={toyota4} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={toyota5} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={toyota6} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={toyota7} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="inner">
        <h3>BMW</h3>
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <div className="main-photo-outter">
                <img className="main-photo-img" src={bmw5} alt="" />
                <div className="main-photo-inner">

                </div>
              </div>
            </span>
          </div>

          <div className="col-6">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <img src={bmw1} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={bmw6} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={bmw7} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={bmw2} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={bmw3} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={bmw4} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Galeria
