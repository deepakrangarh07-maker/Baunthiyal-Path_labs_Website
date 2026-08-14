import "../../styles/Our_Services/Hero.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	FaArrowRight,
	FaChevronLeft,
	FaChevronRight,
	FaFlask,
	FaHome,
	FaHeartbeat,
	FaXRay,
	FaMicroscope,
	FaStethoscope,
} from "react-icons/fa";

import healthPackage from "../../assets/services/hero-service.png";
import homeCollection from "../../assets/services/hero-service.png";
import pathology from "../../assets/services/hero-service.png";
import radiology from "../../assets/services/hero-service.png";
import microbiology from "../../assets/services/hero-service.png";
import clinicalPathology from "../../assets/services/hero-service.png";

/* =========================================================
   HERO SLIDES
========================================================= */

const slides = [
	{
		id: 1,
		tag: "HEALTH PACKAGES",
		title: "Affordable Health Packages",
		description:
			"Comprehensive health checkups designed to help you monitor your health with confidence.",
		button: "Explore Packages",
		service: "packages",
		icon: <FaHeartbeat />,
		image: healthPackage,
	},

	{
		id: 2,
		tag: "HOME SAMPLE COLLECTION",
		title: "Healthcare at Your Doorstep",
		description:
			"Convenient and safe sample collection by trained professionals from the comfort of your home.",
		button: "Book Home Collection",
		service: "home-collection",
		icon: <FaHome />,
		image: homeCollection,
	},

	{
		id: 3,
		tag: "PATHOLOGY",
		title: "Accurate Pathology Services",
		description:
			"Reliable blood, urine and clinical laboratory investigations supported by modern technology.",
		button: "Explore Pathology",
		service: "pathology",
		icon: <FaFlask />,
		image: pathology,
	},

	{
		id: 4,
		tag: "RADIOLOGY",
		title: "Advanced Imaging Services",
		description:
			"Modern diagnostic imaging services including X-Ray, CT and other diagnostic imaging.",
		button: "Explore Radiology",
		service: "radiology",
		icon: <FaXRay />,
		image: radiology,
	},

	{
		id: 5,
		tag: "MICROBIOLOGY",
		title: "Advanced Microbiology Testing",
		description:
			"Reliable microbiology investigations for accurate detection and diagnosis of infections.",
		button: "Explore Microbiology",
		service: "microbiology",
		icon: <FaMicroscope />,
		image: microbiology,
	},

	{
		id: 6,
		tag: "CLINICAL PATHOLOGY",
		title: "Clinical Pathology Services",
		description:
			"Comprehensive clinical pathology investigations supporting accurate diagnosis and healthcare decisions.",
		button: "Explore Clinical Pathology",
		service: "clinical-pathology",
		icon: <FaStethoscope />,
		image: clinicalPathology,
	},
];

/* =========================================================
   PATHOLOGY DEPARTMENTS
========================================================= */

const pathologyDepartments = [
	"hematology",
	"biochemistry",
	"immunology",
	"serology",
	"histopathology",
	"cytology",
	"hormone-assay",
	"tumor-markers",
	"cardiology",
];

/* =========================================================
   HERO COMPONENT
========================================================= */

function HeroServices() {
	const navigate = useNavigate();

	const [current, setCurrent] = useState(0);

	/* =====================================================
	   AUTO SLIDER
	===================================================== */

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	/* =====================================================
	   NEXT SLIDE
	===================================================== */

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % slides.length);
	};

	/* =====================================================
	   PREVIOUS SLIDE
	===================================================== */

	const previousSlide = () => {
		setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
	};

	/* =====================================================
	   HERO BUTTON ACTION
	===================================================== */

	const exploreService = (type) => {
		switch (type) {
			case "radiology":
				navigate("/our-services/tests?departments=radiology");
				break;

			case "pathology":
				navigate(
					"/our-services/tests?departments=haematology,biochemistry,immunology,serology,histo-pathology,cytology,hormone-assay,tumor-markers,cardiology",
				);
				break;

			case "microbiology":
				navigate("/our-services/tests?departments=microbiology");
				break;

			case "clinical-pathology":
				navigate("/our-services/tests?departments=clinical-pathology");
				break;

			case "packages":
				navigate("/health_package");
				break;
			case "home-collection":
				navigate("/health_package");
				break;

			default:
				navigate("/our-services/tests");
		}
	};

	const slide = slides[current];

	return (
		<section
			className="services-hero"
			style={{
				backgroundImage: `url(${slide.image})`,
			}}
		>
			{/* =================================================
			    DARK OVERLAY
			================================================= */}

			<div className="services-hero-overlay"></div>

			{/* =================================================
			    CONTENT
			================================================= */}

			<div className="services-hero-container">
				<div className="services-hero-content">
					<span className="services-hero-tag">
						{slide.icon}
						{slide.tag}
					</span>

					<h1>{slide.title}</h1>

					<p>{slide.description}</p>

					<div className="services-hero-buttons">
						<button
							className="services-primary-btn"
							onClick={() => exploreService(slide.service)}
						>
							{slide.button}
							<FaArrowRight />
						</button>

						<button
							type="button"
							className="services-secondary-btn"
							onClick={() => (window.location.href = "/our-services/tests")}
						>
							View All Services
						</button>
					</div>
				</div>
			</div>

			{/* =================================================
			    LEFT / RIGHT ARROWS
			================================================= */}

			{slides.length > 1 && (
				<>
					<button
						type="button"
						className="services-slider-arrow services-slider-prev"
						onClick={previousSlide}
						aria-label="Previous service"
					>
						<FaChevronLeft />
					</button>

					<button
						type="button"
						className="services-slider-arrow services-slider-next"
						onClick={nextSlide}
						aria-label="Next service"
					>
						<FaChevronRight />
					</button>
				</>
			)}

			{/* =================================================
			    BOTTOM SLIDER CONTROL
			================================================= */}

			<div className="services-slider-control">
				<div className="services-slider-counter">
					<span>{String(current + 1).padStart(2, "0")}</span>

					<div className="services-slider-line">
						<div
							className="services-slider-progress"
							style={{
								width: `${((current + 1) / slides.length) * 100}%`,
							}}
						></div>
					</div>

					<span>{String(slides.length).padStart(2, "0")}</span>
				</div>

				<div className="services-slider-dots">
					{slides.map((item, index) => (
						<button
							key={item.id}
							type="button"
							className={current === index ? "active" : ""}
							onClick={() => setCurrent(index)}
							aria-label={`Show ${item.tag}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default HeroServices;
