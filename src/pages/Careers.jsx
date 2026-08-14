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
} from "react-icons/fa";

import {
	currentOpenings,
	internships,
	careerBenefits,
} from "../data/CareerData";

import "../styles/Career.css";

import careerHero from "../assets/careers/career-hero.png";

function Career() {
	const [selectedJob, setSelectedJob] = useState(null);
	const [selectedInternship, setSelectedInternship] = useState(null);


	const adminEmail = "deepakrangarh07@gmail.com";

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

	const applyForInternship = (internshipTitle) => {
		const subject = encodeURIComponent(
			`Internship Application - ${internshipTitle}`,
		);

		const body = encodeURIComponent(
			`Dear Baunthiyal Path Labs Team,

I would like to apply for the ${internshipTitle}.

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
          HERO
      ===================================================== */}

			<section
				className="career-hero"
				style={{ backgroundImage: `url(${careerHero})` }}
			>
				<div className="career-hero-overlay"></div>

				<div className="career-hero-container">
					<div className="career-hero-content">
						<span className="career-tag">CAREERS</span>

						<h1>
							Build Your
							<br />
							Career.
							<br />
							<span>Make a Difference.</span>
						</h1>

						<p>
							Join Baunthiyal Path Labs and become part of a team committed to
							accuracy, innovation and better healthcare.
						</p>

						<a href="#current-openings" className="career-hero-btn">
							<FaBriefcase />
							Explore Opportunities
							<FaArrowRight />
						</a>
					</div>
				</div>
			</section>

			{/* =====================================================
          CURRENT OPENINGS
      ===================================================== */}

			<section className="current-openings" id="current-openings">
				<div className="career-section-heading">
					<span className="section-label">OPPORTUNITIES</span>

					<h2>Current Openings</h2>

					<p>
						Explore available positions and join our growing diagnostic
						healthcare team.
					</p>
				</div>

				{currentOpenings.length > 0 ? (
					<div className="openings-list">
						{currentOpenings.map((job) => (
							<article className="opening-card" key={job.id}>
								<div className="opening-main">
									<div className="opening-icon">
										<FaBriefcase />
									</div>

									<div className="opening-content">
										<span className="opening-department">{job.department}</span>

										<h3>{job.jobTitle}</h3>

										<div className="opening-meta">
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
												{job.qualification}
											</span>
										</div>
									</div>
								</div>

								<div className="opening-actions">
									<button
										className="view-job-btn"
										onClick={() => setSelectedJob(job)}
									>
										View Details
										<FaArrowRight />
									</button>
								</div>
							</article>
						))}
					</div>
				) : (
					<div className="no-openings">
						<FaBriefcase />

						<h3>No openings available right now</h3>

						<p>Please check back later for new career opportunities.</p>
					</div>
				)}
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

				<div className="internship-slider">
					{internships.map((internship) => (
						<article className="internship-card" key={internship.id}>
							<div className="internship-icon">
								{internship.department === "Pathology" ? (
									<FaFlask />
								) : internship.department === "Microbiology" ? (
									<FaMicroscope />
								) : (
									<FaMicroscope />
								)}
							</div>

							<span className="internship-badge">{internship.type}</span>

							<h3>{internship.title}</h3>

							<p>{internship.description}</p>

							<div className="internship-info">
								<span>
									<FaClock />
									{internship.duration}
								</span>

								<span>
									<FaGraduationCap />
									{internship.qualification}
								</span>
							</div>

							<button
								className="internship-btn"
								onClick={() => setSelectedInternship(internship)}
							>
								View Internship
								<FaArrowRight />
							</button>
						</article>
					))}
				</div>

				<p className="internship-note">
					Internship positions are paid by students.
				</p>
			</section>

			{/* =====================================================
          EMAIL CTA
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
							Don't see a suitable opening? Send your resume to our
							administration team for future opportunities.
						</p>
					</div>

					<a href={`mailto:${adminEmail}`} className="career-email-btn">
						Email Your Resume
						<FaArrowRight />
					</a>
				</div>
			</section>

			{/* =====================================================
          JOB MODAL
      ===================================================== */}

			{selectedJob && (
				<div
					className="career-modal-overlay"
					onClick={() => setSelectedJob(null)}
				>
					<div
						className="career-modal"
						onClick={(event) => event.stopPropagation()}
					>
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

						<div className="modal-footer">
							<span>
								{selectedJob.openings} opening
								{selectedJob.openings > 1 ? "s" : ""}
							</span>

							<button
								className="modal-apply-btn"
								onClick={() => applyForJob(selectedJob.jobTitle)}
							>
								Apply by Email
								<FaPaperPlane />
							</button>
						</div>
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
					<div
						className="career-modal"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							className="modal-close"
							onClick={() => setSelectedInternship(null)}
						>
							<FaTimes />
						</button>

						<span className="modal-label">{selectedInternship.department}</span>

						<h2>{selectedInternship.title}</h2>

						<div className="modal-meta">
							<span>
								<FaClock />
								{selectedInternship.duration}
							</span>

							<span>
								<FaGraduationCap />
								{selectedInternship.qualification}
							</span>
						</div>

						<div className="modal-section">
							<h3>Internship Details</h3>

							<p>{selectedInternship.description}</p>
						</div>

						<div className="internship-payment-note">
							<FaCheckCircle />

							<div>
								<strong>Paid Internship</strong>

								<p>Internship charges are payable by the student.</p>
							</div>
						</div>

						<div className="modal-footer">
							<button
								className="modal-apply-btn"
								onClick={() => applyForInternship(selectedInternship.title)}
							>
								Apply by Email
								<FaPaperPlane />
							</button>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}

export default Career;
