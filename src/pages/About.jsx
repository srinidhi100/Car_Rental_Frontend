import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                At ZoomCar, we are committed to providing safe and reliable ride solutions for every journey. Our fleet undergoes regular maintenance and sanitization, ensuring that every vehicle is in top condition before it reaches you. With 24/7 roadside assistance, GPS tracking, and real-time support, we prioritize your safety at every step. Our self-drive model eliminates driver dependency, giving you privacy and control over your ride while maintaining strict safety protocols. Whether you're traveling for work, leisure, or daily commutes, ZoomCar ensures a smooth, secure, and stress-free experience, so you can focus on enjoying the journey with complete peace of mind.
                </p>

                <p className="section__description">
                At ZoomCar, safety is our top priority. We ensure that all our vehicles are thoroughly inspected and sanitized for your protection before each rental. With real-time tracking, round-the-clock assistance, and stringent safety checks, we aim to offer you a secure and comfortable ride every time. Our commitment to safety allows you to travel with confidence, knowing that your well-being is in good hands throughout your journey.








                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+91 8055784657</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
