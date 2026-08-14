import {
	FaTrash,
	FaFlask,
	FaCalendarCheck,
	FaShoppingCart,
	FaArrowLeft,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "../styles/Our_Services/Cart.css";

function CartPage() {
	const navigate = useNavigate();

	const { cart, removeFromCart, clearCart, cartTotal } = useCart();

	// -----------------------------------------
	// BOOK SELECTED TESTS
	// -----------------------------------------

	const handleBookTest = () => {
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

	// -----------------------------------------
	// EMPTY CART
	// -----------------------------------------

	if (!cart || cart.length === 0) {
		return (
			<section className="cart-page">
				<div className="cart-empty">
					<FaShoppingCart />

					<h2>Your Test Cart is Empty</h2>

					<p>
						Select diagnostic tests from Our Services and add them to your cart.
					</p>

					<button type="button" onClick={() => navigate("/our_services")}>
						<FaArrowLeft />
						Browse Tests
					</button>
				</div>
			</section>
		);
	}

	// -----------------------------------------
	// CART PAGE
	// -----------------------------------------

	return (
		<section className="cart-page">
			<div className="cart-container">
				{/* HEADER */}

				<div className="cart-header">
					<div>
						<span>YOUR TESTS</span>

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

				{/* CART ITEMS */}

				<div className="cart-items">
					{cart.map((test) => (
						<div className="cart-item" key={test.id}>
							{/* ICON */}

							<div className="cart-item-icon">
								<FaFlask />
							</div>

							{/* DETAILS */}

							<div className="cart-item-details">
								<span>{test.department}</span>

								<h3>{test.name}</h3>

								{test.shortName && <p>{test.shortName}</p>}

								<div className="cart-item-meta">
									<span>{test.sampleType}</span>

									<span>{test.tat}</span>
								</div>
							</div>

							{/* PRICE */}

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
						<span>Total Tests</span>

						<strong>{cart.length}</strong>
					</div>

					<div>
						<span>Total Amount</span>

						<strong className="cart-total">₹{cartTotal}</strong>
					</div>

					<div className="cart-actions">
						<button
							type="button"
							className="clear-cart-btn"
							onClick={clearCart}
						>
							Clear Cart
						</button>

						<button
							type="button"
							className="cart-book-btn"
							onClick={handleBookTest}
						>
							<FaCalendarCheck />
							Book Selected Tests
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CartPage;
