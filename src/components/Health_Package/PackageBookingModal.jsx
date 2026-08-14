import {
	FaTimes,
	FaFlask,
	FaClock,
	FaHome,
	FaCheckCircle,
} from "react-icons/fa";

import "../../styles/Our_Services/PackageBookingModal.css";

function PackageBookingModal({ packageData, onClose }) {
	if (!packageData) return null;

	const whatsappNumber = "918755920187"; // Replace

	const message = `Hi Baunthiyal Path Labs,

I want to book the following Health Package.

Package: ${packageData.name}
Price: ₹${packageData.price}

Please help me with the booking.`;

	const bookOnWhatsapp = () => {
		window.open(
			`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

			"_blank",
		);
	};

	return (
		<div className="package-modal-overlay" onClick={onClose}>
			<div className="package-modal" onClick={(e) => e.stopPropagation()}>
				<button className="package-close" onClick={onClose}>
					<FaTimes />
				</button>

				<span className="package-label">PACKAGE DETAILS</span>

				<h2>{packageData.name}</h2>

				<p>{packageData.category}</p>

				<div className="package-price-box">
					<del>₹{packageData.originalPrice}</del>

					<strong>₹{packageData.price}</strong>

					<span>Save ₹{packageData.originalPrice - packageData.price}</span>
				</div>

				<div className="package-top-info">
					<div>
						<FaFlask />
						{packageData.parameterCount}+ Parameters
					</div>

					<div>
						<FaClock />
						{packageData.tat}
					</div>

					<div>
						<FaHome />
						Home Collection
					</div>
				</div>

				<div className="parameter-section">
					<h3>Tests Included</h3>

					<div className="parameter-grid">
						{packageData.parameters.map((item, index) => (
							<div key={index} className="parameter-item">
								<FaCheckCircle />

								{item}
							</div>
						))}
					</div>
				</div>

				<button className="whatsapp-book-btn" onClick={bookOnWhatsapp}>
					Book This Package on WhatsApp
				</button>
			</div>
		</div>
	);
}

export default PackageBookingModal;
