import {
	FaShoppingCart,
	FaTrash,
	FaArrowLeft,
	FaCalendarCheck,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import "../../styles/Our_Services/Cart.css";

function Cart() {
	const navigate = useNavigate();

	const { cart, removeFromCart, clearCart, cartTotal } = useCart();

	const handleProceedToBooking = () => {
		if (!cart || cart.length === 0) {
			alert("Please select at least one test before booking.");
			return;
		}

		navigate("/online-booking", {
			state: {
				cart: cart,
			},
		});
	};

	if (!cart || cart.length === 0) {
		return (
			<section className="cart-page">
				<div className="cart-empty">
					<FaShoppingCart />

					<h2>Your Test Cart is Empty</h2>

					<p>Select diagnostic tests and add them to your cart.</p>

					<button type="button" onClick={() => navigate("/our_services")}>
						<FaArrowLeft />
						Browse Tests
					</button>
				</div>
			</section>
		);
	}

	return (
		<section className="cart-page">
			<div className="cart-container">
				{/* HEADER */}

				<div className="cart-header">
					<div>
						<span>YOUR SELECTION</span>

						<h1>Test Cart</h1>

						<p>
							{cart.length} test
							{cart.length > 1 ? "s" : ""} selected
						</p>
					</div>

					<button type="button" className="cart-clear-btn" onClick={clearCart}>
						Clear Cart
					</button>
				</div>

				{/* ITEMS */}

				<div className="cart-items">
					{cart.map((test) => (
						<div className="cart-item" key={test.id}>
							<div className="cart-item-icon">
								<FaShoppingCart />
							</div>

							<div className="cart-item-details">
								<span>{test.department}</span>

								<h3>{test.name}</h3>

								<div className="cart-item-meta">
									<span>{test.sampleType}</span>

									<span>{test.tat}</span>
								</div>
							</div>

							<div className="cart-item-price">
								<strong>₹{test.price}</strong>

								<button type="button" onClick={() => removeFromCart(test.id)}>
									<FaTrash />
									Remove
								</button>
							</div>
						</div>
					))}
				</div>

				{/* SUMMARY */}

				<div className="cart-summary">
					<div>
						<span>Selected Tests</span>
						<strong>{cart.length}</strong>
					</div>

					<div>
						<span>Total Amount</span>

						<strong className="cart-total">₹{cartTotal}</strong>
					</div>

					<button
						type="button"
						className="cart-book-btn"
						onClick={handleProceedToBooking}
					>
						<FaCalendarCheck />
						Proceed to Booking
					</button>
				</div>
			</div>
		</section>
	);
}

export default Cart;
