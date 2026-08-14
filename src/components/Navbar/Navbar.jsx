import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo_baunthiyal.svg";
import "./Navbar.css";
import { useCart } from "../../context/CartContext"
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
	FaXTwitter,
	FaChevronDown,
	FaXmark,
	FaCartShopping,
} from "react-icons/fa6";
import { services } from "../../Services";
import { Patients_Services } from "../../Patients_Services";

function Navbar() {
	const { cartCount } = useCart();
	const [isOpen, setIsOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const navRef = useRef(null);

	// Close on outside click (desktop dropdowns / accidental taps)
	useEffect(() => {
		function handleClickOutside(e) {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setOpenDropdown(null);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Close drawer on Escape
	useEffect(() => {
		function handleEsc(e) {
			if (e.key === "Escape") closeAll();
		}
		document.addEventListener("keydown", handleEsc);
		return () => document.removeEventListener("keydown", handleEsc);
	}, []);

	// Let the Footer's "Menu" tab open this drawer from anywhere on the page
	useEffect(() => {
		function handleOpenMobileNav() {
			setIsOpen(true);
		}
		window.addEventListener("open-mobile-nav", handleOpenMobileNav);
		return () =>
			window.removeEventListener("open-mobile-nav", handleOpenMobileNav);
	}, []);

	// Lock page scroll while the drawer is open
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	function toggleDropdown(key) {
		setOpenDropdown((prev) => (prev === key ? null : key));
	}

	function closeAll() {
		setIsOpen(false);
		setOpenDropdown(null);
	}

	return (
		<nav className="navbar" ref={navRef}>
			<div className="navbar-top">
				<button>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

			{/* Dark backdrop — mobile only, click to close */}
			<div
				className={`nav-overlay ${isOpen ? "show" : ""}`}
				onClick={closeAll}
				aria-hidden="true"
			/>

			<div id="navbar-panel" className={`navbar-panel ${isOpen ? "open" : ""}`}>
				{/* Drawer header — visible only on mobile */}
				<div className="drawer-header">
					<img src={Logo} alt="Baunthiyal Path Labs" className="drawer-logo" />
					<button
						type="button"
						className="drawer-close"
						onClick={closeAll}
						aria-label="Close menu"
					>
						<FaXmark />
					</button>
				</div>

				<ul className="navbar-links">
					<li>
						<Link to="/" onClick={closeAll}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" onClick={closeAll}>
							About Us
						</Link>
					</li>
					<li>
						<Link to="/health_package" onClick={closeAll}>
							Health Packages
						</Link>
					</li>

					<li
						className={`dropdown ${openDropdown === "services" ? "open" : ""}`}
					>
						<div className="dropdown-head">
							<Link to="/our_services" onClick={closeAll}>
								Our Services
							</Link>
							{/* <button
								type="button"
								className="dropdown-toggle"
								onClick={() => toggleDropdown("services")}
								aria-expanded={openDropdown === "services"}
								aria-label="Toggle Our Services submenu"
							>
								<FaChevronDown />
							</button> */}
						</div>
						{/* <ul className="dropdown-menu">
							{services.map((service) => (
								<li key={service.path}>
									<Link to={service.path} onClick={closeAll}>
										{service.name}
									</Link>
								</li>
							))}
						</ul> */}
					</li>

					<li>
						<Link to="/panels" onClick={closeAll}>
							Panels
						</Link>
					</li>

					{/* <li className={`dropdown ${openDropdown === "patients" ? "open" : ""}`}>
						<div className="dropdown-head">
							<Link to="/for_patients" onClick={closeAll}>For_Patients</Link>
							<button
								type="button"
								className="dropdown-toggle"
								onClick={() => toggleDropdown("patients")}
								aria-expanded={openDropdown === "patients"}
								aria-label="Toggle For Patients submenu"
							>
								<FaChevronDown />
							</button>
						</div>
						<ul className="dropdown-menu">
							{Patients_Services.map((patients) => (
								<li key={patients.path}>
									<Link to={patients.path} onClick={closeAll}>
										{patients.name}
									</Link>
								</li>
							))}
						</ul>
					</li> */}

					<li>
						<Link to="/gallery" onClick={closeAll}>
							Gallery
						</Link>
					</li>
					<li>
						<Link to="/careers" onClick={closeAll}>
							Careers
						</Link>
					</li>
					<li>
						<Link to="/contact" onClick={closeAll}>
							Contact Us
						</Link>
					</li>
				</ul>
				<div className="navbar-actions">
					<Link to="/cart" className="navbar-cart" onClick={closeAll}>
						<FaCartShopping />

						<span>Cart</span>

						{cartCount > 0 && <span className="cart-count">{cartCount}</span>}
					</Link>
				</div>

				<div className="social-icons">
					<a href="https://www.facebook.com/baunthiyallabs">
						<FaFacebookF />
					</a>
					
					
					<a href="https://www.youtube.com/@baunthiyalpathlabs">
						<FaYoutube />
					</a>
					<a
						href="https://www.instagram.com/baunthiyallabs"
					>
						<FaInstagram />
					</a>
				</div>
				{/* <div className="cart">
					<Link to="/cart" className="navbar-cart">
						<FaShoppingCart />
						{cartCount > 0 && <span className="cart-count">{cartCount}</span>}
					</Link>
				</div> */}
			</div>
		</nav>
	);
}

export default Navbar;
