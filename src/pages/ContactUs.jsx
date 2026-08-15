import React, { useState } from "react";
import "../styles/ContactUs.css";

import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaWhatsapp,
	FaEnvelope,
	FaClock,
	FaDirections,
	FaUpload,
	FaPaperPlane,
	FaBuilding,
	FaCheckCircle,
} from "react-icons/fa";

// ======================================================
// CENTRE DATA
// Add more centres here in the future
// ======================================================
import main_lab from "../assets/centres/clement-town.jpg";
import race_course from "../assets/centres/race-course.jpg";
const centres = [
	{
		id: 1,
		name: "Clement Town Main Laboratory",
		type: "Main Laboratory",
		address: "Lane C-8, Turner Road, Clement Town, Dehradun",
		image: main_lab,

		phone: "tel:+919557069086",

		map: "https://www.google.com/maps/search/?api=1&query=Lane+C-8+Turner+Road+Clement+Town+Dehradun",
	},

	{
		id: 2,
		name: "Race Course Centre",
		type: "Dehradun Centre 2",
		address: "Race Course, Near PNB Bank, Dehradun",
		image: race_course,

		phone: "tel:+919557069086",

		map: "https://maps.app.goo.gl/UqCZRCPX6QMoYtGt6",
	},
];

// ======================================================
// MAIN COMPONENT
// ======================================================

function ContactUs() {
	// Prescription selected by user
	const [prescription, setPrescription] = useState(null);

	// Form data
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		centre: "",
		message: "",
		callback: false,
	});

	// ======================================================
	// HANDLE INPUT
	// ======================================================

