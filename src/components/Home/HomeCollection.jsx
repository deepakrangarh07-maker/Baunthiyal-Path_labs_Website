import "../../styles/Home/HomeCollection.css";
import {
	FaArrowRight,
	FaCheck,
	FaClock,
	FaFlask,
	FaHome,
	FaShieldAlt,
	FaUserMd,
} from "react-icons/fa";

function HomeCollection() {
	return (
		<section className="home-collection-section">
			<div className="home-collection-container">
				{/* ================= LEFT ================= */}
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

				{/* ================= RIGHT CARD ================= */}
				<div className="home-collection-service-card">
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

					{/* SERVICE ITEMS */}
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

					{/* CARD BOTTOM */}
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
				</div>
			</div>
		</section>
	);
}

export default HomeCollection;