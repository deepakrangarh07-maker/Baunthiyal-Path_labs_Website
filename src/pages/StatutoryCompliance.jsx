import {
	FaShieldAlt,
	FaCheckCircle,
	FaFileAlt,
	FaFlask,
	FaHospital,
	FaRadiation,
	FaLeaf,
	FaFireExtinguisher,
	FaBalanceScale,
	FaArrowRight,
	FaPhoneAlt,
} from "react-icons/fa";

import "../styles/StatutoryCompliance.css";

const complianceItems = [
	{
		id: 1,
		icon: <FaHospital />,
		title: "Clinical Establishment Compliance",
		shortTitle: "Clinical Establishment",
		description:
			"Our diagnostic centre operates within the applicable regulatory framework for clinical and diagnostic establishments.",
		status: "Applicable Framework",
	},
	{
		id: 2,
		icon: <FaFlask />,
		title: "Laboratory Quality & Accreditation",
		shortTitle: "Laboratory Quality",
		description:
			"Laboratory processes are maintained with a focus on quality systems, technical competence, accurate testing and reliable reporting.",
		status: "Quality Standards",
	},
	{
		id: 3,
		icon: <FaLeaf />,
		title: "Biomedical Waste Management",
		shortTitle: "Biomedical Waste",
		description:
			"Biomedical waste generated during diagnostic activities is handled through appropriate segregation, storage and disposal procedures.",
		status: "Safety & Environment",
	},
	{
		id: 4,
		icon: <FaRadiation />,
		title: "Radiology & Radiation Safety",
		shortTitle: "Radiation Safety",
		description:
			"Applicable diagnostic imaging activities are carried out with appropriate radiation-safety practices and regulatory requirements.",
		status: "Imaging Compliance",
	},
	{
		id: 5,
		icon: <FaFireExtinguisher />,
		title: "Fire & Safety Requirements",
		shortTitle: "Fire & Safety",
		description:
			"Patient, staff and visitor safety is supported through appropriate emergency preparedness and applicable fire-safety requirements.",
		status: "Safety Measures",
	},
	{
		id: 6,
		icon: <FaBalanceScale />,
		title: "Applicable Statutory Requirements",
		shortTitle: "Statutory Requirements",
		description:
			"We monitor applicable healthcare, diagnostic, environmental, safety and professional requirements relevant to our services.",
		status: "Regulatory Compliance",
	},
];

const qualityPoints = [
	"Patient safety and confidentiality",
	"Accurate sample identification",
	"Standardised laboratory procedures",
	"Quality-controlled diagnostic processes",
	"Proper sample collection and handling",
	"Safe biomedical waste practices",
	"Appropriate imaging safety practices",
	"Continuous improvement of service quality",
];