const handleSubmit = async (e) => {
	e.preventDefault();

	const whatsappNumber = "+918755920187";

	const message = `
Hello Baunthiyal Path Labs,

I would like to contact you regarding diagnostic services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Preferred Centre: ${formData.centre || "Not selected"}

Message:
${formData.message}

Callback:
${formData.callback ? "Yes - Please call me back within 2 minutes" : "No"}
  `.trim();

	// ==========================================
	// IF PRESCRIPTION EXISTS
	// ==========================================

	if (prescription) {
		// Check whether browser supports file sharing
		if (
			navigator.share &&
			navigator.canShare &&
			navigator.canShare({
				files: [prescription],
			})
		) {
			try {
				await navigator.share({
					title: "Baunthiyal Path Labs",
					text: message,
					files: [prescription],
				});

				return;
			} catch (error) {
				// User cancelled sharing
				if (error.name === "AbortError") {
					return;
				}

				console.log("File sharing failed:", error);
			}
		}

		// ==========================================
		// DESKTOP / UNSUPPORTED BROWSER FALLBACK
		// ==========================================

		const whatsappURL =
			`https://wa.me/${whatsappNumber}` +
			`?text=${encodeURIComponent(
				message +
					`\n\nPrescription: ${prescription.name}\n` +
					`Please attach the prescription manually in WhatsApp.`,
			)}`;

		window.open(whatsappURL, "_blank");

		return;
	}

	// ==========================================
	// NO PRESCRIPTION
	// ==========================================

	const whatsappURL =
		`https://wa.me/${whatsappNumber}` + `?text=${encodeURIComponent(message)}`;

	window.open(whatsappURL, "_blank");
};

	// ======================================================
	// PRESCRIPTION UPLOAD
	// ======================================================

	const handlePrescription = (e) => {
		const file = e.target.files[0];

		if (!file) {
			setPrescription(null);
			return;
		}

		setPrescription(file);
	};

	// ======================================================
	// FORM SUBMIT
	// ======================================================

	 const handleChange = (e) => {
			const { name, value, type, checked } = e.target;

			setFormData((previous) => ({
				...previous,
				[name]: type === "checkbox" ? checked : value,
			}));
		};

	return (
		<main className="contact-page">
			{/* ==================================================
          HERO
      ================================================== */}

			<section className="contact-hero">
				<div className="contact-hero-inner">
					<span className="contact-tag">
						<FaBuilding />
						Contact Baunthiyal Path Labs
					</span>

					<h1>
						We're Here to
						<span> Help You</span>
					</h1>

					<p>
						Visit our diagnostic centres in Dehradun or contact our team for
						pathology, radiology, home collection and healthcare partnership
						services.
					</p>
				</div>
			</section>

			{/* ==================================================
          OUR CENTRES
      ================================================== */}

			<section className="contact-centres">
				<div className="contact-section-heading">
					<span className="contact-tag">Our Locations</span>

					<h2>Visit Our Diagnostic Centres</h2>

					<p>
						Choose the centre convenient for you and get reliable pathology and
						radiology services from our team.
					</p>
				</div>

				{/* CENTRE GRID */}

				<div className="centres-grid">
					{centres.map((centre) => (
						<article className="centre-card" key={centre.id}>
							{/* IMAGE */}

							<div className="centre-image">
								<img src={centre.image} alt={centre.name} loading="lazy" />

								<span className="centre-label">{centre.type}</span>
							</div>

							{/* CONTENT */}

							<div className="centre-content">
								<h3>{centre.name}</h3>

								{/* ADDRESS */}

								<div className="centre-address">
									<FaMapMarkerAlt />

									<span>{centre.address}</span>
								</div>

								{/* ACTIONS */}

								<div className="centre-actions">
									<a
										href={centre.map}
										target="_blank"
										rel="noopener noreferrer"
										className="centre-btn centre-btn-primary"
									>
										<FaDirections />
										Get Directions
									</a>

									<a
										href={centre.phone}
										className="centre-btn centre-btn-outline"
									>
										<FaPhoneAlt />
										Call Centre
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* ==================================================
          CONTACT MAIN
      ================================================== */}

			<section className="contact-main">
				{/* ==================================================
            LEFT INFORMATION CARD
        ================================================== */}

				<div className="contact-info-card">
					<h2>Let's Talk</h2>

					<p>
						Have a question about a test, home collection, health package or
						diagnostic service? Our team is ready to help.
					</p>

					<div className="contact-info-list">
						{/* PHONE */}

						<div className="contact-info-item">
							<div className="contact-info-icon">
								<FaPhoneAlt />
							</div>

							<div className="contact-info-text">
								<strong>Call Us</strong>

								<a href="tel:+9557069076">+91 95570 69076</a>
							</div>
						</div>

						{/* EMAIL */}

						<div className="contact-info-item">
							<div className="contact-info-icon">
								<FaEnvelope />
							</div>

							<div className="contact-info-text">
								<strong>Email Us</strong>

								<a href="mailto:info@baunthiyallabs.com">
									care@baunthiyallabs.com
									<br />
									baunthiyallabs@gmail.com
								</a>
							</div>
						</div>

						{/* LOCATION */}

						<div className="contact-info-item">
							<div className="contact-info-icon">
								<FaMapMarkerAlt />
							</div>

							<div className="contact-info-text">
								<strong>Serving Dehradun</strong>

								<span>Clement Town & Race Course</span>
							</div>
						</div>

						{/* TIMING */}

						<div className="contact-info-item">
							<div className="contact-info-icon">
								<FaClock />
							</div>

							<div className="contact-info-text">
								<strong>Working Hours</strong>

								<span>
									Monday - Saturday
									<br />
									7:00 AM - 8:00 PM
									<br />
									Sunday
									<br />
									7:00 AM - 2:00 PM
								</span>
							</div>
						</div>
					</div>

					{/* WHATSAPP */}

					<a
						href="https://wa.me/919557069086"
						target="_blank"
						rel="noopener noreferrer"
						className="whatsapp-contact"
					>
						<FaWhatsapp />
						Chat With Us on WhatsApp
					</a>
				</div>

				{/* ==================================================
            MESSAGE FORM
        ================================================== */}

				<div className="message-card">
					<h2>Send Us a Message</h2>

					<p>
						Fill in your details and our team will get back to you as soon as
						possible.
					</p>

					<form className="contact-form" onSubmit={handleSubmit}>
						{/* ================================================
        NAME + PHONE
    ================================================= */}

						<div className="form-row">
							<div className="form-group">
								<label htmlFor="name">Your Name *</label>

								<input
									id="name"
									type="text"
									name="name"
									placeholder="Enter your name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="form-group">
								<label htmlFor="phone">Phone Number *</label>

								<input
									id="phone"
									type="tel"
									name="phone"
									placeholder="Enter phone number"
									value={formData.phone}
									onChange={handleChange}
									required
								/>
							</div>
						</div>

						{/* ================================================
        EMAIL + CENTRE
    ================================================= */}

						<div className="form-row">
							<div className="form-group">
								<label htmlFor="email">Email Address</label>

								<input
									id="email"
									type="email"
									name="email"
									placeholder="Enter email address"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="centre">Preferred Centre</label>

								<select
									id="centre"
									name="centre"
									value={formData.centre}
									onChange={handleChange}
								>
									<option value="">Select Centre</option>

									{centres.map((centre) => (
										<option key={centre.id} value={centre.name}>
											{centre.name}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* ================================================
        MESSAGE
    ================================================= */}

						<div className="form-group">
							<label htmlFor="message">Message *</label>

							<textarea
								id="message"
								name="message"
								placeholder="How can we help you?"
								value={formData.message}
								onChange={handleChange}
								required
							/>
						</div>

						{/* ================================================
        PRESCRIPTION UPLOAD
    ================================================= */}

						<div className="form-group">
							<label htmlFor="prescription">Upload Prescription</label>

							<div className="prescription-upload">
								<FaUpload />

								<strong>
									{prescription
										? prescription.name
										: "Upload your prescription"}
								</strong>

								<span>JPG, PNG or PDF • Maximum 5 MB</span>

								<input
									id="prescription"
									type="file"
									accept=".jpg,.jpeg,.png,.pdf"
									onChange={handlePrescription}
								/>
							</div>

							{/* Selected file status */}

							{prescription && (
								<div className="upload-status">
									<FaCheckCircle />

									<span>Prescription selected successfully</span>
								</div>
							)}
						</div>

						{/* ================================================
        CALLBACK
    ================================================= */}

						<div className="callback-box">
							<input
								type="checkbox"
								id="callback"
								name="callback"
								checked={formData.callback}
								onChange={handleChange}
							/>

							<label htmlFor="callback">
								<FaCheckCircle />

								<span>Call me back within 2 minutes</span>
							</label>
						</div>

						{/* ================================================
        SUBMIT
    ================================================= */}

						<button type="submit" className="contact-submit">
							<FaWhatsapp />
							Send via WhatsApp
							<FaPaperPlane />
						</button>
					</form>
				</div>
			</section>
		</main>
	);
}

export default ContactUs;
