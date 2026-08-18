import { useEffect, useState } from "react";
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

	/* =====================================================
	   ACTIVE LINK
	===================================================== */

	const isActive = (path) => {
		if (path === "/") {
			return location.pathname === "/";
		}

		return location.pathname.startsWith(path);
	};

	/* =====================================================
	   CLOSE MENU
	===================================================== */

	const closeMenu = () => {
		setIsOpen(false);
	};

	/* =====================================================
	   ESCAPE KEY
	===================================================== */

	useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === "Escape") {
				closeMenu();
			}
		};

		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, []);

	/* =====================================================
	   BODY SCROLL LOCK
	===================================================== */

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("mobile-menu-open");
		} else {
			document.body.classList.remove("mobile-menu-open");
		}

		return () => {
			document.body.classList.remove("mobile-menu-open");
		};
	}, [isOpen]);

	/* =====================================================
	   CLOSE WHEN ROUTE CHANGES
	===================================================== */

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	return (
		<>
			{/* =================================================
			    DESKTOP / MOBILE NAVBAR
			================================================= */}

			<nav className="navbar">
				<div className="navbar-panel">
					{/* DESKTOP TRUSTED */}

					<div className="navbar-trusted">
						<span className="trusted-dot"></span>

						<span>Trusted Diagnostics</span>
					</div>

					{/* DESKTOP LINKS */}

					<ul className="navbar-links desktop-navbar-links">
						{navigation.map((item) => (
							<li
								key={item.path}
								className={isActive(item.path) ? "active" : ""}
							>
								<Link to={item.path}>
									<span>{item.name}</span>

									<span className="nav-line"></span>
								</Link>
							</li>
						))}
					</ul>

					{/* DESKTOP ACTIONS */}

					<div className="navbar-actions desktop-navbar-actions">
						<a href="tel:+919557069086" className="nav-action call-action">
							<span className="nav-action-icon">
								<FaPhone />
							</span>

							<span className="nav-action-text">
								<small>CALL US</small>
								<strong>24 × 7</strong>
							</span>
						</a>

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

						<Link to="/cart" className="navbar-cart" aria-label="Shopping cart">
							<FaCartShopping />

							{cartCount > 0 && <span className="cart-count">{cartCount}</span>}
						</Link>
					</div>

					{/* =================================================
					    MOBILE HEADER
					================================================= */}

					<div className="navbar-mobile-top">
						<div className="navbar-mobile-trusted">
							<span className="trusted-dot"></span>

							<span>Trusted Diagnostics</span>
						</div>

						<button
							type="button"
							className="navbar-menu-button"
							onClick={() => setIsOpen(true)}
							aria-label="Open navigation menu"
							aria-expanded={isOpen}
						>
							<FaBars />
						</button>
					</div>
				</div>
			</nav>

			{/* =====================================================
			    MOBILE OVERLAY
			===================================================== */}

			<div
				className={`navbar-overlay ${isOpen ? "show" : ""}`}
				onClick={closeMenu}
				aria-hidden={!isOpen}
			/>

			{/* =====================================================
			    MOBILE DRAWER
			===================================================== */}

			<aside
				className={`mobile-navbar-drawer ${isOpen ? "open" : ""}`}
				aria-hidden={!isOpen}
			>
				{/* DRAWER HEADER */}

				<div className="mobile-drawer-header">
					<div className="mobile-trusted">
						<span className="trusted-dot"></span>

						<span>Trusted Diagnostics</span>
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

				{/* DRAWER LINKS */}

				<ul className="navbar-links mobile-navbar-links">
					{navigation.map((item) => (
						<li key={item.path} className={isActive(item.path) ? "active" : ""}>
							<Link to={item.path} onClick={closeMenu}>
								<span>{item.name}</span>
							</Link>
						</li>
					))}
				</ul>

				{/* DRAWER ACTIONS */}

				<div className="navbar-actions mobile-navbar-actions">
					<a
						href="tel:+919557069086"
						className="nav-action call-action"
						onClick={closeMenu}
					>
						<span className="nav-action-icon">
							<FaPhone />
						</span>

						<span className="nav-action-text">
							<small>CALL US</small>
							<strong>24 × 7</strong>
						</span>
					</a>

					<a
						href="https://wa.me/919557069086"
						target="_blank"
						rel="noopener noreferrer"
						className="nav-action whatsapp-action"
						onClick={closeMenu}
					>
						<span className="nav-action-icon">
							<FaWhatsapp />
						</span>

						<span className="nav-action-text">
							<small>WHATSAPP</small>
							<strong>Chat Now</strong>
						</span>
					</a>

					<Link
						to="/cart"
						className="navbar-cart"
						onClick={closeMenu}
						aria-label="Shopping cart"
					>
						<FaCartShopping />

						<span>View Cart</span>

						{cartCount > 0 && <span className="cart-count">{cartCount}</span>}
					</Link>
				</div>
			</aside>
		</>
	);
}

export default Navbar;
