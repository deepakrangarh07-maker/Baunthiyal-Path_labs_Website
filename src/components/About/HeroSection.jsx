
import "../../styles/About/HeroSection.css";

import {
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

import HeroImage from "../../assets/about/about-hero.png";

import NABLLogo from "../../assets/nabl.png";
import NABHLogo from "../../assets/nabh.png";
import ISOLogo from "../../assets/ISO_9001-2015.svg";

function HeroSection() {
  return (
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="about-hero-overlay"></div>

      <div className="about-container about-hero-container">

        <div className="about-hero-content">

          <span className="about-hero-tag">
            TRUSTED DIAGNOSTIC CENTRE
          </span>

          <h1>
            About <span>Baunthiyal Path Labs</span>
          </h1>

          <p>
            Accurate diagnostics, advanced technology and
            compassionate healthcare for better health decisions.
          </p>

          <div className="about-hero-actions">

            <button className="about-primary-btn">
              Book Appointment
              <FaArrowRight />
            </button>

            <button className="about-secondary-btn">
              <FaPhoneAlt />
              Contact Us
            </button>

          </div>

        </div>


        {/* QUALITY BADGES */}

        <div className="about-quality-badges">

          <div className="about-quality-badge">
            <img src={NABLLogo} alt="NABL" />

            <div>
              <strong>NABL</strong>
              <span>Quality</span>
            </div>
          </div>

          <div className="about-quality-badge">
            <img src={NABHLogo} alt="NABH" />

            <div>
              <strong>NABH</strong>
              <span>Healthcare</span>
            </div>
          </div>

          <div className="about-quality-badge">
            <img src={ISOLogo} alt="ISO 9001" />

            <div>
              <strong>ISO 9001</strong>
              <span>Certified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
