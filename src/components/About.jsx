import React from 'react';
import './About.css';
import image1 from '/src/assets/about.jpg'; 
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 position-relative">
          <img src={image1} alt="Your Alt Text" className="img-fluid fix-img max-height-300 w-100"/>
          <div className="text-white quotes position-absolute end-0 translate-middle-y col-7 p-5">
          Discover the essence of our journey – where passion meets purpose, and stories unfold in every pixel.          </div>
        </div>
      </div>
      <div className="text-white">
        <div className="display-6 mt-5 mb-3 text-justify ">About Us</div>
        <p className="ml-4 text-justify">
          <span className="ms-5">MixShield</span> is an innovative online platform that revolutionizes the way you approach building construction!
          It offers a unique mix design calculator that not only tailors concrete formulations based on your specific project
          requirements but also provides crucial insights into the potential corrosion rate of the building over time.
          Say goodbye to uncertainties and hello to a more informed, durable construction process.
        </p>
      </div>

      <div className="text-white">
        <div className="display-6 mt-5 mb-3 text-justify ">Why Choose Us</div>
        <div className="ms-5">
        <p className="ml-4 text-justify">
        1. Quality Assurance: Rigorous testing and quality control ensure that our mix designs 
        meet and exceed industry standards.</p>
        <p className="ml-4 text-justify">
        2. Innovation in Formulas: Stay at the forefront of construction technology with 
        our constantly evolving mix design formulations.</p>      
        <p className="ml-4 text-justify">
        3. Advanced Corrosion Detection: Our commitment to your project's durability 
        includes state-of-the-art corrosion rate detection to identify and address 
        potential issues before they escalate.
        </p>
        </div>
      </div>

      <div className="text-white">
        <div className="display-6 mt-5 mb-3 text-justify ">Our Mission</div>
        At MixShield, we are driven by a mission to revolutionize construction practices. 
        We aim to:
        <div className="ms-5">
        <p className="ml-4 text-justify mt-3">
        1.Elevate the standards of mix designs, providing solutions that not only 
        meet but exceed the demands of modern construction.
        Lead the fight against corrosion, safeguarding structures for generations to come.
        Embrace sustainability, integrating eco-friendly practices into both mix 
        designs and corrosion prevention strategies.</p>
        <p className="ml-4 text-justify">
        Our Values<br/>
        1. Excellence:
        We are dedicated to delivering excellence in every aspect of our work. 
        From meticulous mix designs to cutting-edge corrosion detection, 
        we strive for the highest standards.</p>      
        <p className="ml-4 text-justify">
        2. Innovation:
        Innovation is the heartbeat of MixShield. We continuously 
        explore new technologies and methodologies to stay ahead in 
        the dynamic fields of construction and infrastructure.
        </p>
        <p className="ml-4 text-justify">
        3. Sustainability:
        Mindful of our environmental impact, we are committed to 
        incorporating sustainable practices into our mix designs and 
        corrosion prevention strategies. We believe in building a future 
        that respects both nature and engineering.
        </p>
        
        </div>
      </div>
      

      <div className="text-white">
        <div className="display-6 mt-5 mb-3 text-justify ">Join Us on the Journey</div>
        <div className="ms-5">
        <p className="ml-4 text-justify">
        Whether you are a builder, engineer, or stakeholder in infrastructure development, 
        join us on this journey of redefining construction norms. At MIxShield, we are 
        not just building structures; we are building a legacy of durability, innovation, 
        and environmental responsibility.</p>
        
        </div>
      </div>
      </div>

      {/* footer */}
      <div className="container-fluid bg-dark text-center mt-5 text-white">
      <div className="mt-5 pt-3 pb-3">
        <Link to = "/home" className="text-white text-fix mt-5">MixShield</Link>
        <p>We extend our services across</p>
        <pre>Perambalur | Karur | Coimbatore</pre>
        Copyright © 2024
        </div>
    </div>
    </div>
  );
}


export default About;