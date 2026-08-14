import {
	FaArrowLeft,
	FaHome,
	FaHospital,
	FaWhatsapp,
	FaCheckCircle,
	FaMapMarkerAlt,
	FaUser,
	FaCalendarCheck,
	FaFlask,
	FaShoppingCart,
} from "react-icons/fa";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../context/CartContext";

import "../styles/OnlineBooking.css";

function OnlineBooking() {
	const navigate = useNavigate();
	const location = useLocation();

	const { cart } = useCart();

	const [bookingType, setBookingType] = useState("home");

	/*
	------------------------------------------------
	GET TESTS
	------------------------------------------------

	1. Direct Book Now:
	   state: { test }

	2. Cart:
	   state: { cart }

	3. Fallback:
	   use CartContext
	*/

	const singleTest = location.state?.test || null;

	const cartFromNavigation = location.state?.cart || [];

	let tests = [];

	if (singleTest) {
		// Book Now from TestDetails
		tests = [singleTest];
	} else if (
		Array.isArray(cartFromNavigation) &&
		cartFromNavigation.length > 0
	) {
		// Proceed to Booking from Cart
		tests = cartFromNavigation;
	} else if (Array.isArray(cart) && cart.length > 0) {
		// Fallback to CartContext
		tests = cart;
	}

	/*
	------------------------------------------------
	TOTAL
	------------------------------------------------
	*/

	const totalAmount = tests.reduce(
		(total, test) => total + Number(test.price || 0),
		0,
	);

	/*
	------------------------------------------------
	WHATSAPP
	------------------------------------------------
	*/

	const handleWhatsAppBooking = () => {
		if (tests.length === 0) {
			alert("Please select at least one test before booking.");
			navigate("/our_services");
			return;
		}

		const bookingTypeText =
			bookingType === "home" ? "Home Collection" : "Walk-in Patient";

		const testDetails = tests
			.map((test, index) => `${index + 1}. ${test.name} - ₹${test.price}`)
			.join("\n");

		const message = `Hello Baunthiyal Path Labs,

I am booking from the website.

Booking Type: ${bookingTypeText}

Test Details:
${testDetails}

Total Tests: ${tests.length}

Total Amount: ₹${totalAmount}

Please help me with my booking.

Thank you.`;

		/*
		--------------------------------------------
		PUT YOUR REAL WHATSAPP NUMBER HERE
		--------------------------------------------
		*/

		const whatsappNumber = "+918755920187";

		const whatsappUrl =
			`https://wa.me/${whatsappNumber}?text=` + encodeURIComponent(message);

		window.open(whatsappUrl, "_blank");
	};

	/*
	------------------------------------------------
	NO TEST
	------------------------------------------------
	*/

	if (tests.length === 0) {
		return (
			<section className="booking-empty">
				<div className="booking-empty-card">
					<FaShoppingCart />

					<h2>No Test Selected</h2>

					<p>
						Please select a diagnostic test before continuing with your booking.
					</p>

					<button type="button" onClick={() => navigate("/our_services")}>
						<FaArrowLeft />
						Browse Tests
					</button>
				</div>
			</section>
		);
	}

	/*
	------------------------------------------------
	PAGE
	------------------------------------------------
	*/

	return (
		<section className="booking-page">
			<div className="booking-container">
				{/* HEADER */}

				<div className="booking-header">
					<button
						type="button"
						className="booking-back"
						onClick={() => navigate(-1)}
					>
						<FaArrowLeft />
						Back
					</button>

					<span className="booking-tag">ONLINE TEST BOOKING</span>

					<h1>
						Book Your <span>Diagnostic Test</span>
					</h1>

					<p>Choose how you would like to receive your diagnostic service.</p>
				</div>

				{/* BOOKING TYPE */}

				<div className="booking-section-title">
					<FaCalendarCheck />

					<div>
						<h2>Choose Booking Type</h2>

						<p>Select the service that is convenient for you.</p>
					</div>
				</div>

				<div className="booking-options">
					{/* HOME COLLECTION */}

					<button
						type="button"
						className={`booking-option ${
							bookingType === "home" ? "active" : ""
						}`}
						onClick={() => setBookingType("home")}
					>
						<div className="booking-option-icon">
							<FaHome />
						</div>

						<div className="booking-option-content">
							<div className="booking-option-title">
								<h3>Home Collection</h3>

								{bookingType === "home" && (
									<FaCheckCircle className="booking-check" />
								)}
							</div>

							<p>Get your sample collected from the comfort of your home.</p>

							<div className="booking-features">
								<span>
									<FaCheckCircle />
									Convenient
								</span>

								<span>
									<FaCheckCircle />
									Professional Collection
								</span>

								<span>
									<FaCheckCircle />
									Save Your Time
								</span>
							</div>
						</div>
					</button>

					{/* WALK IN */}

					<button
						type="button"
						className={`booking-option ${
							bookingType === "walkin" ? "active" : ""
						}`}
						onClick={() => setBookingType("walkin")}
					>
						<div className="booking-option-icon">
							<FaHospital />
						</div>

						<div className="booking-option-content">
							<div className="booking-option-title">
								<h3>Walk-in Patient</h3>

								{bookingType === "walkin" && (
									<FaCheckCircle className="booking-check" />
								)}
							</div>

							<p>
								Visit our diagnostic centre for your test and sample collection.
							</p>

							<div className="booking-features">
								<span>
									<FaCheckCircle />
									Quick Service
								</span>

								<span>
									<FaCheckCircle />
									Expert Staff
								</span>

								<span>
									<FaCheckCircle />
									Lab Visit
								</span>
							</div>
						</div>
					</button>
				</div>

				{/* SELECTED TESTS */}

				<div className="booking-section-title tests-title">
					<FaFlask />

					<div>
						<h2>Selected Tests</h2>

						<p>
							{tests.length} test
							{tests.length > 1 ? "s" : ""} selected
						</p>
					</div>
				</div>

				<div className="booking-tests">
					{tests.map((test) => (
						<div className="booking-test" key={test.id}>
							<div className="booking-test-icon">
								<FaFlask />
							</div>

							<div className="booking-test-info">
								<span>{test.department}</span>

								<h3>{test.name}</h3>

								<div>
									<small>{test.sampleType}</small>
									<small>{test.tat}</small>
								</div>
							</div>

							<strong>₹{test.price}</strong>
						</div>
					))}
				</div>

				{/* SUMMARY */}

				<div className="booking-summary">
					<div className="booking-summary-info">
						<span>Booking Type</span>

						<strong>
							{bookingType === "home" ? "Home Collection" : "Walk-in Patient"}
						</strong>
					</div>

					<div className="booking-summary-info">
						<span>Total Tests</span>

						<strong>{tests.length}</strong>
					</div>

					<div className="booking-summary-total">
						<span>Total Amount</span>

						<strong>₹{totalAmount}</strong>
					</div>

					<button
						type="button"
						className="whatsapp-booking-btn"
						onClick={handleWhatsAppBooking}
					>
						<FaWhatsapp />

						<span>Confirm Booking on WhatsApp</span>
					</button>

					<p className="booking-note">
						<FaCheckCircle />
						Your booking request will open directly in WhatsApp.
					</p>
				</div>

				{/* FEATURES */}

				<div className="booking-highlights">
					<div>
						<FaHome />

						<strong>Home Collection</strong>

						<span>Sample collection at your doorstep</span>
					</div>

					<div>
						<FaHospital />

						<strong>Walk-in Service</strong>

						<span>Visit our diagnostic centre</span>
					</div>

					<div>
						<FaUser />

						<strong>Expert Team</strong>

						<span>Professional diagnostic services</span>
					</div>

					<div>
						<FaMapMarkerAlt />

						<strong>Dehradun</strong>

						<span>Trusted local diagnostic service</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OnlineBooking;
