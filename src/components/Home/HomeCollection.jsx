import "../../styles/Home/HomeCollection.css";

import {
	FaArrowRight,
	FaCheck,
	FaClock,
	FaFlask,
	FaHome,
	FaShieldAlt,
	FaUserMd,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaCalendarCheck,
	FaFileMedical,
} from "react-icons/fa";

function HomeCollection() {
	return (
		<section className="home-collection-section">
			<div className="home-collection-container">
				{/* =================================================
				    LEFT CONTENT
				================================================= */}

				<div className="home-collection-content">
					<div className="home-collection-label">
						<FaHome />
						<span>HOME SAMPLE COLLECTION</span>
					</div>

					<h2>
						Diagnostic care,
						<span> right at your doorstep.</span>
					</h2>

					<p className="home-collection-description">
						Book a convenient home sample collection with our trained
						professionals. Get reliable diagnostic services without leaving your
						home.
					</p>

					<div className="home-collection-features">
						<div className="home-collection-feature">
							<div className="feature-check">
								<FaCheck />
							</div>

							<div>
								<strong>Trained Professionals</strong>
								<span>Experienced collection team</span>
							</div>
						</div>

						<div className="home-collection-feature">
							<div className="feature-check">
								<FaCheck />
							</div>

							<div>
								<strong>Safe & Hygienic</strong>
								<span>Professional sample handling</span>
							</div>
						</div>
					</div>

					<button className="home-collection-button">
						Book Home Collection
						<FaArrowRight />
					</button>
				</div>

				{/* =================================================
				    FLIP CARD
				================================================= */}

				<div className="home-collection-flip-wrapper">
					<div className="home-collection-flip-card">
						{/* =================================================
						    FRONT
						================================================= */}

						<div className="home-collection-card-face home-collection-card-front">
							<div className="service-card-top">
								<div className="service-icon">
									<FaHome />
								</div>

								<div className="service-card-heading">
									<span>BAUNTHIYAL PATH LABS</span>

									<h3>Home Collection</h3>
								</div>
							</div>

							<div className="service-card-text">
								<p>Quality diagnostic testing made simple and convenient.</p>
							</div>

							<div className="service-card-items">
								<div className="service-item">
									<div className="service-item-icon">
										<FaShieldAlt />
									</div>

									<div>
										<strong>Safe Collection</strong>
										<span>Hygienic & professional</span>
									</div>
								</div>

								<div className="service-item">
									<div className="service-item-icon">
										<FaUserMd />
									</div>

									<div>
										<strong>Expert Team</strong>
										<span>Trained professionals</span>
									</div>
								</div>

								<div className="service-item">
									<div className="service-item-icon">
										<FaClock />
									</div>

									<div>
										<strong>Flexible Timing</strong>
										<span>Choose your convenient time</span>
									</div>
								</div>
							</div>

							<div className="service-card-bottom">
								<div className="trusted-service">
									<FaFlask />
									<span>Trusted Diagnostics</span>
								</div>

								<div className="service-status">
									<span></span>
									Available
								</div>
							</div>

							<div className="flip-hint">Hover to explore →</div>
						</div>

						{/* =================================================
						    BACK
						================================================= */}

						<div className="home-collection-card-face home-collection-card-back">
							<div className="flip-back-header">
								<div className="flip-back-icon">
									<FaHome />
								</div>

								<div>
									<span>HOME SAMPLE SERVICE</span>
									<h3>How It Works</h3>
								</div>
							</div>

							<div className="flip-steps">
								<div className="flip-step">
									<div className="flip-step-number">1</div>

									<div>
										<strong>Book Your Collection</strong>
										<span>Choose your test and preferred time.</span>
									</div>
								</div>

								<div className="flip-step">
									<div className="flip-step-number">2</div>

									<div>
										<strong>Professional Visits</strong>
										<span>Our trained phlebotomist visits your home.</span>
									</div>
								</div>

								<div className="flip-step">
									<div className="flip-step-number">3</div>

									<div>
										<strong>Safe Sample Collection</strong>
										<span>Sample is collected using hygienic procedures.</span>
									</div>
								</div>

								<div className="flip-step">
									<div className="flip-step-number">4</div>

									<div>
										<strong>Get Your Report</strong>
										<span>Receive your report digitally when ready.</span>
									</div>
								</div>
							</div>

							{/* EXTRA INFORMATION */}

							<div className="flip-benefits">
								<div className="flip-benefit">
									<FaCalendarCheck />
									<span>Flexible Slots</span>
								</div>

								<div className="flip-benefit">
									<FaFileMedical />
									<span>Digital Reports</span>
								</div>

								<div className="flip-benefit">
									<FaMapMarkerAlt />
									<span>Home Service</span>
								</div>
							</div>

							<div className="flip-back-footer">
								<div>
									<small>Need assistance?</small>
									<strong>
										<FaPhoneAlt /> Call Baunthiyal Path Labs
									</strong>
								</div>

								<button>
									Book Now
									<FaArrowRight />
								</button>
							</div>

							<div className="flip-hint">Move away to return →</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeCollection;
