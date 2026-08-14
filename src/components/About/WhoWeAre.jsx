import "../../styles/About/WhoWeAre.css";

import { useEffect, useState } from "react";

import AboutImage from "../../assets/about/about-lab.jpg";

import { FaCheckCircle, FaFlask, FaUserMd, FaHospital } from "react-icons/fa";

const cards = [
	{
		number: "50K+",
		title: "Happy Patients",
		description: "Trusted healthcare services",
		icon: <FaUserMd />,
	},
	{
		number: "1000+",
		title: "Lab Tests",
		description: "Advanced diagnostic services",
		icon: <FaFlask />,
	},
	{
		number: "24/7",
		title: "Support",
		description: "Here when you need us",
		icon: <FaHospital />,
	},
];

function WhoWeAre() {
	const [activeCard, setActiveCard] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveCard((prev) => (prev + 1) % cards.length);
		}, 3500);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="who-section">
			<div className="who-container">
				<div className="who-grid">
					{/* =========================
					    IMAGE
					========================= */}

					<div className="who-image">
						<img src={AboutImage} alt="Baunthiyal Path Labs laboratory" />

						<div className="who-experience">
							<strong>15+</strong>
							<span>Years of Excellence</span>
						</div>
					</div>

					{/* =========================
					    CONTENT
					========================= */}

					<div className="who-content">
						<span className="who-tag">WHO WE ARE</span>

						<h2>
							Trusted Diagnostics for
							<span> Better Healthcare</span>
						</h2>

						<p>
							Baunthiyal Path Labs & Imaging Centre Pvt. Ltd. provides accurate,
							affordable and timely diagnostic services with modern technology
							and experienced healthcare professionals.
						</p>

						<p>
							Our focus is simple — reliable reports, advanced diagnostics and
							compassionate patient care.
						</p>

						{/* =========================
						    FEATURES
						========================= */}

						<div className="who-features">
							<div className="who-feature">
								<FaCheckCircle />
								<span>Accurate & Reliable Reports</span>
							</div>

							<div className="who-feature">
								<FaUserMd />
								<span>Experienced Professionals</span>
							</div>

							<div className="who-feature">
								<FaHospital />
								<span>Modern Infrastructure</span>
							</div>

							<div className="who-feature">
								<FaFlask />
								<span>1000+ Diagnostic Tests</span>
							</div>
						</div>

						{/* =========================
						    DESKTOP CARDS
						========================= */}

						<div className="who-cards">
							{cards.map((card, index) => (
								<div className="who-card" key={index}>
									<div className="who-card-icon">{card.icon}</div>

									<div>
										<h3>{card.number}</h3>
										<p>{card.title}</p>
									</div>
								</div>
							))}
						</div>

						{/* =========================
						    MOBILE SLIDER
						========================= */}

						<div className="who-mobile-slider">
							<div className="who-slider-window">
								<div
									className="who-slider-track"
									style={{
										transform: `translateX(-${activeCard * 100}%)`,
									}}
								>
									{cards.map((card, index) => (
										<div className="who-mobile-card" key={index}>
											<div className="who-mobile-icon">{card.icon}</div>

											<div className="who-mobile-content">
												<span>{card.title}</span>

												<h3>{card.number}</h3>

												<p>{card.description}</p>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* DOTS */}

							<div className="who-slider-dots">
								{cards.map((_, index) => (
									<button
										key={index}
										className={activeCard === index ? "active" : ""}
										onClick={() => setActiveCard(index)}
										aria-label={`Show ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhoWeAre;
