import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaArrowRight, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

import "../../styles/Panels/Hero.css";

import cghsImage from "../../assets/panels/panel-hero.png";
import partnerImage from "../../assets/panels/panel-hero.png";

const slides = [
	{
		id: 1,

		tag: "CGHS PANELLED",

		title: (
			<>
				Trusted Diagnostics for
				<span> Government Healthcare</span>
			</>
		),

		description:
			"Baunthiyal Path Labs & Imaging Centre provides reliable pathology and ultrasound for eligible government beneficiaries under CGHS empanelment.",

		image: cghsImage,

		points: [
			"CGHS Empanelled",
			"Pathology Services",
			"Ultrasound Services",
			"Trusted Diagnostic Care",
		],

		primaryButton: "View Services",

		// Internal website route
		primaryAction: "/our_services",

		secondaryButton: "Contact Us",
		secondaryAction: "tel:+919876543210",
	},

	{
		id: 2,

		tag: "HEALTHCARE PARTNERSHIP",

		title: (
			<>
				Become a<span> Trusted Healthcare Partner</span>
			</>
		),

		description:
			"Partner with Baunthiyal Path Labs & Imaging Centre for reliable pathology and diagnostic services for your organization.",

		image: partnerImage,

		points: [
			"Authorised Collection Centre",
			"Corporate Partnerships",
			"Hospital Partnerships",
			"Reliable Diagnostics",
		],

		primaryButton: "Become a Partner",

		// Email action
		primaryAction:
			"mailto:care@baunthiyallabs.com?subject=Request%20for%20Healthcare%20Partnership&body=Dear%20Baunthiyal%20Path%20Labs%20%26%20Imaging%20Centre%20Team%2C%0A%0AI%20am%20interested%20in%20becoming%20a%20healthcare%20partner.%0A%0AMy%20details%3A%0AName%3A%20%0AOrganisation%3A%20%0ALocation%3A%20%0AContact%20Number%3A%20%0AEmail%3A%20%0A%0ARegards%2C%0A%5BYour%20Name%5D",

		secondaryButton: "Contact Us",
		secondaryAction: "tel:+919876543210",
	},
];

function Hero() {
	const [current, setCurrent] = useState(0);
	const [animating, setAnimating] = useState(false);

	const slide = slides[current];

	const nextSlide = () => {
		if (animating) return;

		setAnimating(true);

		setTimeout(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
			setAnimating(false);
		}, 500);
	};

	const prevSlide = () => {
		if (animating) return;

		setAnimating(true);

		setTimeout(() => {
			setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
			setAnimating(false);
		}, 500);
	};

	const goToSlide = (index) => {
		if (index === current || animating) return;

		setAnimating(true);

		setTimeout(() => {
			setCurrent(index);
			setAnimating(false);
		}, 500);
	};

	// Automatic slider
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 6000);

		return () => clearInterval(timer);
	}, []);

	// Check whether action is an external action
	const isExternalAction =
		slide.primaryAction.startsWith("mailto:") ||
		slide.primaryAction.startsWith("tel:");

	return (
		<section className="panel-hero">
			<div className="panel-hero-container">
				<div
					className={`panel-hero-slider ${animating ? "is-changing" : ""}`}
					style={{
						backgroundImage: `
							linear-gradient(
								90deg,
								rgba(255,255,255,0.98) 0%,
								rgba(255,255,255,0.94) 35%,
								rgba(255,255,255,0.70) 58%,
								rgba(255,255,255,0.10) 100%
							),
							url(${slide.image})
						`,
					}}
				>
					{/* ================= CONTENT ================= */}

					<div className="panel-hero-content">
						<div className="panel-hero-tag">
							<FaShieldAlt />
							{slide.tag}
						</div>

						<h1>{slide.title}</h1>

						<p>{slide.description}</p>

						{/* POINTS */}

						<div className="panel-hero-points">
							{slide.points.map((point, index) => (
								<div className="panel-hero-point" key={index}>
									<FaCheckCircle />

									<span>{point}</span>
								</div>
							))}
						</div>

						{/* BUTTONS */}

						<div className="panel-hero-buttons">
							{/* PRIMARY BUTTON */}

							{isExternalAction ? (
								<a href={slide.primaryAction} className="primary-btn">
									{slide.primaryButton}
									<FaArrowRight />
								</a>
							) : (
								<Link to={slide.primaryAction} className="primary-btn">
									{slide.primaryButton}
									<FaArrowRight />
								</Link>
							)}

							{/* SECONDARY BUTTON */}

							<a href={slide.secondaryAction} className="secondary-btn">
								{slide.secondaryButton}
							</a>
						</div>
					</div>

					{/* ================= SLIDER ARROWS ================= */}

					<button
						className="panel-slider-arrow panel-slider-prev"
						onClick={prevSlide}
						aria-label="Previous slide"
					>
						‹
					</button>

					<button
						className="panel-slider-arrow panel-slider-next"
						onClick={nextSlide}
						aria-label="Next slide"
					>
						›
					</button>

					{/* ================= SLIDER DOTS ================= */}

					<div className="panel-slider-dots">
						{slides.map((_, index) => (
							<button
								key={index}
								className={index === current ? "active" : ""}
								onClick={() => goToSlide(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
