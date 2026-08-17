import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
	FaBars,
	FaCartShopping,
	FaPhone,
	FaWhatsapp,
	FaXmark,
} from "react-icons/fa6";

import "./Navbar.css";

import { useCart } from "../../context/CartContext";

function Navbar() {
	const { cartCount } = useCart();

	const location = useLocation();

	const [isOpen, setIsOpen] = useState(false);

	const navRef = useRef(null);

	const navigation = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About Us",
			path: "/about",
		},
		{
			name: "Health Packages",
			path: "/health_package",
		},
		{
			name: "Our Services",
			path: "/our_services",
		},
		{
			name: "Panels",
			path: "/panels",
		},
		{
			name: "Gallery",
			path: "/gallery",
		},
		{
			name: "Careers",
			path: "/careers",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	];

	/* ===============================
	   ACTIVE LINK
	================================ */

	const isActive = (path) => {
		if (path === "/") {
			return location.pathname === "/";
		}

		return location.pathname.startsWith(path);
	};

	/* ===============================
	   CLOSE MENU
	================================ */

	const closeMenu = () => {
		setIsOpen(false);
	};

	/* ===============================
	   OUTSIDE CLICK
	================================ */

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	/* ===============================
	   ESCAPE
	================================ */

	useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, []);

	/* ===============================
	   BODY SCROLL
	================================ */

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<nav className="navbar" ref={navRef}>
			{/* =========================
			    MOBILE MENU BUTTON
			========================= */}

			<div className="navbar-mobile-top">
				<div className="navbar-mobile-trusted">
					<span className="trusted-dot"></span>
					Trusted Diagnostics
				</div>

				<button
					type="button"
					className="navbar-menu-button"
					onClick={() => setIsOpen(true)}
					aria-label="Open navigation menu"
				>
					<FaBars />
				</button>
			</div>

			{/* =========================
			    OVERLAY
			========================= */}

			<div
				className={`navbar-overlay ${isOpen ? "show" : ""}`}
				onClick={closeMenu}
			/>

			{/* =========================
			    NAV PANEL
			========================= */}

			<div className={`navbar-panel ${isOpen ? "open" : ""}`}>
				{/* =====================
				    MOBILE HEADER
				===================== */}

				<div className="mobile-drawer-header">
					<div className="mobile-trusted">
						<span className="trusted-dot"></span>
						Trusted Diagnostics
					</div>

					<button
						type="button"
						className="mobile-close"
						onClick={closeMenu}
						aria-label="Close navigation menu"
					>
						<FaXmark />
					</button>
				</div>

				{/* =====================
				    DESKTOP TRUST BADGE
				===================== */}

				<div className="navbar-trusted">
					<span className="trusted-dot"></span>

					<span>Trusted Diagnostics</span>
				</div>

				{/* =====================
				    NAVIGATION
				===================== */}

				<ul className="navbar-links">
					{navigation.map((item) => (
						<li key={item.path} className={isActive(item.path) ? "active" : ""}>
							<Link to={item.path} onClick={closeMenu}>
								<span>{item.name}</span>

								<span className="nav-line"></span>
							</Link>
						</li>
					))}
				</ul>

				{/* =====================
				    ACTIONS
				===================== */}

				<div className="navbar-actions">
					{/* CALL */}

					<a href="tel:+919557069086" className="nav-action call-action">
						<span className="nav-action-icon">
							<FaPhone />
						</span>

						<span className="nav-action-text">
							<small>CALL US</small>
							<strong>24 × 7</strong>
						</span>
					</a>

					{/* WHATSAPP */}

					<a
						href="https://wa.me/919557069086"
						target="_blank"
						rel="noopener noreferrer"
						className="nav-action whatsapp-action"
					>
						<span className="nav-action-icon">
							<FaWhatsapp />
						</span>

						<span className="nav-action-text">
							<small>WHATSAPP</small>
							<strong>Chat Now</strong>
						</span>
					</a>

					{/* CART */}

					<Link
						to="/cart"
						className="navbar-cart"
						onClick={closeMenu}
						aria-label="Shopping cart"
					>
						<FaCartShopping />

						{cartCount > 0 && <span className="cart-count">{cartCount}</span>}
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
