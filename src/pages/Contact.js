import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h1>Get In Touch With Us</h1>
            <form>
                <input type='text' placeholder='Full Name' />
                <input type='email' placeholder='Type your E-mail' />
                <textarea placeholder='Write Here...'></textarea>
                <input type='submit' value='Send Message' />
            </form>
        </div>
    )
}

export default Contact;