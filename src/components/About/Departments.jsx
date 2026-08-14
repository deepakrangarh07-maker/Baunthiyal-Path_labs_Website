import "../../styles/About/Departments.css";

import { useEffect, useState } from "react";

import {
	FaFlask,
	FaXRay,
	FaMicroscope,
	FaHeartbeat,
	FaLaptopMedical,
	FaStethoscope,
	FaArrowRight,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

import pathology from "../../assets/about/pathology.jpg";
import radiology from "../../assets/about/radiology.png";
import microbiology from "../../assets/about/microbiology.png";
import ctscan from "../../assets/about/ctscan.png";
import xray from "../../assets/about/xray.png";
import ultrasound from "../../assets/about/ultrasound.png";

/* =========================================================
   DEPARTMENTS DATA
========================================================= */

const departments = [
	{
		id: 1,
		image: pathology,
		icon: <FaFlask />,
		title: "Pathology",
		description:
			"Accurate blood, urine, and clinical laboratory investigations with modern technology.",
	},

	{
		id: 2,
		image: radiology,
		icon: <FaXRay />,
		title: "Radiology",
		description:
			"Comprehensive diagnostic imaging services for fast and precise diagnosis.",
	},

	{
		id: 3,
		image: microbiology,
		icon: <FaMicroscope />,
		title: "Microbiology",
		description:
			"Detection and identification of infectious diseases using advanced laboratory methods.",
	},

	{
		id: 4,
		image: ctscan,
		icon: <FaLaptopMedical />,
		title: "CT Scan",
		description: "High-resolution CT imaging for quick and reliable diagnosis.",
	},

	{
		id: 5,
		image: xray,
		icon: <FaXRay />,
		title: "Digital X-Ray",
		description:
			"Low-radiation digital X-ray services providing clear diagnostic images.",
	},

	{
		id: 6,
		image: ultrasound,
		icon: <FaHeartbeat />,
		title: "Ultrasound",
		description:
			"Safe and advanced ultrasound imaging for pregnancy and internal organ examination.",
	},
];

/* =========================================================
   COMPONENT
========================================================= */

function Departments() {
	const [current, setCurrent] = useState(0);

	const [cardsPerSlide, setCardsPerSlide] = useState(3);

	/* =====================================================
	   RESPONSIVE CARDS PER SLIDE
	===================================================== */

	useEffect(() => {
		const updateCardsPerSlide = () => {
			if (window.innerWidth <= 650) {
				setCardsPerSlide(1);
			} else if (window.innerWidth <= 900) {
				setCardsPerSlide(2);
			} else {
				setCardsPerSlide(3);
			}
		};

		updateCardsPerSlide();

		window.addEventListener("resize", updateCardsPerSlide);

		return () => {
			window.removeEventListener("resize", updateCardsPerSlide);
		};
	}, []);

	/* =====================================================
	   CREATE SLIDES
	===================================================== */

	const slides = [];

	for (let i = 0; i < departments.length; i += cardsPerSlide) {
		slides.push(departments.slice(i, i + cardsPerSlide));
	}

	const totalSlides = slides.length;

	/* =====================================================
	   RESET SLIDE ON SCREEN SIZE CHANGE
	===================================================== */

	useEffect(() => {
		setCurrent(0);
	}, [cardsPerSlide]);

	/* =====================================================
	   AUTO SLIDER
	===================================================== */

	useEffect(() => {
		if (totalSlides <= 1) return;

		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % totalSlides);
		}, 5000);

		return () => clearInterval(timer);
	}, [totalSlides]);

	/* =====================================================
	   NEXT
	===================================================== */

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % totalSlides);
	};

	/* =====================================================
	   PREVIOUS
	===================================================== */

	const previousSlide = () => {
		setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	/* =====================================================
	   JSX
	===================================================== */

	return (
		<section className="department-section">
			<div className="department-container">
				{/* =============================================
				    HEADER
				============================================= */}

				<div className="department-header">
					<span className="department-tag">OUR DEPARTMENTS</span>

					<h2>
						Complete Diagnostic
						<span>Healthcare Services</span>
					</h2>

					<p>
						We offer a wide range of diagnostic services with advanced
						technology and experienced healthcare professionals.
					</p>
				</div>

				{/* =============================================
				    SLIDER
				============================================= */}

				<div className="department-slider">
					<button
						className="department-arrow"
						onClick={previousSlide}
						aria-label="Previous departments"
					>
						<FaChevronLeft />
					</button>

					<div className="department-window">
						<div
							className="department-track"
							style={{
								transform: `translateX(-${current * 100}%)`,
							}}
						>
							{slides.map((slide, slideIndex) => (
								<div className="department-slide" key={slideIndex}>
									<div className="department-slide-grid">
										{slide.map((item) => (
											<div className="department-card" key={item.id}>
												{/* IMAGE */}

												<div className="department-image">
													<img src={item.image} alt={item.title} />
												</div>

												{/* CONTENT */}

												<div className="department-content">
													<div className="department-icon">{item.icon}</div>

													<h3>{item.title}</h3>

													<p>{item.description}</p>

													<button className="department-btn" type="button">
														Learn More
														<FaArrowRight />
													</button>
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					<button
						className="department-arrow"
						onClick={nextSlide}
						aria-label="Next departments"
					>
						<FaChevronRight />
					</button>
				</div>

				{/* =============================================
				    DOTS
				============================================= */}

				{totalSlides > 1 && (
					<div className="department-dots">
						{slides.map((_, index) => (
							<button
								key={index}
								className={current === index ? "active" : ""}
								onClick={() => setCurrent(index)}
								aria-label={`Show department group ${index + 1}`}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default Departments;
