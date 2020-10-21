import React from 'react'
import ContactForm from './ContactForm'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">

            <ContactForm />

            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope-open-o"></span>
                        <h3>Umów się na wizytę</h3>
                        <a href="mailto:adrian@strefadetailingu.com">adrian@strefadetailingu.com</a><br/>
                        <a href ="tel:+48883268952">+48 883 268 952</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-map-marker"></span>
                        <h3>Gdzie jesteśmy?</h3>
                        <a href="https://www.google.com/maps/dir//Szkotnik+37,+33-100+Tarn%C3%B3w,+Polska/">
                        <span>Salon Kosmetyki Samochodowej<br />
                        ul. Szkotnik 37<br />
                        33-100 Tarnów</span>
                        </a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-map-marker"></span>
                        <h3>Godziny otwarcia</h3>
                        Poniedziałek - Piątek
                        <p>08:00 - 18:00</p>
                        Sobota
                        <p>09:00 - 14:00</p>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
