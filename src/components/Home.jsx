// Home.js
import React, { useState, useEffect } from 'react';
import image1 from '/src/assets/construction.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlipped((prevFlipped) => !prevFlipped);
    }, 5000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 image-div ">
            <img src={image1} alt="Your Alt Text" className="img-fluid" />
            <div className="image-text d-flex align-items-end">
               <div className="col-md-12">
                    <div className="row">The Future of</div>
                    <div className="row">Innovation Is Here</div>
                    <div className="row small-text">ENGINEERING TOMORROW'S WORLD.
                    <br />
                    <Link to="/detector" className="col-4 p-2 mt-3 button-fix text-white text-center">Go To Detector</Link> 
                    <br/>
                    <Link to="/detector" className="col-4 p-2 mt-3 ms-5 text-white text-center bg-fix1">Get Mix Design</Link>                  
                 
                    </div>
                </div> 
            </div>
            </div>
        </div>
        <div className="text-white mt-5">
        Empowering Construction Professionals to Achieve Unparalleled Durability and Performance !!!<br/>
        <div className="mt-5 text-justify">
        Explore a comprehensive range of meticulously crafted concrete and asphalt mix designs engineered 
        to deliver unmatched durability, strength, and performance. 
        What sets us apart is our integrated approach to construction — not only do we provide superior
         mix designs, but we also incorporate advanced corrosion rate detection technologies.
          Ensure the longevity of your projects with solutions designed to resist corrosion effectively.
        </div>
        <div className="mt-3">
        Discover our mix designs and corrosion detection → <span className="me-4"> <Link to="/detector">Get Mix Design</Link></span> <span> <Link to="/detector">Get Corrosion Rate</Link></span> .
        </div>
        <div className="service-container">
          <div className="mt-5"> <span className="display-6">Our Services</span>
              <div className="mt-2">
                  Explore a comprehensive suite of services designed to elevate your construction projects to new heights:
              </div>
          </div>
        </div>
        <div className="text-white mt-5">
            <div className="service-container d-flex">
                    <div className={`service ${isFlipped ? 'flipped' : ''}`} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
                        <div className="card-front">
                            <img src="./src/assets/mixdesign.jpg" alt="Concrete Mix Designs" className="img-fix" />
                        </div>
                        <div className="card-back">
                          <div>
                            <h3>Concrete Mix Designs</h3>
                            <p>
                              Discover our innovative concrete mix designs tailored to meet the specific requirements of your construction projects. We prioritize durability, strength, and performance.
                            </p>
                          </div>
                        </div>
                    </div>

                    <div className={`service ${isFlipped ? 'flipped' : ''}`} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
                      <div className="card-front">
                        <img src="./src/assets/advanced.jpg" alt="Advanced Technologies" className="img-fix" />
                      </div>
                      <div className="card-back">
                        <div>
                          <h3>Advanced Technologies</h3>
                          <p>
                            Explore the latest advanced technologies that drive innovation in our projects. We leverage cutting-edge solutions to ensure efficiency and excellence.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`service ${isFlipped ? 'flipped' : ''}`} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
                      <div className="card-front">
                        <img src="./src/assets/custom.jpg" alt="Custom Solutions" className="img-fix" />
                      </div>
                      <div className="card-back">
                        <div>
                          <h3>Custom Solutions</h3>
                          <p>
                            Tailor-made solutions designed to meet your unique requirements. We collaborate with you to create customized strategies that align with your goals.
                          </p>
                        </div>
                      </div>
                    </div>
            </div>
        </div>
      </div>
    </div>
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

export default Home;
