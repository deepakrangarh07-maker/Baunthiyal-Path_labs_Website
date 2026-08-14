import "../../styles/About/Experts.css";

import { useEffect, useState } from "react";

import {
	FaChevronLeft,
	FaChevronRight,
	FaUserMd,
	FaTimes,
	FaCalendarCheck,
	FaGraduationCap,
	FaStethoscope,
} from "react-icons/fa";



import {doctors} from "../../data/Experts"

function Experts() {
	/* =====================================================
	   STATE
	===================================================== */

	const [current, setCurrent] = useState(0);

	const [cardsPerSlide, setCardsPerSlide] = useState(3);

	const [selectedDoctor, setSelectedDoctor] = useState(null);

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

	for (let i = 0; i < doctors.length; i += cardsPerSlide) {
		slides.push(doctors.slice(i, i + cardsPerSlide));
	}

	const totalSlides = slides.length;

	/* =====================================================
	   RESET SLIDE AFTER RESPONSIVE CHANGE
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
		}, 12000);

		return () => clearInterval(timer);
	}, [totalSlides]);

	/* ====================================================	=
	   NEXT SLIDE
	===================================================== */

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % totalSlides);
	};

	/* =====================================================
	   PREVIOUS SLIDE
	===================================================== */

	const previousSlide = () => {
		setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	/* =====================================================
	   CLOSE MODAL
	===================================================== */

	const closeDoctor = () => {
		setSelectedDoctor(null);
	};

	/* =====================================================
	   BOOK APPOINTMENT
	===================================================== */

	const bookAppointment = () => {
		window.location.href = "/online-booking";
	};

	return (
		<section className="experts-section">
			<div className="experts-container">
				{/* =================================================
				    SECTION HEADER
				================================================= */}

				<div className="experts-header">
					<span className="experts-tag">OUR EXPERTS</span>

					<h2>
						Meet Our
						<span>Healthcare Professionals</span>
					</h2>

					<p>
						Our experienced doctors and diagnostic professionals are committed
						to accurate diagnosis and compassionate patient care.
					</p>
				</div>

				{/* =================================================
				    SLIDER
				================================================= */}

				<div className="experts-slider">
					{/* PREVIOUS */}

					{totalSlides > 1 && (
						<button
							className="experts-arrow experts-prev"
							onClick={previousSlide}
							aria-label="Previous doctors"
						>
							<FaChevronLeft />
						</button>
					)}

					{/* WINDOW */}

					<div className="experts-window">
						<div
							className="experts-track"
							style={{
								transform: `translateX(-${current * 100}%)`,
							}}
						>
							{slides.map((slide, slideIndex) => (
								<div className="expert-slide" key={slideIndex}>
									<div className="expert-slide-grid">
										{slide.map((doctor) => (
											<button
												type="button"
												className="expert-card"
												key={doctor.id}
												onClick={() => setSelectedDoctor(doctor)}
											>
												{/* IMAGE */}

												<div className="expert-image">
													<img
														src={doctor.image}
														alt={`${doctor.name} - ${doctor.designation}`}
													/>

													<div className="expert-icon">
														<FaUserMd />
													</div>
												</div>

												{/* CONTENT */}

												<div className="expert-content">
													<h3>{doctor.name}</h3>

													<span className="expert-designation">
														{doctor.designation}
													</span>

													<p>{doctor.experience}</p>

													<span className="expert-view-profile">
														View Details →
													</span>
												</div>
											</button>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* NEXT */}

					{totalSlides > 1 && (
						<button
							className="experts-arrow experts-next"
							onClick={nextSlide}
							aria-label="Next doctors"
						>
							<FaChevronRight />
						</button>
					)}
				</div>

				{/* =================================================
				    DOTS
				================================================= */}

				{totalSlides > 1 && (
					<div className="experts-dots">
						{slides.map((_, index) => (
							<button
								key={index}
								className={current === index ? "active" : ""}
								onClick={() => setCurrent(index)}
								aria-label={`Show doctor group ${index + 1}`}
							/>
						))}
					</div>
				)}
			</div>

			{/* =====================================================
			    DOCTOR DETAILS MODAL
			===================================================== */}

			{selectedDoctor && (
				<div className="doctor-modal-overlay" onClick={closeDoctor}>
					<div
						className="doctor-modal"
						onClick={(event) => event.stopPropagation()}
					>
						{/* CLOSE */}

						<button
							className="doctor-modal-close"
							onClick={closeDoctor}
							aria-label="Close doctor details"
						>
							<FaTimes />
						</button>

						{/* IMAGE */}

						<div className="doctor-modal-image">
							<img src={selectedDoctor.image} alt={selectedDoctor.name} />
						</div>

						{/* CONTENT */}

						<div className="doctor-modal-content">
							<span className="doctor-modal-tag">OUR HEALTHCARE EXPERT</span>

							<h2>{selectedDoctor.name}</h2>

							<h3>{selectedDoctor.designation}</h3>

							<p className="doctor-modal-experience">
								{selectedDoctor.experience}
							</p>

							<p className="doctor-modal-description">
								{selectedDoctor.description}
							</p>

							{/* INFORMATION */}

							<div className="doctor-modal-info">
								<div className="doctor-info-item">
									<div className="doctor-info-icon">
										<FaGraduationCap />
									</div>

									<div>
										<span>Qualification</span>

										<strong>{selectedDoctor.qualification}</strong>
									</div>
								</div>

								<div className="doctor-info-item">
									<div className="doctor-info-icon">
										<FaStethoscope />
									</div>

									<div>
										<span>Specialization</span>

										<strong>{selectedDoctor.specialization}</strong>
									</div>
								</div>
							</div>

							{/* =================================================
							    ONLY SHOW FOR RADIOLOGIST / ALLOWED DOCTORS
							================================================= */}

							{selectedDoctor.canBookAppointment && (
								<button
									className="doctor-appointment-btn"
									onClick={bookAppointment}
								>
									<FaCalendarCheck />
									Book Appointment
								</button>
							)}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default Experts;
