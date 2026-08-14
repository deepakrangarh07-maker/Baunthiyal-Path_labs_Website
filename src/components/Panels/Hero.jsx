import "../../styles/Panels/Hero.css";
import HeroImage from "../../assets/panels/panel-hero.png";

import {
	FaCheckCircle,
	FaArrowRight,
	FaHandshake,
	FaShieldAlt,
} from "react-icons/fa";

function Hero() {
	const handleBecomePartner = () => {
		const subject = "Request to Open an Authorised Blood Collection Centre";
		const body = `Dear Baunthiyal Path Labs & Imaging Centre Team,
		  I am interested in opening an Authorised Blood Collection Centre in association with Baunthiyal Path Labs & Imaging Centre.
		  I would like to discuss the requirements, eligibility criteria, infrastructure requirements, documentation, investment, and process for becoming an authorised blood collection centre. 
		  Please share the necessary details and guide me through the next steps. 
		  My details: Name: 
		  Organisation / Company: 
		  Location: 
		  Contact Number: 
		  Email Address: 
		  I look forward to hearing from you. 
		  Regards, 
		  [Your Name]`;
		window.location.href = `mailto:care@baunthiyallabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	};
	return (
		<section className="panel-hero">
			<div className="container">
				<div className="hero-grid">
					{/* LEFT */}

					<div className="hero-content">
						<span className="hero-tag">Trusted Healthcare Partner</span>

						<h1>
							Corporate & Government
							<span> Diagnostic Panels</span>
						</h1>

						<p>
							Baunthiyal Path Labs & Imaging Centre partners with Government
							Organizations, Corporate Offices, Hospitals, Schools, Colleges and
							Insurance Companies to provide reliable pathology and radiology
							services.
						</p>

						<ul className="hero-list">
							<li>
								<FaCheckCircle />
								CGHS Empanelment
							</li>

							<li>
								<FaCheckCircle />
								Authorised Collection Centre
							</li>

							<li>
								<FaCheckCircle />
								Hospital Partnerships
							</li>

							<li>
								<FaCheckCircle />
								Insurance (TPA) Services
							</li>
						</ul>

						<div className="hero-buttons">
							<button className="primary-btn" onClick={handleBecomePartner}>
								Become a Partner
								<FaArrowRight />
							</button>

							<a href="tel:+919876543210" className="secondary-btn">
								<FaHandshake />
								Contact Us
							</a>
						</div>
					</div>

					{/* RIGHT */}

					<div className="hero-image">
						<div className="hero-badge">
							<FaShieldAlt />
							Trusted Healthcare Partner
						</div>

						<img src={HeroImage} alt="Corporate Diagnostic Partnership" />

						<div className="hero-card">
							<h4>100+ Partner Organizations</h4>

							<p>Government • Corporate • Hospital • Insurance</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
