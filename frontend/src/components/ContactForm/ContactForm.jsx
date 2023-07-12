import React from 'react'

import "./ContactForm.css"

function ContactForm() {
  return (
    <div className='from-container'>
        <h1>Trimite-ne un mesaj</h1>

        <form>
            <input placeholder='Name' />
            <input placeholder='Email' />
            <input placeholder='Subject' />
            <textarea placeholder='Message' rows='4'></textarea>
            <button>Trimite</button>
        </form>

    </div>
  )
}

export default ContactForm