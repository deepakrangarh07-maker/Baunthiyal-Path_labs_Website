import { useState } from "react";
import { Link } from "react-router-dom";
import NABL from "../../assets/nabl.png";
import NABH from "../../assets/nabh.png";
import ISO from "../../assets/ISO_9001-2015.svg";
import { useCart } from "../../context/CartContext";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
	FaXTwitter,
	FaWhatsapp,
	FaPhone,
	FaFileLines,
	FaBars,
} from "react-icons/fa6";
import "./Footer.css";

const PHONE_NUMBER = "+91 9557069086"; // replace with real number
const WHATSAPP_NUMBER = "9557069086"; // replace with real number

function Footer() {
	const [showCallback, setShowCallback] = useState(false);
	const { cartCount } = useCart();

	// Scrolls up and asks Navbar to open its mobile panel
	function openMobileMenu() {
		window.dispatchEvent(new CustomEvent("open-mobile-nav"));
	}

	return (
		<>
			<footer className="footer">
				{/* CTA strip (replaces the old trust strip) */}
				<div className="trust-strip">
					<div className="trust-container">
						<div className="cta-text">
							<h3>Not sure which test to book?</h3>
							<p>
								Talk to our team — we'll guide you to the right diagnostic
								service in minutes.
							</p>
						</div>

						<a href={`tel:${PHONE_NUMBER}`} className="call-now-btn">
							<FaPhone /> Call Now
						</a>
					</div>
				</div>

				<div className="footer-top">
					{/* Left */}
					<div className="footer-logo">
						<h2 className="brand-name">
							Baunthiyal Path Labs &amp; Imaging Centre Pvt. Ltd.
						</h2>

						<div className="footer-certificates">
							<img src={NABL} alt="NABL" />
							<img src={NABH} alt="NABH" />
							<img src={ISO} alt="ISO 9001" />
						</div>

						<p>
							With a presence in 50+ Collection Centres, Baunthiyal Path Labs
							offers quick, affordable and hassle-free home sample collection
							backed by NABL accredited labs.
						</p>
					</div>

					{/* Middle */}
					<div className="footer-links">
						<h3>Important Links</h3>

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

					{/* Right */}
					<div className="footer-social">
						<h3>Follow Us</h3>

						<div className="social-icons">
							<a href="https://www.facebook.com/baunthiyallabs">
								<FaFacebookF />
							</a>

							<a href="https://www.youtube.com/@baunthiyalpathlabs">
								<FaYoutube />
							</a>
							<a href="https://www.instagram.com/baunthiyallabs">
								<FaInstagram />
							</a>
						</div>

						<div className="store-btns">
							<img src="/google-play.png" alt="" />
							<img src="/app-store.png" alt="" />
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="term">
					<span>2026 © baunthiyallabs.com</span>
					<Link to="/terms-conditions">Terms &amp; Conditions</Link>
					<Link to="/privacy-policy">Privacy Policy</Link>
					<Link to="/statutory-compliance">Statutory Compliance</Link>
				</div>
			</footer>

			{/* Floating buttons — desktop only, tabbar replaces these on mobile */}

			<a
				href={`https://wa.me/${WHATSAPP_NUMBER}`}
				className="whatsapp-btn desktop-only"
				target="_blank"
				rel="noreferrer"
			>
				<FaWhatsapp />
			</a>

			<button
				type="button"
				className="callback-btn desktop-only"
				onClick={() => setShowCallback(!showCallback)}
			>
				<FaPhone />
			</button>

			{showCallback && (
				<div className="callback-popup">
					<div className="callback-header">
						<h3>Request a Callback</h3>
						<button
							className="close-btn"
							onClick={() => setShowCallback(false)}
						>
							✕
						</button>
					</div>

					<p>Our health advisor will call you shortly.</p>
					<input type="text" placeholder="Your Name" />
					<input type="tel" placeholder="Enter your 10 digit mobile number" />
					<button className="submit-btn">Get Callback</button>
				</div>
			)}

			{/* Mobile sticky tab bar */}
			<nav className="mobile-tabbar">
				<a href={`tel:${PHONE_NUMBER}`} className="tab-item">
					<FaPhone />
					<span>Call</span>
				</a>

				<a
					href={`https://wa.me/${WHATSAPP_NUMBER}`}
					className="tab-item"
					target="_blank"
					rel="noreferrer"
				>
					<FaWhatsapp />
					<span>Chat</span>
				</a>

				<Link to="/reports" className="tab-item">
					<FaFileLines />
					<span>Reports</span>
				</Link>

				<button
					type="button"
					className="tab-item tab-btn"
					onClick={openMobileMenu}
				>
					<FaBars />
					<span>Menu</span>
				</button>
			</nav>
		</>
	);
}

export default Footer;
