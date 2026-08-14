import "../../styles/About/Founder.css";

import FounderImage from "../../assets/about/doctor2.jpg";
import AbhishekImage from "../../assets/about/Abhishek.jpg";

import {
	FaUserMd,
	FaFlask,
	FaAward,
	FaQuoteLeft,
	FaMicroscope,
	FaShieldAlt,
	FaUsers,
	FaHeartbeat,
	FaBuilding,
	FaArrowRight,
} from "react-icons/fa";

/* =========================================================
   FOUNDERS DATA
========================================================= */

const founders = [
	{
		id: 1,

		badge: "FOUNDER",

		name: "G.C. Baunthiyal",

		firstName: "G.C.",

		lastName: "Baunthiyal",

		designation: "Founder & Chairman",

		image: FounderImage,

		icon: <FaUserMd />,

		quote:
			"With a strong vision for quality healthcare, he has contributed to building a trusted diagnostic laboratory focused on accuracy, reliability and patient care.",

		description:
			"With a strong vision for quality healthcare, he has contributed to building a trusted diagnostic laboratory focused on accuracy, reliability and patient care.",

		points: [
			{
				icon: <FaUsers />,
				title: "Leadership",
			},
			{
				icon: <FaMicroscope />,
				title: "Diagnostics",
			},
			{
				icon: <FaShieldAlt />,
				title: "Quality Care",
			},
		],
	},

	{
		id: 2,

		badge: "FOUNDER",

		name: "Dr. Abhishek Baunthiyal",

		firstName: "Dr. Abhishek",

		lastName: "Baunthiyal",

		designation: "MBBS, MD Path ·  Pathologist & Director",

		image: AbhishekImage,

		icon: <FaMicroscope />,

		quote:
			"Committed to making accurate and reliable diagnostics accessible to every patient through advanced technology, quality and patient-centred healthcare.",

		description:
			"Committed to making accurate and reliable diagnostics accessible to every patient through advanced technology, quality and patient-centred healthcare.",

		points: [
			{
				icon: <FaFlask />,
				title: "Pathology",
			},
			{
				icon: <FaBuilding />,
				title: "Diagnostics",
			},
			{
				icon: <FaHeartbeat />,
				title: "Patient Care",
			},
		],
	},
];

/* =========================================================
   FOUNDER COMPONENT
========================================================= */

function Founder() {
	return (
		<section className="founder-section">
			<div className="founder-container">
				{/* =================================================
				    SECTION HEADER
				================================================= */}

				<div className="founder-header">
					<span className="founder-section-tag">
						<span></span>
						OUR LEADERSHIP
						<span></span>
					</span>

					<h2>
						Leadership Behind <span>Trusted Diagnostics</span>
					</h2>

					<p>Experienced leadership. Quality healthcare. Better tomorrow.</p>
				</div>

				{/* =================================================
				    FOUNDER CARDS
				================================================= */}

				<div className="founder-grid">
					{founders.map((founder) => (
						<article className="founder-card" key={founder.id}>
							{/* =========================================
							    IMAGE
							========================================= */}

							<div className="founder-card-image-wrap">
								<div className="founder-card-image">
									<img
										src={founder.image}
										alt={`${founder.name} - Baunthiyal Path Labs`}
									/>

									<div className="founder-card-overlay"></div>

									<div className="founder-role-badge">
										<FaUserMd />
										<span>{founder.badge}</span>
									</div>
								</div>

								{/* Floating icon */}

								<div className="founder-floating-icon">{founder.icon}</div>
							</div>

							{/* =========================================
							    CONTENT
							========================================= */}

							<div className="founder-card-content">
								{/* NAME */}

								<h3>
									{founder.firstName} <span>{founder.lastName}</span>
								</h3>

								{/* DESIGNATION */}

								<div className="founder-designation">{founder.designation}</div>

								<div className="founder-title-line"></div>

								{/* =================================
								    QUOTE
								================================= */}

								<div className="founder-quote">
									<FaQuoteLeft />

									<p>{founder.quote}</p>
								</div>

								{/* =================================
								    DESCRIPTION
								================================= */}

								<p className="founder-description">{founder.description}</p>

								{/* =================================
								    POINTS
								================================= */}

								<div className="founder-points">
									{founder.points.map((point) => (
										<div className="founder-point" key={point.title}>
											<div className="founder-point-icon">{point.icon}</div>

											<span>{point.title}</span>
										</div>
									))}
								</div>

								{/* =================================
								    PROFILE BUTTON
								================================= */}

								<button type="button" className="founder-profile-btn">
									<span>View Profile</span>

									<FaArrowRight />
								</button>
							</div>
						</article>
					))}
				</div>

				{/* =================================================
				    TRUST STRIP
				================================================= */}

				<div className="founder-trust-strip">
					<div className="founder-trust-main">
						<div className="founder-trust-icon">
							<FaShieldAlt />
						</div>

						<div>
							<strong>
								Our leadership is our strength. Our commitment is your trust.
							</strong>

							<span>
								Accurate Diagnosis&nbsp; · &nbsp; Advanced Technology&nbsp; ·
								&nbsp; Compassionate Care
							</span>
						</div>
					</div>

					<div className="founder-trust-divider"></div>

					<div className="founder-trusted">
						<div className="founder-trusted-icon">
							<FaAward />
						</div>

						<div>
							<strong>Trusted by Thousands</strong>

							<span>Every Day</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Founder;
