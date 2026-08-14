import {
	FaShieldAlt,
	FaUserShield,
	FaDatabase,
	FaLock,
	FaWhatsapp,
	FaCookieBite,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaChevronRight,
} from "react-icons/fa";

import "../styles/PrivacyPolicy.css"

function PrivacyPolicy() {
	return (
		<main className="privacy-page">
			{/* =====================================================
			    HERO
			===================================================== */}

			<section className="privacy-hero">
				<div className="privacy-hero-container">
					<div className="privacy-hero-icon">
						<FaShieldAlt />
					</div>

					<div>
						<span className="privacy-eyebrow">YOUR PRIVACY MATTERS</span>

						<h1>Privacy Policy</h1>

						<p>
							We respect your privacy and are committed to protecting the
							information you share with Baunthiyal Path Labs & Imaging Centre
							Pvt. Ltd.
						</p>

						<div className="privacy-updated">Last Updated: August 2026</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    CONTENT
			===================================================== */}

			<section className="privacy-content-section">
				<div className="privacy-layout">
					{/* =================================================
					    SIDEBAR
					================================================= */}

					<aside className="privacy-sidebar">
						<div className="privacy-sidebar-card">
							<h3>Privacy Policy</h3>

							<a href="#introduction">
								Introduction
								<FaChevronRight />
							</a>

							<a href="#information">
								Information We Collect
								<FaChevronRight />
							</a>

							<a href="#usage">
								How We Use Information
								<FaChevronRight />
							</a>

							<a href="#sharing">
								Information Sharing
								<FaChevronRight />
							</a>

							<a href="#security">
								Data Security
								<FaChevronRight />
							</a>

							<a href="#cookies">
								Cookies
								<FaChevronRight />
							</a>

							<a href="#rights">
								Your Privacy Rights
								<FaChevronRight />
							</a>

							<a href="#contact">
								Contact Us
								<FaChevronRight />
							</a>
						</div>
					</aside>

					{/* =================================================
					    MAIN CONTENT
					================================================= */}

					<article className="privacy-article">
						{/* INTRODUCTION */}

						<section id="introduction" className="privacy-section">
							<div className="privacy-section-heading">
								<div className="privacy-section-icon">
									<FaUserShield />
								</div>

								<div>
									<span>01</span>
									<h2>Introduction</h2>
								</div>
							</div>

							<p>
								Baunthiyal Path Labs & Imaging Centre respects the privacy of
								patients, visitors, and users of our website.
							</p>

							<p>
								This Privacy Policy explains how we may collect, use, store, and
								protect information provided by you while using our website,
								health packages, diagnostic services, online booking services,
								and related communication channels.
							</p>

							<p>
								By using our website or submitting your information through our
								forms, you acknowledge that you have read and understood this
								Privacy Policy.
							</p>
						</section>

						{/* INFORMATION */}

						<section id="information" className="privacy-section">
							<div className="privacy-section-heading">
								<div className="privacy-section-icon">
									<FaDatabase />
								</div>

								<div>
									<span>02</span>
									<h2>Information We Collect</h2>
								</div>
							</div>

							<p>
								Depending on the service you use, we may collect information
								such as:
							</p>

							<div className="privacy-list-grid">
								<div className="privacy-list-item">
									<strong>Personal Information</strong>
									<p>
										Name, mobile number, email address, and other contact
										information.
									</p>
								</div>

								<div className="privacy-list-item">
									<strong>Booking Information</strong>
									<p>
										Selected tests, health packages, appointment details, and
										preferred collection options.
									</p>
								</div>

								<div className="privacy-list-item">
									<strong>Patient Information</strong>
									<p>
										Information necessary to provide diagnostic or
										healthcare-related services.
									</p>
								</div>

								<div className="privacy-list-item">
									<strong>Communication Information</strong>
									<p>
										Messages, enquiries, feedback, and information you provide
										when contacting us.
									</p>
								</div>

								<div className="privacy-list-item">
									<strong>Technical Information</strong>
									<p>
										Browser type, device information, IP-related technical
										information, and website usage information where applicable.
									</p>
								</div>
							</div>
						</section>

						{/* USAGE */}

						<section id="usage" className="privacy-section">
							<div className="privacy-section-heading">
								<div className="privacy-section-icon">
									<FaShieldAlt />
								</div>

								<div>
									<span>03</span>
									<h2>How We Use Your Information</h2>
								</div>
							</div>

							<p>
								Information provided by you may be used for purposes including:
							</p>

							<ul className="privacy-bullet-list">
								<li>Processing test and health package bookings.</li>

								<li>Arranging home sample collection where requested.</li>

								<li>Responding to enquiries and customer support requests.</li>

								<li>Communicating appointment or booking information.</li>

								<li>Providing diagnostic and related healthcare services.</li>

								<li>Improving our website, services, and user experience.</li>

								<li>
									Maintaining records required for legitimate business,
									operational, or legal purposes.
								</li>
							</ul>
						</section>

						{/* WHATSAPP */}

						<section className="privacy-highlight">
							<div className="privacy-highlight-icon">
								<FaWhatsapp />
							</div>

							<div>
								<h3>WhatsApp Communication</h3>

								<p>
									If you choose to contact us or book a service through
									WhatsApp, information you voluntarily provide may be processed
									through WhatsApp and our communication workflow.
								</p>

								<p>
									Please avoid sending unnecessary sensitive information through
									public or unsecured communication channels.
								</p>
							</div>
						</section>

						{/* SHARING */}

						<section id="sharing" className="privacy-section">
							<div className="privacy-section-heading">
								<div className="privacy-section-icon">
									<FaDatabase />
								</div>

								<div>
									<span>04</span>
									<h2>Information Sharing</h2>
								</div>
							</div>

							<p>
								We do not intend to sell or commercially trade your personal
								information.
							</p>

							<p>
								Information may be shared with authorised personnel, service
								providers, technology partners, healthcare professionals, or
								other parties where necessary to provide the requested service
								or where required by applicable law.
							</p>

							<p>
								We aim to limit information sharing to what is reasonably
								necessary for the relevant purpose.
							</p>
						</section>

						{/* SECURITY */}

						<section id="security" className="privacy-section">
							<div className="privacy-section-heading">
								<div className="privacy-section-icon">
									<FaLock />
								</div>

								<div>
									<span>05</span>
									<h2>Data Security</h2>
								</div>
							</div>

							<p>
								We take reasonable measures to protect information against
								unauthorised access, disclosure, alteration, or destruction.
							</p>

							<p>
								However, no method of electronic transmission or storage can be
								guaranteed to be completely secure.
							</p>
						</section>

						{/* COOKIES */}

						<section id="cookies" className="privacy-section">
							<div className="privacy-section-heading">
								<div className="privacy-section-icon">
									<FaCookieBite />
								</div>

								<div>
									<span>06</span>
									<h2>Cookies</h2>
								</div>
							</div>

							<p>
								Our website may use cookies or similar technologies to improve
								website functionality, understand website usage, and enhance the
								user experience.
							</p>

							<p>
								You may be able to control cookies through your browser
								settings. Disabling certain cookies may affect some website
								functionality.
							</p>
						</section>

						{/* RIGHTS */}

						<section id="rights" className="privacy-section">
							<div className="privacy-section-heading">
								<div className="privacy-section-icon">
									<FaUserShield />
								</div>

								<div>
									<span>07</span>
									<h2>Your Privacy Rights</h2>
								</div>
							</div>

							<p>
								Depending on applicable law and the nature of the information
								involved, you may have rights relating to your personal
								information, including requesting access, correction, or other
								appropriate action.
							</p>

							<p>
								To make a privacy-related request, please contact us using the
								details provided below.
							</p>
						</section>

						{/* CHILDREN */}

						<section className="privacy-section">
							<div className="privacy-section-heading">
								<div className="privacy-section-icon">
									<FaUserShield />
								</div>

								<div>
									<span>08</span>
									<h2>Children's Privacy</h2>
								</div>
							</div>

							<p>
								Our website is intended for general users and healthcare service
								enquiries. Where services involve minors, information should be
								provided by a parent, guardian, or other person authorised to do
								so.
							</p>
						</section>

						{/* POLICY CHANGES */}

						<section className="privacy-section">
							<div className="privacy-section-heading">
								<div className="privacy-section-icon">
									<FaShieldAlt />
								</div>

								<div>
									<span>09</span>
									<h2>Changes to This Policy</h2>
								</div>
							</div>

							<p>
								We may update this Privacy Policy from time to time to reflect
								changes in our services, technology, or applicable requirements.
							</p>

							<p>
								The updated version will be posted on this page with a revised
								"Last Updated" date.
							</p>
						</section>

						{/* CONTACT */}

						<section id="contact" className="privacy-contact">
							<div className="privacy-contact-content">
								<span className="privacy-eyebrow">PRIVACY QUESTIONS?</span>

								<h2>Contact Us</h2>

								<p>
									If you have questions, concerns, or requests regarding this
									Privacy Policy, please contact Baunthiyal Path Labs & Imaging
									Centre.
								</p>

								<div className="privacy-contact-grid">
									<div>
										<FaPhone />
										<div>
											<span>Phone</span>
											<strong>+91 9557069086</strong>
										</div>
									</div>

									<div>
										<FaEnvelope />
										<div>
											<span>Email</span>
											<strong>care@baunthiyallabs.com</strong>
										</div>
									</div>

									<div>
										<FaMapMarkerAlt />
										<div>
											<span>Location</span>
											<strong>Dehradun, Uttarakhand</strong>
										</div>
									</div>
								</div>
							</div>
						</section>
					</article>
				</div>
			</section>
		</main>
	);
}

export default PrivacyPolicy;
