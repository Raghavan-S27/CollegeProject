import React from 'react';
import '../CSSFolder/home.css'
const Hero = () => {
    return (
        <section id="Title">
            <div className="container col-xxl-8 px-4 pt-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="./images/iphone.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                             height="200"
                             loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Your Personal Health Companion</h1>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">

                                Get Started
                            </button>
                            <button type="button" className="btn btn-outline-dark btn-lg px-4">

                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </section>
    );
};

export default Hero;