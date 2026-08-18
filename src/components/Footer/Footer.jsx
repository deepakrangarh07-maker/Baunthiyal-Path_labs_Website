import { useState } from "react";
import { Link } from "react-router-dom";

import NABL from "../../assets/nabl.png";
import NABH from "../../assets/nabh.png";
import ISO from "../../assets/ISO_9001-2015.svg";

import { useCart } from "../../context/CartContext";

import {
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaWhatsapp,
	FaPhone,
	FaBars,
	FaCartShopping,
	FaArrowRight,
} from "react-icons/fa6";

import "./Footer.css";

const PHONE_NUMBER = "+919557069086";
const WHATSAPP_NUMBER = "919557069086";

function Footer() {
	const [showCallback, setShowCallback] = useState(false);
	const { cartCount } = useCart();

	const openMobileMenu = () => {
		window.dispatchEvent(new CustomEvent("open-mobile-nav"));
	};

	return (
		<>
			<footer className="footer">
				{/* =====================================================
				    CTA STRIP
				===================================================== */}

				<div className="trust-strip">
					<div className="trust-container">
						<div className="cta-content">
							<div className="cta-icon">
								<FaPhone />
							</div>

							<div className="cta-text">
								<span>NEED HELP?</span>

								<h3>Not sure which test to book?</h3>

								<p>
									Talk to our healthcare team and we'll help you choose the
									right diagnostic service.
								</p>
							</div>
						</div>

						<a href={`tel:${PHONE_NUMBER}`} className="call-now-btn">
							<FaPhone />
							<span>Call Now</span>
							<FaArrowRight />
						</a>
					</div>
				</div>

				{/* =====================================================
				    MAIN FOOTER
				===================================================== */}

				<div className="footer-main">
					<div className="footer-top">
						{/* =================================================
						    BRAND
						================================================= */}

						<div className="footer-brand">
							<div className="brand-heading">
								<span className="brand-line"></span>

								<h2>
									Baunthiyal Path Labs &amp;
									<br />
									Imaging Centre Pvt. Ltd.
								</h2>
							</div>

							<div className="footer-certificates">
								<div className="certificate">
									<img src={NABL} alt="NABL Certified" />
								</div>

								<div className="certificate">
									<img src={NABH} alt="NABH Accredited" />
								</div>

								<div className="certificate">
									<img src={ISO} alt="ISO 9001 Certified" />
								</div>
							</div>

							<p className="brand-description">
								With a presence in 50+ Collection Centres, Baunthiyal Path Labs
								offers quick, affordable and hassle-free home sample collection
								backed by NABL accredited laboratories.
							</p>

							<div className="brand-trust">
								<span>
									<span className="trust-dot"></span>
									Trusted Diagnostics
								</span>

								<span>
									<span className="trust-dot"></span>
									Quality Assured
								</span>
							</div>
						</div>

						{/* =================================================
						    LINKS
						================================================= */}

						<div className="footer-links">
							<h3>Important Links</h3>

							<div className="footer-heading-line"></div>

							<div className="link-grid">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>

									<li>
										<Link to="/about">About Us</Link>
									</li>

									<li>
										<Link to="/Our_Services">Services</Link>
									</li>

									<li>
										<Link to="/health_package">Health Packages</Link>
									</li>
								</ul>

								<ul>
									<li>
										<Link to="/careers">Career</Link>
									</li>

									<li>
										<Link to="/contact">Contact</Link>
									</li>

									<li>
										<Link to="/privacy-policy">Privacy Policy</Link>
									</li>

									<li>
										<Link to="/terms-conditions">Terms</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* =================================================
						    SOCIAL
						================================================= */}

						<div className="footer-social">
							<h3>Follow Us</h3>

							<div className="footer-heading-line"></div>

							<p>
								Stay connected with Baunthiyal Path Labs for healthcare updates
								and services.
							</p>

							<div className="social-icons">
								<a
									href="https://www.facebook.com/baunthiyallabs"
									target="_blank"
									rel="noreferrer"
									aria-label="Facebook"
								>
									<FaFacebookF />
								</a>

								<a
									href="https://www.youtube.com/@baunthiyalpathlabs"
									target="_blank"
									rel="noreferrer"
									aria-label="YouTube"
								>
									<FaYoutube />
								</a>

								<a
									href="https://www.instagram.com/baunthiyallabs"
									target="_blank"
									rel="noreferrer"
									aria-label="Instagram"
								>
									<FaInstagram />
								</a>
							</div>

							<div className="footer-contact">
								<a href={`tel:${PHONE_NUMBER}`}>
									<FaPhone />

									<div>
										<span>Call Us</span>
										<strong>+91 95570 69086</strong>
									</div>
								</a>

								<a
									href={`https://wa.me/${WHATSAPP_NUMBER}`}
									target="_blank"
									rel="noreferrer"
								>
									<FaWhatsapp />

									<div>
										<span>WhatsApp</span>
										<strong>Chat With Us</strong>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* =====================================================
				    COPYRIGHT
				===================================================== */}

				<div className="footer-bottom">
					<div className="footer-bottom-inner">
						<span>© 2026 Baunthiyal Path Labs &amp; Imaging Centre</span>

						<div className="bottom-links">
							<Link to="/terms-conditions">Terms &amp; Conditions</Link>

							<Link to="/privacy-policy">Privacy Policy</Link>

							<Link to="/statutory-compliance">Statutory Compliance</Link>
						</div>
					</div>
				</div>
			</footer>

			{/* =====================================================
			    DESKTOP FLOATING BUTTONS
			===================================================== */}

			<a
				href={`https://wa.me/${WHATSAPP_NUMBER}`}
				className="whatsapp-btn desktop-only"
				target="_blank"
				rel="noreferrer"
				aria-label="WhatsApp"
			>
				<FaWhatsapp />
			</a>

			<button
				type="button"
				className="callback-btn desktop-only"
				onClick={() => setShowCallback(!showCallback)}
				aria-label="Call"
			>
				<FaPhone />
			</button>

			{/* =====================================================
			    CALLBACK POPUP
			===================================================== */}

			{showCallback && (
				<div className="callback-popup">
					<div className="callback-header">
						<div>
							<span>CONTACT US</span>
							<h3>Request a Callback</h3>
						</div>

						<button
							className="close-btn"
							onClick={() => setShowCallback(false)}
						>
							✕
						</button>
					</div>

					<p>Our healthcare advisor will contact you shortly.</p>

					<input type="text" placeholder="Your Name" />

					<input type="tel" placeholder="Enter your mobile number" />

					<button className="submit-btn">
						Get Callback
						<FaArrowRight />
					</button>
				</div>
			)}

			{/* =====================================================
			    MOBILE BOTTOM NAVIGATION

			    CALL | WHATSAPP | CART | MENU
			===================================================== */}

			<nav className="mobile-tabbar">
				<a href={`tel:${PHONE_NUMBER}`} className="tab-item">
					<div className="tab-icon">
						<FaPhone />
					</div>

					<span>Call</span>
				</a>

				<a
					href={`https://wa.me/${WHATSAPP_NUMBER}`}
					className="tab-item whatsapp-tab"
					target="_blank"
					rel="noreferrer"
				>
					<div className="tab-icon">
						<FaWhatsapp />
					</div>

					<span>WhatsApp</span>
				</a>

				<Link to="/cart" className="tab-item cart-tab">
					<div className="tab-icon">
						<FaCartShopping />

						{cartCount > 0 && (
							<span className="cart-badge">
								{cartCount > 99 ? "99+" : cartCount}
							</span>
						)}
					</div>

					<span>Cart</span>
				</Link>

				<button
					type="button"
					className="tab-item tab-btn"
					onClick={openMobileMenu}
				>
					<div className="tab-icon">
						<FaBars />
					</div>

					<span>Menu</span>
				</button>
			</nav>
		</>
	);
}

export default Footer;