function StatutoryCompliance() {
	return (
		<main className="compliance-page">
			{/* =====================================================
			    HERO
			===================================================== */}

			<section className="compliance-hero">
				<div className="compliance-hero-overlay"></div>

				<div className="compliance-container compliance-hero-content">
					<div className="compliance-hero-icon">
						<FaShieldAlt />
					</div>

					<span className="compliance-eyebrow">
						QUALITY • SAFETY • COMPLIANCE
					</span>

					<h1>
						Statutory
						<span> Compliance</span>
					</h1>

					<p>
						Our commitment to maintaining quality, safety, regulatory
						requirements and responsible diagnostic practices.
					</p>

					<div className="compliance-hero-actions">
						<a href="#compliance-framework" className="compliance-primary-btn">
							View Compliance
							<FaArrowRight />
						</a>

						<a href="#contact-compliance" className="compliance-secondary-btn">
							Contact Us
						</a>
					</div>
				</div>
			</section>

			{/* =====================================================
			    INTRO
			===================================================== */}

			<section className="compliance-intro">
				<div className="compliance-container">
					<div className="compliance-section-heading">
						<span className="compliance-tag">
							<FaFileAlt />
							OUR COMMITMENT
						</span>

						<h2>
							Committed to
							<span> Responsible Healthcare</span>
						</h2>

						<p>
							At Baunthiyal Path Labs & Imaging Centre, we believe that quality
							healthcare depends not only on advanced technology but also on
							responsible processes, patient safety and adherence to applicable
							regulatory requirements.
						</p>
					</div>

					<div className="compliance-highlight-grid">
						<div className="compliance-highlight-card">
							<div className="highlight-icon">
								<FaShieldAlt />
							</div>

							<div>
								<h3>Patient Safety</h3>

								<p>
									Safety-focused procedures throughout the diagnostic journey.
								</p>
							</div>
						</div>

						<div className="compliance-highlight-card">
							<div className="highlight-icon">
								<FaFlask />
							</div>

							<div>
								<h3>Quality Diagnostics</h3>

								<p>
									Focus on accurate testing, quality control and reliable
									reporting.
								</p>
							</div>
						</div>

						<div className="compliance-highlight-card">
							<div className="highlight-icon">
								<FaFileAlt />
							</div>

							<div>
								<h3>Documentation</h3>

								<p>
									Maintaining appropriate records and documentation for
									applicable requirements.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    COMPLIANCE FRAMEWORK
			===================================================== */}

			<section className="compliance-framework" id="compliance-framework">
				<div className="compliance-container">
					<div className="compliance-section-heading center">
						<span className="compliance-tag">
							<FaBalanceScale />
							COMPLIANCE FRAMEWORK
						</span>

						<h2>
							Our Key Areas of
							<span> Compliance</span>
						</h2>

						<p>
							Our compliance approach covers the regulatory, quality, safety and
							environmental requirements applicable to our diagnostic services.
						</p>
					</div>

					<div className="compliance-grid">
						{complianceItems.map((item) => (
							<div className="compliance-card" key={item.id}>
								<div className="compliance-card-top">
									<div className="compliance-card-icon">{item.icon}</div>

									<span className="compliance-status">
										<FaCheckCircle />
										{item.status}
									</span>
								</div>

								<h3>{item.title}</h3>

								<p>{item.description}</p>

								<div className="compliance-card-footer">
									<span>
										<FaCheckCircle />
										Quality & Safety Focus
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* =====================================================
			    QUALITY PRACTICES
			===================================================== */}

			<section className="compliance-quality">
				<div className="compliance-container">
					<div className="quality-layout">
						<div className="quality-content">
							<span className="compliance-tag">
								<FaFlask />
								QUALITY PRACTICES
							</span>

							<h2>
								Quality is at the
								<span> Heart of Our Work</span>
							</h2>

							<p>
								From sample collection to reporting, our processes are designed
								around accuracy, safety, traceability and patient care.
							</p>

							<div className="quality-list">
								{qualityPoints.map((point, index) => (
									<div className="quality-list-item" key={index}>
										<FaCheckCircle />
										<span>{point}</span>
									</div>
								))}
							</div>
						</div>

						<div className="quality-card">
							<div className="quality-card-icon">
								<FaShieldAlt />
							</div>

							<h3>Our Compliance Promise</h3>

							<p>
								We continuously work to maintain applicable quality, safety and
								regulatory requirements across our diagnostic services.
							</p>

							<div className="quality-card-line"></div>

							<span>Baunthiyal Path Labs & Imaging Centre</span>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    DOCUMENTS
			===================================================== */}

			<section className="compliance-documents">
				<div className="compliance-container">
					<div className="compliance-section-heading center">
						<span className="compliance-tag">
							<FaFileAlt />
							DOCUMENTATION
						</span>

						<h2>
							Compliance
							<span> Documents</span>
						</h2>

						<p>
							Relevant certificates, registrations and documents can be made
							available as applicable.
						</p>
					</div>

					<div className="document-notice">
						<div className="document-notice-icon">
							<FaFileAlt />
						</div>

						<div>
							<h3>Certificates & Registrations</h3>

							<p>
								For verification of specific registrations, certificates or
								approvals, please contact our centre directly.
							</p>
						</div>

						<a href="#contact-compliance" className="document-contact-btn">
							Contact Us
							<FaArrowRight />
						</a>
					</div>
				</div>
			</section>

			{/* =====================================================
			    CONTACT
			===================================================== */}

			<section className="compliance-contact" id="contact-compliance">
				<div className="compliance-container">
					<div className="compliance-contact-content">
						<span className="compliance-tag">
							<FaPhoneAlt />
							NEED MORE INFORMATION?
						</span>

						<h2>
							Have Questions About Our
							<span> Compliance?</span>
						</h2>

						<p>
							Our team can help you with information regarding applicable
							registrations, quality standards and diagnostic service
							requirements.
						</p>

						<div className="compliance-contact-actions">
							<a
								href="mailto:care@baunthiyal.com"
								className="compliance-primary-btn"
							>
								Contact Us
								<FaArrowRight />
							</a>

							<a href="tel:+919557069086" className="compliance-call-btn">
								<FaPhoneAlt />
								Call Us
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default StatutoryCompliance;
