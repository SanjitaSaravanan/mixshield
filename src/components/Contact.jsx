import React from 'react';
import Navbar from './Navbar';
import './Contact.css'; // Import a separate CSS file for styling
import emailjs from 'emailjs-com';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formElement = event.target.closest('form');
    if (formElement instanceof HTMLFormElement) {
      const formData = new FormData(formElement);
  
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const message = formData.get("message");
  
      emailjs.sendForm('service_xclyp8l', 'template_5px142i', formElement, 'JvKRusE-p-kZ97NRb',{ email }, {fullName},{message})
        .then((result) => {
          console.log(formData);
          emailjs.sendForm('service_sprxhui', 'template_ypqez6w', formElement, 'Nsp0dZwRIknVLgjaR', {fullName},{message})
          .then(alert('Message sent successfully!'));
        }, (error) => {
          console.log(error.text);
          alert('An error occurred while sending the message. Please try again later.');
        });
    } else {
      console.error('Event target is not a form element');
    }
  };
  
  return (
    <div>
      <div className="container text-white contact-container">
        <div className="overlay"></div>
        <div className="text-content">
          <h6 className="display-6 text-center pt-5 p-2">Contact Us</h6>
          <div className="text-center">In a world full of choices, we value the choice you make to connect with us. Reach out, and let's make it count.</div>
          <div className="row pt-5">
            <div className="col-6">
              <div className="row">
                <div className="col-1 display-6 pt-4 ps-4 align-items-center d-flex justify-content-center">⟟</div>

                <div className="col-9 pt-4 ps-5">Address <br/>CPC Towers, Thadagam main road, RS Puram, Coimbatore - 641002 </div>
              </div>
              <div className="row">
                <div className="col-1 display-6 pt-4 ps-4">✉️</div>
                <div className="col-9 pt-4 ps-5">For Contact <br/>mixshieldx@gmail.com<br/>sanjitasaravanan16@gmail.com </div>
              </div>
            </div>
            <div className="col-5 p-4 container bg-fix text-center">
              <form>
                <div className="mb-3">
                  <div className="text-center pt-3 p-2 text-fix ">Send Message</div>
                  <input type="text" className="form-control bg-fix" id="fullName" name="fullName" placeholder="Full Name " required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control bg-fix fix-bg" id="email" name="email" placeholder="Email" required/>
                </div>
                <div className="mb-3">
                  <textarea className="form-control bg-fix" id="message" name="message" rows="4" placeholder="Type Your Message Here" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary clr-btn" onClick={handleSubmit}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
