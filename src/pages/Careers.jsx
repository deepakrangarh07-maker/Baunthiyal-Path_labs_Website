// src/pages/Career.jsx

import { useState } from "react";

import {
	FaArrowRight,
	FaBriefcase,
	FaCheckCircle,
	FaClock,
	FaFlask,
	FaGraduationCap,
	FaMapMarkerAlt,
	FaMicroscope,
	FaPaperPlane,
	FaTimes,
	FaSyncAlt,
} from "react-icons/fa";

import {
	currentOpenings,
	internships,
	careerBenefits,
} from "../data/CareerData";

import "../styles/Career.css";

import careerHero from "../assets/careers/career-hero.png";

function Career() {
	const [flippedJobs, setFlippedJobs] = useState({});
	const [flippedInternships, setFlippedInternships] = useState({});

	const [selectedJob, setSelectedJob] = useState(null);
	const [selectedInternship, setSelectedInternship] = useState(null);

	const adminEmail = "deepakrangarh07@gmail.com";

	const toggleJob = (id) => {
		setFlippedJobs((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const toggleInternship = (id) => {
		setFlippedInternships((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const applyForJob = (jobTitle) => {
		const subject = encodeURIComponent(`Job Application - ${jobTitle}`);

		const body = encodeURIComponent(
			`Dear Baunthiyal Path Labs Team,

I would like to apply for the position of ${jobTitle}.

Please find my resume attached to this email.

Regards,
[Your Name]
[Your Phone Number]`,
		);

		window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
	};

	const applyForInternship = (title) => {
		const subject = encodeURIComponent(`Internship Application - ${title}`);

		const body = encodeURIComponent(
			`Dear Baunthiyal Path Labs Team,

I would like to apply for the ${title}.

Please find my resume attached to this email.

Regards,
[Your Name]
[Your Phone Number]`,
		);

		window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
	};

	return (
		<main className="careers-page">
			{/* =====================================================
			    HERO PANEL
			===================================================== */}

			<section
				className="career-hero"
				style={{
					backgroundImage: `url(${careerHero})`,
				}}
			>
				<div className="career-hero-overlay" />

				<div className="career-hero-container">
					<div className="career-hero-content">
						<span className="career-tag">CAREERS</span>

						<h1>
							Build Your
							<br />
							<span>Career.</span>
						</h1>

						<p>
							Join Baunthiyal Path Labs and grow your career in modern
							diagnostic healthcare.
						</p>

						<a href="#current-openings" className="career-hero-btn">
							Explore Jobs
							<FaArrowRight />
						</a>
					</div>

					<div className="career-hero-side">
						<div className="hero-stat-card hero-stat-one">
							<FaBriefcase />
							<div>
								<strong>Career</strong>
								<span>Opportunities</span>
							</div>
						</div>

						<div className="hero-stat-card hero-stat-two">
							<FaGraduationCap />
							<div>
								<strong>Internship</strong>
								<span>Learn & Grow</span>
							</div>
						</div>

						<div className="hero-stat-card hero-stat-three">
							<FaFlask />
							<div>
								<strong>Modern</strong>
								<span>Laboratory</span>
							</div>
						</div>

						<div className="hero-dots">
							<span />
							<span className="active" />
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    INTRO
			===================================================== */}

			<section className="career-intro">
				<span className="section-label">GROW WITH US</span>

				<h2>
					Build Your Future in
					<span> Diagnostic Healthcare</span>
				</h2>

				<p>
					We provide opportunities for professionals and students who want to
					develop their skills and contribute to quality diagnostic healthcare.
				</p>
			</section>

			{/* =====================================================
			    BENEFITS
			===================================================== */}

			<section className="career-benefits">
				<div className="career-benefits-grid">
					{careerBenefits.map((benefit) => (
						<div className="career-benefit-card" key={benefit.id}>
							<div className="career-benefit-icon">
								<FaCheckCircle />
							</div>

							<h3>{benefit.title}</h3>

							<p>{benefit.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* =====================================================
			    JOBS
			===================================================== */}

			<section className="current-openings" id="current-openings">
				<div className="career-section-heading">
					<span className="section-label">OPPORTUNITIES</span>

					<h2>Current Openings</h2>

					<p>
						Explore available career opportunities with our diagnostic
						healthcare team.
					</p>
				</div>

				<div className="career-card-grid">
					{currentOpenings.map((job) => {
						const isFlipped = flippedJobs[job.id];

						return (
							<article
								key={job.id}
								className={`career-flip-card ${isFlipped ? "is-flipped" : ""}`}
								onClick={() => toggleJob(job.id)}
							>
								<div className="career-flip-inner">
									{/* =========================
									    JOB FRONT
									========================= */}

									<div className="career-card-face career-front">
										<div className="card-heading">
											<div className="card-icon">
												<FaBriefcase />
											</div>

											<span>{job.department}</span>
										</div>

										<h3>{job.jobTitle}</h3>

										<div className="card-meta">
											<span>
												<FaMapMarkerAlt />
												{job.location}
											</span>

											<span>
												<FaClock />
												{job.employmentType}
											</span>

											<span>
												<FaGraduationCap />
												{job.experience}
											</span>
										</div>

										<div className="card-bottom">
											<strong>
												{job.openings} Opening
												{job.openings > 1 ? "s" : ""}
											</strong>

											<span className="tap-text">
												Tap card
												<FaSyncAlt />
											</span>
										</div>
									</div>

									{/* =========================
									    JOB BACK
									========================= */}

									<div className="career-card-face career-back">
										<span className="back-title">JOB DETAILS</span>

										<h3>{job.jobTitle}</h3>

										<p className="back-description">{job.description}</p>

										<div className="back-info">
											<div>
												<strong>Qualification</strong>

												<span>{job.qualification}</span>
											</div>

											<div>
												<strong>Experience</strong>

												<span>{job.experience}</span>
											</div>
										</div>

										<div className="skill-list">
											{job.skills.map((skill, index) => (
												<span key={index}>{skill}</span>
											))}
										</div>

										<div
											className="back-actions"
											onClick={(e) => e.stopPropagation()}
										>
											<button
												type="button"
												onClick={() => applyForJob(job.jobTitle)}
											>
												Apply Now
												<FaPaperPlane />
											</button>

											<span>
												<FaSyncAlt />
												Tap to flip
											</span>
										</div>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</section>

			{/* =====================================================
			    INTERNSHIPS
			===================================================== */}

			<section className="internship-section">
				<div className="career-section-heading">
					<span className="section-label">INTERNSHIPS</span>

					<h2>Start Your Learning Journey</h2>

					<p>
						Practical internship opportunities in pathology, microbiology and
						molecular diagnostics.
					</p>
				</div>

				<div className="career-card-grid">
					{internships.map((internship) => {
						const isFlipped = flippedInternships[internship.id];

						return (
							<article
								key={internship.id}
								className={`career-flip-card ${isFlipped ? "is-flipped" : ""}`}
								onClick={() => toggleInternship(internship.id)}
							>
								<div className="career-flip-inner">
									{/* FRONT */}

									<div className="career-card-face career-front">
										<div className="card-heading">
											<div className="card-icon">
												{internship.department === "Pathology" ? (
													<FaFlask />
												) : (
													<FaMicroscope />
												)}
											</div>

											<span>{internship.type}</span>
										</div>

										<h3>{internship.title}</h3>

										<p className="front-description">
											{internship.description}
										</p>

										<div className="card-meta">
											<span>
												<FaClock />
												{internship.duration}
											</span>

											<span>
												<FaGraduationCap />
												{internship.qualification}
											</span>
										</div>

										<div className="card-bottom">
											<strong>{internship.department}</strong>

											<span className="tap-text">
												Tap card
												<FaSyncAlt />
											</span>
										</div>
									</div>

									{/* BACK */}

									<div className="career-card-face career-back">
										<span className="back-title">INTERNSHIP DETAILS</span>

										<h3>{internship.title}</h3>

										<p className="back-description">{internship.description}</p>

										<div className="back-info">
											<div>
												<strong>Duration</strong>

												<span>{internship.duration}</span>
											</div>

											<div>
												<strong>Qualification</strong>

												<span>{internship.qualification}</span>
											</div>
										</div>

										<div className="internship-paid">Paid Internship</div>

										<div
											className="back-actions"
											onClick={(e) => e.stopPropagation()}
										>
											<button
												type="button"
												onClick={() => applyForInternship(internship.title)}
											>
												Apply Now
												<FaPaperPlane />
											</button>

											<span>
												<FaSyncAlt />
												Tap to flip
											</span>
										</div>
									</div>
								</div>
							</article>
						);
					})}
				</div>

				<p className="internship-note">
					Internship positions are paid by students.
				</p>
			</section>

			{/* =====================================================
			    CTA
			===================================================== */}

			<section className="career-cta">
				<div className="career-cta-content">
					<div className="career-cta-icon">
						<FaPaperPlane />
					</div>

					<div>
						<span className="section-label">WANT TO JOIN US?</span>

						<h2>Send Your Resume</h2>

						<p>
							Don't see a suitable opening? Send your resume for future
							opportunities.
						</p>
					</div>

					<a href={`mailto:${adminEmail}`} className="career-email-btn">
						Email Your Resume
						<FaArrowRight />
					</a>
				</div>
			</section>

			{/* =====================================================
			    FULL JOB DETAILS MODAL
			===================================================== */}

			{selectedJob && (
				<div
					className="career-modal-overlay"
					onClick={() => setSelectedJob(null)}
				>
					<div className="career-modal" onClick={(e) => e.stopPropagation()}>
						<button
							className="modal-close"
							onClick={() => setSelectedJob(null)}
						>
							<FaTimes />
						</button>

						<span className="modal-label">{selectedJob.department}</span>

						<h2>{selectedJob.jobTitle}</h2>

						<div className="modal-meta">
							<span>
								<FaMapMarkerAlt />
								{selectedJob.location}
							</span>

							<span>
								<FaClock />
								{selectedJob.employmentType}
							</span>

							<span>
								<FaGraduationCap />
								{selectedJob.experience}
							</span>
						</div>

						<div className="modal-section">
							<h3>Job Description</h3>

							<p>{selectedJob.description}</p>
						</div>

						<div className="modal-section">
							<h3>Required Qualification</h3>

							<p>{selectedJob.qualification}</p>
						</div>

						<div className="modal-section">
							<h3>Preferred Skills</h3>

							<div className="skills-list">
								{selectedJob.skills.map((skill, index) => (
									<span key={index}>
										<FaCheckCircle />
										{skill}
									</span>
								))}
							</div>
						</div>

						<button
							className="modal-apply-btn"
							onClick={() => applyForJob(selectedJob.jobTitle)}
						>
							Apply by Email
							<FaPaperPlane />
						</button>
					</div>
				</div>
			)}

			{/* =====================================================
			    INTERNSHIP MODAL
			===================================================== */}

			{selectedInternship && (
				<div
					className="career-modal-overlay"
					onClick={() => setSelectedInternship(null)}
				>
					<div className="career-modal" onClick={(e) => e.stopPropagation()}>
						<button
							className="modal-close"
							onClick={() => setSelectedInternship(null)}
						>
							<FaTimes />
						</button>

						<span className="modal-label">{selectedInternship.department}</span>

						<h2>{selectedInternship.title}</h2>

						<div className="modal-section">
							<h3>Internship Details</h3>

							<p>{selectedInternship.description}</p>
						</div>

						<div className="modal-section">
							<h3>Qualification</h3>

							<p>{selectedInternship.qualification}</p>
						</div>

						<button
							className="modal-apply-btn"
							onClick={() => applyForInternship(selectedInternship.title)}
						>
							Apply by Email
							<FaPaperPlane />
						</button>
					</div>
				</div>
			)}
		</main>
	);
}

export default Career;
