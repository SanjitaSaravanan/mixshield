import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import the EmailJS library
import './Contact.css';

function Feedback() {
  const questions = {
    question1: "How satisfied are you with service?",
    question2: "How satisfied are you with the support provided by our team?",
    question3: "How would you rate the availability of our support team?",
    question4: "How likely are you to recommend our support services to others?",
    question5: "How likely are you to contact our support team again in the future?"
  };
  const [ratings, setRatings] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0
  });

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Log form data
    const formData = new FormData(event.target);
    console.log("Form data:", Object.fromEntries(formData));

    // Send the email using EmailJS
    emailjs.sendForm('service_xclyp8l', 'template_hbvda7d', event.target, 'JvKRusE-p-kZ97NRb')
    .then((result) => {
        console.log('Email sent successfully:', result);
        // Optionally, display a success message to the user
        alert('Thank you for your feedback!');
        window.location.href = "/";
      }, (error) => {
        console.error('Email sending failed:', error);
        // Optionally, display an error message to the user
        alert('Oops! Something went wrong.');
      });
  }

  // Function to handle rating change
  function handleRatingChange(question, rating) {
    setRatings(prevState => ({
      ...prevState,
      [question]: rating
    }));
  }

  // Function to render radio inputs for a question
  function renderRadioInputs(question) {
    return (
      <div className="questions" key={question}>
        <label htmlFor={question}>{questions[question]}</label><br />
        {/* Radio inputs for the question */}
        <div className="rating-options">
          {[1, 2, 3, 4, 5].map((value) => (
            <div key={`${question}_star${value}`} className="form-check form-check-inline">
              <input type="radio" id={`${question}_star${value}`} name={question} value={value} className="form-check-input" onChange={() => handleRatingChange(question, value)} required/>
              <label htmlFor={`${question}_star${value}`} className="form-check-label">{value}</label>
            </div>
          ))}
        </div>
        {question === "question5" &&
        <div className="additional-comments py-4">
          <label htmlFor="additionalComments">Please tell us if you have additional comments:</label><br />
          <br />
          <textarea id="additionalComments" name="additionalComments" rows="3" style={{ width: '100%' }}></textarea>
        </div>
      }
    </div>
  );
}

  return (
    <div>
      <div className="container-fluid py-4 m-0">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white p-5">
            <form id="feedbackForm" onSubmit={handleSubmit}>
              <div className="text-center">FEEDBACK</div>
              {/* Render radio inputs for each question */}
              {Object.keys(questions).map((question) => (
                renderRadioInputs(question)
              ))}
              <div className="text-center">
                <input type="submit" value="Submit" className="clr-btn btn btn-primary"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
