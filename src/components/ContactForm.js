import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <section id="#contact">
      <div className="inner">
      <form
        name="contact"
        method="POST"
        action="/thankyou"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div className="field half first">
          <label>
            Imię
            </label>
            <input type="text" name="name" placeholder="Twoje Imię" onChange={handleChange} required/>
         
        </div>
        <div className="field half">
          <label>
            Twój email
            </label>
            <input type="email" name="email" placeholder="example@name.com" onChange={handleChange} required />
          
        </div>
        <p>
          <label>
          W czym możemy pomóc?
          </label>
            <textarea id="message" name="message" rows="10" placeholder="Prosimy opisz w jaki sposób możemy pomóc, jeśli chcesz abyśmy oddzwonili podaj tutaj numer telefonu." onChange={handleChange} required/>
        </p>
        <ul className="actions">
          <li><input className="special" type="submit" value="Wyślij"></input></li>
          <li><input type="reset" value="Wyczyść"></input></li>
        </ul>
      </form>
      </div>
    </section>
  )
}