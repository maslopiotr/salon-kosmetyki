import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section id="#contact">
                <form method="post" action="#" data-netlify="true">
                    <div className="field half first">
                        <label htmlFor="name">Imię</label>
                        <input type="text" name="name" id="name" placeholder="Twoje Imię" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Twój Email</label>
                        <input type="text" name="email" id="email" placeholder="example@name.com"/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">W czym możemy pomóc?</label>
                        <textarea name="message" id="message" rows="10" placeholder="Prosimy opisz w jaki sposób możemy pomóc, jeśli chcesz abyśmy oddzwonili podaj tutaj numer telefonu."></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Wyślij" className="special" /></li>
                        <li><input type="reset" value="Wyczyść" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope-open-o"></span>
                        <h3>Umów się na wizytę</h3>
                        <a href="mailto:salon@gmail.com">salon.tarnow@hotmail.com</a><br/>
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
