import {
	FaTimes,
	FaFlask,
	FaClock,
	FaTint,
	FaBuilding,
	FaCalendarCheck,
	FaShoppingCart,
	FaCheck,
} from "react-icons/fa";
import "../../styles/Our_Services/TestDetails.css";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";

function TestDetails({ test, onClose }) {
	const { addToCart, isInCart } = useCart();
	const navigate = useNavigate();
	const handleBookTest = () => {
		navigate("/online-booking", {
			state: {
				test,
			},
		});
	};
	if (!test) return null;

	const alreadyInCart = isInCart(test.id);

	const handleAddToCart = () => {
		addToCart(test);
	};

	
	return (
		<div className="test-modal-overlay" onClick={onClose}>
			<div className="test-modal" onClick={(event) => event.stopPropagation()}>
				{/* CLOSE */}

				<button
					type="button"
					className="test-modal-close"
					onClick={onClose}
					aria-label="Close"
				>
					<FaTimes />
				</button>

				{/* HEADER */}

				<div className="test-details-header">
					<div className="test-details-icon">
						<FaFlask />
					</div>

					<div>
						<span className="test-details-department">{test.department}</span>

						<h2>{test.name}</h2>

						{test.shortName && (
							<span className="test-short-name">{test.shortName}</span>
						)}
					</div>
				</div>

				{/* PRICE */}

				<div className="test-details-price">
					<span>Test Price</span>

					<strong>₹{test.price}</strong>
				</div>

				{/* DETAILS */}

				<div className="test-details-info">
					<div className="test-info-item">
						<FaTint />

						<div>
							<small>Sample Type</small>

							<strong>{test.sampleType}</strong>
						</div>
					</div>

					<div className="test-info-item">
						<FaClock />

						<div>
							<small>Report Time</small>

							<strong>{test.tat}</strong>
						</div>
					</div>

					<div className="test-info-item">
						<FaBuilding />

						<div>
							<small>Department</small>

							<strong>{test.department}</strong>
						</div>
					</div>

					<div className="test-info-item">
						<FaCalendarCheck />

						<div>
							<small>Category</small>

							<strong>{test.category}</strong>
						</div>
					</div>
				</div>

				{/* ABOUT */}

				<div className="test-details-about">
					<h3>About This Test</h3>

					<p>
						{test.about ||
							"This diagnostic test helps in the clinical assessment of the patient's health."}
					</p>
				</div>

				{/* ACTIONS */}

				<div className="test-details-actions">
					{/* ADD TO CART */}

					<button
						type="button"
						className={`add-to-cart-btn ${alreadyInCart ? "added" : ""}`}
						onClick={handleAddToCart}
						disabled={alreadyInCart}
					>
						{alreadyInCart ? (
							<>
								<FaCheck />
								Added to Cart
							</>
						) : (
							<>
								<FaShoppingCart />
								Add to Cart
							</>
						)}
					</button>

					{/* BOOK NOW */}

					<button
						type="button"
						className="book-test-btn"
						onClick={handleBookTest}
					>
						<FaCalendarCheck />
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default TestDetails;
